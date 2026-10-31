/**
 * 全站唯一事实源。
 *
 * 会随仓库变化的数字（版本、工具数、渠道数、文件数、行数、桌面组件数）由
 * `scripts/sync-facts.ts` 从 Liri 源码自动生成，见 `facts.generated.ts`；
 * 运行 `bun run sync:facts` 更新，`bun run sync:facts:check` 可在 CI 拦截漂移。
 *
 * 其余需要人工判断的常量（分类数、模块数等）仍在此维护，改动前请先核对源码：
 * - 工具分类数：app/src/tools 下的目录划分
 * - 模块数：app/src 子系统目录
 */
import { generatedFacts } from './facts.generated';

export const siteFacts = {
  // ---- 自动生成（勿手改，见 facts.generated.ts） ----
  version: generatedFacts.version,
  tools: generatedFacts.tools,
  channels: generatedFacts.channels,
  tsFiles: generatedFacts.tsFiles,
  tsLines: generatedFacts.tsLines,
  desktopComponents: generatedFacts.desktopComponents,
  /** 数据采集日期，页面据此标注「数据快照」 */
  snapshot: generatedFacts.snapshot,

  releaseDate: '2026-10-28',

  // 能力规模
  toolCategories: 23,
  modules: 71,
  taskTypes: 19,
  llmProviders: 14,
  mediaProviders: 9,

  // 代码规模
  desktopPages: 32,
  rustModules: 9,

  // 安全
  securityLayers: 5,
  sandboxFiles: 51,
  dangerousRules: 37,
  injectionRules: 14,
  shellRules: 10,
  agentStrategies: 4,

  // Buddy
  buddySpecies: 18,
  buddyHats: 8,
  buddyEyes: 6,
  buddyRarities: 5,

  // 仓库
  releases: 118,
  commits: 3325,
  docsCount: 143,
  bundledSkills: 11,
} as const;

/**
 * 架构健康度快照 —— 手动维护（无法从构建产物稳定推导）：
 *   1. 在 `app/` 下运行 `bun run health:arch`
 *   2. 把「总分 / 超限文件数 / 未登记数」抄到这里，并更新 date
 * 它是体检表，不是 KPI：分数变差时如实写，不要为了好看而改数字。
 */
export const architectureSnapshot = {
  date: '2026-11-01',
  grade: 'D',
  score: '10/40',
  oversized: 142,
  unregistered: 141,
  chatManagerLines: 2570,
} as const;

/**
 * 站点阶段标识（文案见 src/i18n/ui.ts 的 stage）。
 * 正式版发布时把 status 改为 'stable'，顶部通栏与首屏徽章会整体消失，无需改动模板。
 */
export const releaseStage = {
  status: 'iterating' as 'iterating' | 'stable',
  href: 'https://github.com/cocosoft/Liri/releases',
} as const;

/** 模板据此决定是否渲染阶段标识 */
export const isIterating = releaseStage.status === 'iterating';

/** 消息渠道，按场景分组（来源：ChannelCatalog.ts，共 27 个） */
export const channelGroups = [
  {
    name: '即时通讯',
    channels: ['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal', 'Matrix', 'IRC', 'Line', 'Zalo'],
  },
  {
    name: '国内平台',
    channels: ['微信', '企业微信', '钉钉', '飞书', 'QQ', '元宝'],
  },
  {
    name: '协作与社交',
    channels: ['Microsoft Teams', 'Google Chat', 'Mattermost', 'Facebook Messenger', 'Twitter/X'],
  },
  {
    name: '其它通道',
    channels: ['Email', 'SMS', 'Webhook', 'Nostr', 'Claude', 'iMessage', '移动端接入'],
  },
] as const;

/** 渠道总数自检：与 ChannelCatalog 保持一致 */
export const channelCount = channelGroups.reduce((n, g) => n + g.channels.length, 0);
