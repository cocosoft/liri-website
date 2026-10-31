// ⚠️ 本文件由 scripts/sync-facts.ts 自动生成，请勿手改。
// 重新生成：bun run sync:facts
// 校验漂移：bun run sync:facts:check
// 事实源：app/package.json、toolNames.generated.ts、ChannelCatalog.ts、app/src、client/src

export const generatedFacts = {
  version: '0.5.22',
  tools: 69,
  channels: 27,
  tsFiles: 4109,
  tsLines: '98 万',
  desktopComponents: 429,
  snapshot: '2026-11-01',
} as const;

/** 采集时点（构建日），用于页面「数据快照」标注 */
export const factsSnapshot = generatedFacts.snapshot;
