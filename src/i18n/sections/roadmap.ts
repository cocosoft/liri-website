/** 「版本与迭代」区块文案 */
const zh = {
  title: '版本与迭代',
  subtitle: '版本号、标签数、提交记录都可在 GitHub 复核；仓库历史含开发期积累，首发后进入公开迭代',
  milestones: [
    {
      quarter: '2026-10-28',
      version: 'v{version}',
      label: '当前版本',
      items: [
        '{tools} 个内置工具 · {toolCategories} 个分类',
        '{channels} 个消息渠道',
        '{securityLayers} 层安全 + 6 种沙箱后端',
        '桌面端 {desktopComponents} 个组件 · {desktopPages} 个页面',
      ],
    },
    {
      quarter: '2026-10',
      version: 'v0.5.13 → v0.5.21',
      label: '已发布',
      items: [
        '三天内连发 8 个版本（v0.5.13 → v0.5.21），属开发期公开推进',
        '内核模块外移，门禁基线同步',
        '计划进度改为按产物存在性推进',
        '沙箱权限改动即时生效',
      ],
    },
    {
      quarter: '仓库累计',
      version: '{releases} 个 tag',
      label: '迭代节奏',
      items: [
        '累计 {commits} 次提交',
        'CI 覆盖 lint:arch / 类型检查 / 单元测试',
        '仓库公开，Issue 与 PR 可见',
      ],
    },
    {
      quarter: '后续',
      version: 'v0.6+',
      label: '规划中',
      items: [
        '以 GitHub Releases 与 Issues 为准',
        '在线文档站已上线（中英双语）',
        '功能优先级欢迎在 Issue 里投票',
      ],
    },
  ],
};

const en = {
  title: 'Versions & Cadence',
  subtitle: 'Version numbers, tag counts and commit history are all verifiable on GitHub; the history includes pre-launch development, with public iteration starting at launch',
  milestones: [
    {
      quarter: '2026-10-28',
      version: 'v{version}',
      label: 'Current release',
      items: [
        '{tools} built-in tools across {toolCategories} categories',
        '{channels} messaging channels',
        '{securityLayers} security layers + 6 sandbox backends',
        '{desktopComponents} desktop components · {desktopPages} pages',
      ],
    },
    {
      quarter: '2026-10',
      version: 'v0.5.13 → v0.5.21',
      label: 'Shipped',
      items: [
        'Eight releases in three days (v0.5.13 → v0.5.21), all part of pre-launch development',
        'Core modules extracted, guardrail baselines synced',
        'Progress tracking now driven by artifact existence',
        'Sandbox permission changes apply instantly',
      ],
    },
    {
      quarter: 'Repository totals',
      version: '{releases} tags',
      label: 'Release rhythm',
      items: [
        '{commits} commits to date',
        'CI covers lint:arch / type checking / unit tests',
        'Public repository with visible issues and PRs',
      ],
    },
    {
      quarter: 'Next',
      version: 'v0.6+',
      label: 'Planned',
      items: [
        'Tracked in GitHub Releases and Issues',
        'Online documentation site is live (Chinese and English)',
        'Vote on feature priorities in Issues',
      ],
    },
  ],
} satisfies typeof zh;

export const roadmap = { zh, en };
