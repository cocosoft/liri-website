/**
 * 从 Liri 主仓采集「会变的数字」，生成 src/data/facts.generated.ts。
 *
 * 为什么需要：site.ts 里的版本号、工具数、文件数曾长期靠手写，漂移了整整一个版本。
 * 这里让它们从源码自动读出来，`--check` 可在 CI 里拦截漂移。
 *
 * 用法：
 *   bun scripts/sync-facts.ts          # 重新生成
 *   bun scripts/sync-facts.ts --check  # 只校验：版本/工具数/渠道数不符则退出码 1，
 *                                      # 代码规模变化只告警（CI 用）
 *
 * 主仓路径默认取本项目的上一级，可用 LIRI_ROOT 覆盖。
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(here, '..');
const repoRoot = process.env.LIRI_ROOT ?? resolve(websiteRoot, '..');
const appSrc = join(repoRoot, 'app', 'src');
const clientSrc = join(repoRoot, 'client', 'src');
const outFile = join(websiteRoot, 'src', 'data', 'facts.generated.ts');
const checkOnly = process.argv.includes('--check');

function fail(message: string): never {
  console.error(`[sync-facts] ${message}`);
  process.exit(1);
}

if (!existsSync(appSrc)) fail(`找不到 Liri 源码目录：${appSrc}（可用 LIRI_ROOT 指定主仓路径）`);

function walk(dir: string, exts: string[]): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist') continue;
      out.push(...walk(full, exts));
    } else if (exts.some((ext) => entry.name.endsWith(ext))) {
      out.push(full);
    }
  }
  return out;
}

/** 行数口径与 scripts/architecture-health.ts 一致：以 \n 切分，含末行 */
function countLines(files: string[]): number {
  let total = 0;
  for (const file of files) {
    total += readFileSync(file, 'utf8').split('\n').length;
  }
  return total;
}

function read(relPath: string): string {
  const full = join(repoRoot, relPath);
  if (!existsSync(full)) fail(`缺少文件：${full}`);
  return readFileSync(full, 'utf8');
}

// 版本：app/package.json
const pkg = JSON.parse(read('app/package.json')) as { version?: string };
if (!pkg.version) fail('app/package.json 中没有 version 字段');

// 工具数：TOOL_NAMES_COUNT（口径＝全量 ∧ 可实例化，不含默认关闭的 flag-gated 工具）
const toolNames = read('app/src/constants/toolNames.generated.ts');
const toolMatch = toolNames.match(/TOOL_NAMES_COUNT\s*=\s*(\d+)/);
if (!toolMatch) fail('toolNames.generated.ts 中未找到 TOOL_NAMES_COUNT，请先运行 bun run gen:toolnames');
const tools = Number(toolMatch[1]);

// 渠道数：ChannelCatalog 条目
const catalog = read('app/src/channels/ChannelCatalog.ts');
const channels = (catalog.match(/^\s+type: '/gm) ?? []).length;
if (channels === 0) fail('ChannelCatalog.ts 中未解析到任何渠道，目录结构可能已变更');

// 代码规模：app/src 下 .ts/.tsx
const tsFiles = walk(appSrc, ['.ts', '.tsx']);
const tsFileCount = tsFiles.length;
const tsLineCount = countLines(tsFiles);

// 桌面组件：client/src 下 .tsx
const desktopComponents = walk(clientSrc, ['.tsx']).length;

const now = new Date();
const snapshot = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
// 行数取整到万位，避免页面上出现 979,006 这种随时在变的精确数字
const tsLinesWan = `${Math.round(tsLineCount / 10000)} 万`;

const banner = `// ⚠️ 本文件由 scripts/sync-facts.ts 自动生成，请勿手改。
// 重新生成：bun run sync:facts
// 校验漂移：bun run sync:facts:check
// 事实源：app/package.json、toolNames.generated.ts、ChannelCatalog.ts、app/src、client/src
`;

const content = `${banner}
export const generatedFacts = {
  version: '${pkg.version}',
  tools: ${tools},
  channels: ${channels},
  tsFiles: ${tsFileCount},
  tsLines: '${tsLinesWan}',
  desktopComponents: ${desktopComponents},
  snapshot: '${snapshot}',
} as const;

/** 采集时点（构建日），用于页面「数据快照」标注 */
export const factsSnapshot = generatedFacts.snapshot;
`;

const previous = existsSync(outFile) ? readFileSync(outFile, 'utf8') : '';

/**
 * 哪些数字算「必须同步」：版本 / 工具数 / 渠道数 —— 它们是承诺，错了会误导。
 * 代码规模（文件数、行数、桌面组件数）几乎每次提交都在变，只告警不阻断，
 * 否则每天都会被上游的正常提交卡住部署。
 */
const stripVolatile = (text: string) =>
  text
    .replace(/^\s*(tsFiles|tsLines|desktopComponents): .*$/gm, '')
    .replace(/snapshot: '\d{4}-\d{2}-\d{2}'/, "snapshot: '<date>'");

function readField(text: string, key: string): string {
  return text.match(new RegExp(`${key}: '?([^',\\n]+)'?`))?.[1]?.trim() ?? '?';
}

if (checkOnly) {
  if (stripVolatile(previous) !== stripVolatile(content)) {
    console.error('[sync-facts] 站点数字与源码不一致，请运行 `bun run sync:facts` 后提交。');
    console.error(
      `[sync-facts] 期望：version=${pkg.version} tools=${tools} channels=${channels}` +
        `（当前提交：version=${readField(previous, 'version')} tools=${readField(previous, 'tools')} channels=${readField(previous, 'channels')}）`,
    );
    process.exit(1);
  }

  const sizeChanged =
    readField(previous, 'tsFiles') !== String(tsFileCount) ||
    readField(previous, 'tsLines') !== tsLinesWan ||
    readField(previous, 'desktopComponents') !== String(desktopComponents);
  if (sizeChanged) {
    console.warn(
      `[sync-facts] 代码规模已过期（不阻断部署）：提交的是 ${readField(previous, 'tsFiles')} 文件 / ${readField(previous, 'tsLines')} 行 / ${readField(previous, 'desktopComponents')} 组件，` +
        `源码现在是 ${tsFileCount} / ${tsLinesWan} / ${desktopComponents}。方便时运行 \`bun run sync:facts\`。`,
    );
  }
  console.log('[sync-facts] 版本、工具数、渠道数与源码一致。');
  process.exit(0);
}

writeFileSync(outFile, content, 'utf8');
console.log(
  `[sync-facts] 已生成 ${outFile}\n` +
    `  version=${pkg.version} tools=${tools} channels=${channels}\n` +
    `  tsFiles=${tsFileCount} tsLines=${tsLineCount} (${tsLinesWan}) desktopComponents=${desktopComponents}\n` +
    `  snapshot=${snapshot}`,
);
