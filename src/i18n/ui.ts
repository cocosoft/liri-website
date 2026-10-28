/**
 * 全站通用文案（导航、页脚、阶段标识、文档框架、SEO）。
 * 约定：先写 zh，再用 `satisfies typeof zh` 约束 en，缺 key 会在编译期报错。
 */

const zh = {
  meta: {
    homeTitle: 'Liri — 你的 AI 私人助手',
    homeDescription:
      'Liri（玲珑鸟）是开源（MIT）的终端 AI 智能体：82 个内置工具、27 个消息渠道、五层安全防线，支持本地模型与多供应商路由。',
  },

  nav: {
    capabilities: '核心能力',
    architecture: '架构',
    security: '安全',
    routing: '路由',
    voice: '语音',
    brain: '外脑',
    desktop: '桌面',
    cost: '成本',
    ecosystem: '市场',
    evolution: '演进',
    start: '开始',
    docs: '文档',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },

  lang: {
    label: '语言',
    switchToZh: '切换到中文',
    switchToEn: '切换到英文',
  },

  stage: {
    label: '快速迭代期',
    note: '接口与文档可能变动',
    detail:
      '当前处于快速迭代阶段，接口、配置项与文档会随版本调整，升级前请留意发布日志。',
    cta: '发布日志',
  },

  footer: {
    tagline: 'AI 私人助手 · 本地优先 · 安全内生',
    resources: '资源',
    repo: 'GitHub 仓库',
    issue: '提交 Issue',
    releases: '发布日志',
    license: 'MIT License',
    community: '社区',
    discord: 'Discord（即将上线）',
    docs: '使用文档',
    status: '项目状态',
    evolution: '演进记录',
    support: '支持 Liri',
    discussions: 'Discussions（即将开启）',
    copyright: '© {year} Liri. Released under MIT License.',
    stats:
      '{tsFiles} TS 文件 · {tools} 工具 · {securityLayers} 层安全 · {channels} 渠道 · {buddySpecies} 种 Buddy',
  },

  docs: {
    label: '文档',
    pageTitle: '文档 — Liri',
    pageDescription: 'Liri 的安装、配置、渠道接入与命令参考。',
    all: '全部文档',
    articleTitle: '{title} — Liri 文档',
    backHome: '返回首页',
    indexTitle: '使用文档',
    indexIntro:
      '内容同步自 GitHub 仓库 <code class="font-mono text-brand-400">app/docs</code>，共 {count} 篇。',
    footerNote:
      '文档与源码可能不同步，以 <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">GitHub 仓库</a> 为准。',
    source: '源文件：',
  },

  common: {
    scroll: '向下滚动',
    copy: '点击复制',
    backHome: '返回首页',
    fullStatus: '查看完整状态',
  },
};

const en = {
  meta: {
    homeTitle: 'Liri — Your Personal AI Assistant',
    homeDescription:
      'Liri is an open-source (MIT) terminal AI agent: 82 built-in tools, 27 messaging channels, a five-layer security defense, local model support and multi-provider routing.',
  },

  nav: {
    capabilities: 'Capabilities',
    architecture: 'Architecture',
    security: 'Security',
    routing: 'Routing',
    voice: 'Voice',
    brain: 'Second Brain',
    desktop: 'Desktop',
    cost: 'Cost',
    ecosystem: 'Ecosystem',
    evolution: 'Build Log',
    start: 'Get Started',
    docs: 'Docs',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  lang: {
    label: 'Language',
    switchToZh: 'Switch to Chinese',
    switchToEn: 'Switch to English',
  },

  stage: {
    label: 'Rapid iteration',
    note: 'APIs and docs may change',
    detail:
      'Liri is being iterated quickly: APIs, config options and documentation change between releases. Check the release notes before upgrading.',
    cta: 'Release notes',
  },

  footer: {
    tagline: 'Personal AI assistant · Local-first · Security by design',
    resources: 'Resources',
    repo: 'GitHub repository',
    issue: 'Report an issue',
    releases: 'Release notes',
    license: 'MIT License',
    community: 'Community',
    discord: 'Discord (coming soon)',
    docs: 'Documentation',
    status: 'Project status',
    evolution: 'Build log',
    support: 'Support Liri',
    discussions: 'Discussions (opening soon)',
    copyright: '© {year} Liri. Released under MIT License.',
    stats:
      '{tsFiles} TS files · {tools} tools · {securityLayers} security layers · {channels} channels · {buddySpecies} Buddy species',
  },

  docs: {
    label: 'Docs',
    pageTitle: 'Documentation — Liri',
    pageDescription: 'Installation, configuration, channel setup and command reference for Liri.',
    all: 'All docs',
    articleTitle: '{title} — Liri Docs',
    backHome: 'Back to home',
    indexTitle: 'Documentation',
    indexIntro:
      'Synced from <code class="font-mono text-brand-400">app/docs</code> in the GitHub repository · {count} articles.',
    footerNote:
      'The site may lag behind the source. The <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">GitHub repository</a> is authoritative.',
    source: 'Source: ',
  },

  common: {
    scroll: 'Scroll down',
    copy: 'Click to copy',
    backHome: 'Back to home',
    fullStatus: 'See full status',
  },
} satisfies typeof zh;

export const ui = { zh, en };
