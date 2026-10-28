/** 「生态市场」区块文案 */
const zh = {
  title: '生态市场',
  subtitle: '插件市场 + MCP 市场 + 技能三来源 + 模板市场 = 可组合的 Liri 生态',
  mcp: {
    title: 'MCP 市场',
    desc: '5 个来源适配器统一检索',
    items: ['GitHub 来源', 'NPM 来源', '官方目录', 'Smithery 来源', '预设服务'],
  },
  plugins: {
    title: '插件市场',
    desc: '本地 / npm / 远端目录三种来源',
    items: ['插件 SDK + 适配器', '生命周期与热加载', '签名校验', '配置端点 + CLI', '5 种构建变体'],
  },
  skills: {
    title: '技能三来源',
    desc: '内置 / 用户 / 第三方物理隔离',
    items: ['{skills} 个内置技能', '用户自定义技能', 'ClawHub 第三方来源', '条件触发编排', '技能组合与匹配'],
  },
  templates: {
    title: '模板与协议',
    desc: 'Agent 与文档模板，接入即用',
    items: ['Agent 模板市场', '文档模板市场', 'MCP / ACP / A2A / LSP', '插件与技能可组合', '模板参数化复用'],
  },
};

const en = {
  title: 'Ecosystem',
  subtitle:
    'Plugin marketplace + MCP marketplace + three skill sources + template marketplace = a composable Liri ecosystem',
  mcp: {
    title: 'MCP marketplace',
    desc: '5 source adapters, one search',
    items: ['GitHub', 'npm', 'Official registry', 'Smithery', 'Bundled services'],
  },
  plugins: {
    title: 'Plugin marketplace',
    desc: 'Local, npm and remote registries',
    items: [
      'Plugin SDK + adapters',
      'Lifecycle & hot reload',
      'Signature verification',
      'Config endpoints + CLI',
      '5 build variants',
    ],
  },
  skills: {
    title: 'Three skill sources',
    desc: 'Built-in, user and third-party — physically isolated',
    items: [
      '{skills} built-in skills',
      'User-defined skills',
      'ClawHub third-party source',
      'Conditional orchestration',
      'Skill composition & matching',
    ],
  },
  templates: {
    title: 'Templates & protocols',
    desc: 'Agent and document templates, ready to plug in',
    items: [
      'Agent template marketplace',
      'Document template marketplace',
      'MCP / ACP / A2A / LSP',
      'Composable plugins and skills',
      'Parameterized template reuse',
    ],
  },
} satisfies typeof zh;

export const ecosystem = { zh, en };
