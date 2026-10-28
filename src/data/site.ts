/**
 * 全站唯一事实源。
 * 所有数字均可在 Liri 源码（github.com/cocosoft/Liri）中复核，改动前请先核对源码：
 * - 工具数：app/src/constants/toolNames.generated.ts  TOOL_NAMES_COUNT
 * - 渠道数：app/src/channels/ChannelCatalog.ts
 * - TS/TSX 文件数：app/src 下 .ts + .tsx
 * - 桌面组件：client/src 下 .tsx
 * - 版本：app/package.json
 */
export const siteFacts = {
  version: '0.5.21',
  releaseDate: '2026-10-28',

  // 能力规模
  tools: 82,
  toolCategories: 23,
  channels: 27,
  modules: 71,
  taskTypes: 19,
  llmProviders: 14,
  mediaProviders: 9,

  // 代码规模
  tsFiles: 4059,
  tsLines: '87 万',
  desktopComponents: 425,
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
