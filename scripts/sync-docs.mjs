/**
 * 从 Liri 源码仓库同步对外文档到官网。
 *
 * 用法：bun run sync:docs   （或 node scripts/sync-docs.mjs）
 *
 * - 只同步 MANIFEST 中列出的文档（内部工程文档不进官网）
 * - 自动补 frontmatter、抽取 H1 作为标题
 * - 仓库内相对 .md 链接：已收录的改写为 /docs/<slug>，未收录的指向 GitHub 源文件
 * - 修正文档里的旧路径 `cd backend` → `cd app`
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(SITE_ROOT, '..');
const SOURCE_DIR = path.join(REPO_ROOT, 'app', 'docs');
const TARGET_DIR = path.join(SITE_ROOT, 'src', 'content', 'docs');
const GITHUB_BLOB = 'https://github.com/cocosoft/Liri/blob/main/app/docs/';

/** 对外文档清单：source 相对 app/docs，slug 为官网路由 */
const MANIFEST = [
  { source: '快速入门/quickstart.md', slug: 'quickstart', title: '快速开始', group: '入门', order: 1 },
  { source: '快速入门/installation.md', slug: 'installation', title: '安装 Liri', group: '入门', order: 2 },
  { source: '快速入门/setup.md', slug: 'setup', title: '首次配置', group: '入门', order: 3 },
  { source: '快速入门/onboarding.md', slug: 'onboarding', title: '引导流程', group: '入门', order: 4 },
  { source: '安装部署/docker.md', slug: 'docker', title: 'Docker 部署', group: '安装部署', order: 5 },
  { source: '配置与安全/configuration.md', slug: 'configuration', title: '配置说明', group: '配置与安全', order: 6 },
  { source: '配置与安全/permissions.md', slug: 'permissions', title: '权限控制', group: '配置与安全', order: 7 },
  { source: '配置与安全/sandbox.md', slug: 'sandbox', title: '沙箱隔离', group: '配置与安全', order: 8 },
  { source: '渠道/index.md', slug: 'channels', title: '渠道总览', group: '渠道接入', order: 9 },
  { source: '渠道/telegram.md', slug: 'channels/telegram', title: 'Telegram 接入', group: '渠道接入', order: 10 },
  { source: '渠道/feishu.md', slug: 'channels/feishu', title: '飞书接入', group: '渠道接入', order: 11 },
  { source: '渠道/wechat.md', slug: 'channels/wechat', title: '微信接入', group: '渠道接入', order: 12 },
  { source: '工具参考/index.md', slug: 'tools', title: '工具总览', group: '参考', order: 13 },
  { source: 'USAGE.md', slug: 'commands', title: '命令参考', group: '参考', order: 14 },
  { source: '帮助与支持/faq.md', slug: 'faq', title: '常见问题', group: '参考', order: 15 },
];

const bySource = new Map(MANIFEST.map((d) => [path.posix.normalize(d.source), d]));

function resolveLink(target, fromSource) {
  const [rawPath, anchor] = target.split('#');
  if (!rawPath || /^(https?:|mailto:|tel:)/.test(rawPath)) return target;
  if (!rawPath.endsWith('.md')) return target;

  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(fromSource), rawPath));
  const hit = bySource.get(resolved);
  const hash = anchor ? `#${anchor}` : '';
  if (hit) return `/docs/${hit.slug}${hash}`;
  // 只有仓库里确实存在、且位于 app/docs 之下的文档才给 GitHub 链接，否则按死链处理
  if (!resolved.startsWith('..') && existsSync(path.join(SOURCE_DIR, resolved))) {
    return GITHUB_BLOB + encodeURI(resolved) + hash;
  }
  return null;
}

function transform(body, source) {
  // 相对 .md 互链改写；无法定位目标的链接降级为纯文本，避免产出 404
  let out = body.replace(/(!?)\[([^\]]+)\]\(([^)\s]+)\)/g, (m, bang, text, target) => {
    if (bang) return m; // 图片保持原样
    const url = resolveLink(target, source);
    return url === null ? text : `[${text}](${url})`;
  });
  // 旧路径修正
  out = out.replace(/cd backend\b/g, 'cd app');
  // 裸 URL 后紧跟中文右括号时，用尖括号界定链接边界，避免括号被吞进 URL
  out = out.replace(/(https?:\/\/[^\s<>）]+)）/g, '<$1>）');
  // 源文档里"用 Node.js 安装"的小节与事实冲突（数据库依赖 bun:sqlite），替换为准确说明
  out = out.replace(
    /### 使用 Node\.js[\s\S]*?(?=\n## )/,
    '### 运行环境说明\n\n> Liri 的数据库依赖 `bun:sqlite`，必须使用 **Bun** 安装与运行；`npm / yarn / pnpm install` 无法替代。\n\n'
  );
  return out;
}

function extractTitle(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function extractDescription(body) {
  const withoutH1 = body.replace(/^#\s+.+\n/, '');
  const para = withoutH1
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .find((s) => s && !s.startsWith('```') && !s.startsWith('|') && !s.startsWith('>'));
  if (!para) return '';
  return para.replace(/[*`#>-]/g, '').replace(/\s+/g, ' ').slice(0, 90);
}

async function main() {
  await mkdir(TARGET_DIR, { recursive: true });

  // 清空旧产物，保证与清单一致
  for (const entry of await readdir(TARGET_DIR, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      await writeFile(path.join(TARGET_DIR, entry.name), '');
    }
  }

  let written = 0;
  for (const doc of MANIFEST) {
    const sourcePath = path.join(SOURCE_DIR, doc.source);
    let raw;
    try {
      raw = await readFile(sourcePath, 'utf8');
    } catch {
      console.warn(`  ! 跳过（源文件不存在）: ${doc.source}`);
      continue;
    }

    const h1 = extractTitle(raw);
    const body = transform(raw, doc.source);
    const description = extractDescription(raw);

    const frontmatter = [
      '---',
      `title: ${JSON.stringify(doc.title || h1 || doc.slug)}`,
      `description: ${JSON.stringify(description)}`,
      `group: ${JSON.stringify(doc.group)}`,
      `order: ${doc.order}`,
      `source: ${JSON.stringify(doc.source)}`,
      '---',
      '',
      `> 本文同步自 GitHub 仓库：\`app/docs/${doc.source}\`，如与源码不一致，以仓库为准。`,
      '',
    ].join('\n');

    const targetPath = path.join(TARGET_DIR, `${doc.slug}.md`);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, frontmatter + body, 'utf8');
    written++;
  }

  console.log(`已同步 ${written}/${MANIFEST.length} 篇文档到 src/content/docs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
