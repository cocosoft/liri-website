/** 「能力自查表」区块文案（首发期不拉竞品，只列自身状态与源码位置） */
const zh = {
  title: '能力自查表',
  subtitle:
    '16 个维度逐项标注当前状态与源码位置：数字都能点到代码，还没到位的地方也直接写出来。',
  dimensionHeader: '维度',
  stateHeader: '当前状态',
  statusHeader: '进度',
  sourceHeader: '源码',
  sourceLink: '查看',
  statuses: {
    ready: '已实现',
    polish: '打磨中',
    audit: '待外部审计',
    building: '建设中',
    experimental: '实验性',
  },
  statusLegend:
    '状态为维护者自评，随版本更新；点「查看」可跳到对应源码目录自行核对。',
  footnote: '* 表格数据取自源码 v{version}，源码链接指向 GitHub 仓库 main 分支。',
  rows: [
    { dimension: '语言', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
    { dimension: '本地优先', liri: 'Ollama / llama.cpp + 本地 SQLite', status: 'ready', source: 'app/src/ai' },
    { dimension: '智能路由', liri: '{taskTypes} 类型 · 4 档 · 5 层决策', status: 'ready', source: 'app/src/ai' },
    { dimension: '安全体系', liri: '{securityLayers} 层纵深 · 6 种沙箱后端', status: 'audit', source: 'app/src/security' },
    { dimension: '消息渠道', liri: '{channels} 个（含微信 / 钉钉 / 飞书 / QQ）', status: 'ready', source: 'app/src/channels' },
    { dimension: '桌面客户端', liri: 'Tauri 2.11 · {components} 个 TSX 组件', status: 'polish', source: 'client/src' },
    { dimension: '终端 UI', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
    { dimension: '人格系统', liri: '{species} 物种 × {hats} 帽 × {eyes} 眼', status: 'ready', source: 'app/src/buddy' },
    { dimension: '语音交互', liri: '本地 faster-whisper / Piper + 云端', status: 'ready', source: 'app/src/voice' },
    { dimension: '成本透明', liri: 'DB 定价 · 每次调用落库', status: 'ready', source: 'app/src/cost' },
    { dimension: '外脑系统', liri: '知识库 + 记忆 + 事件日志', status: 'ready', source: 'app/src/knowledge' },
    { dimension: '上下文治理', liri: '分层切窗 + 三级压缩', status: 'ready', source: 'app/src/context' },
    { dimension: '生态市场', liri: '插件市场 + MCP 市场 + 技能来源', status: 'building', source: 'app/src/plugins' },
    { dimension: 'Agent 策略', liri: '{agentStrategies} 种策略 · PDCA · Swarm', status: 'ready', source: 'app/src/agent' },
    { dimension: '定时任务', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
    { dimension: '协议支持', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
  ],
};

const en = {
  title: 'Capability self-check',
  subtitle:
    'Sixteen dimensions, each with its current status and its source location — every number links to code, and what is not finished yet is written down too.',
  dimensionHeader: 'Dimension',
  stateHeader: 'Current state',
  statusHeader: 'Status',
  sourceHeader: 'Source',
  sourceLink: 'View',
  statuses: {
    ready: 'Shipped',
    polish: 'Polishing',
    audit: 'Pending audit',
    building: 'In progress',
    experimental: 'Experimental',
  },
  statusLegend:
    'Status is self-assessed by the maintainers and moves with each release; “View” jumps to the relevant directory so you can check it yourself.',
  footnote: '* Data reflects source v{version}; source links point to the main branch on GitHub.',
  rows: [
    { dimension: 'Language', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
    { dimension: 'Local-first', liri: 'Ollama / llama.cpp + local SQLite', status: 'ready', source: 'app/src/ai' },
    { dimension: 'Smart routing', liri: '{taskTypes} task types · 4 tiers · 5 decision layers', status: 'ready', source: 'app/src/ai' },
    { dimension: 'Security model', liri: '{securityLayers} defense layers · 6 sandbox backends', status: 'audit', source: 'app/src/security' },
    { dimension: 'Messaging channels', liri: '{channels} channels (incl. WeChat / DingTalk / Feishu / QQ)', status: 'ready', source: 'app/src/channels' },
    { dimension: 'Desktop client', liri: 'Tauri 2.11 · {components} TSX components', status: 'polish', source: 'client/src' },
    { dimension: 'Terminal UI', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
    { dimension: 'Persona system', liri: '{species} species × {hats} hats × {eyes} eyes', status: 'ready', source: 'app/src/buddy' },
    { dimension: 'Voice interaction', liri: 'Local faster-whisper / Piper + cloud', status: 'ready', source: 'app/src/voice' },
    { dimension: 'Cost transparency', liri: 'Pricing in the DB · every call recorded', status: 'ready', source: 'app/src/cost' },
    { dimension: 'Second Brain', liri: 'Knowledge base + memory + event log', status: 'ready', source: 'app/src/knowledge' },
    { dimension: 'Context governance', liri: 'Layered windowing + three-stage compression', status: 'ready', source: 'app/src/context' },
    { dimension: 'Marketplace', liri: 'Plugin market + MCP market + skill sources', status: 'building', source: 'app/src/plugins' },
    { dimension: 'Agent strategies', liri: '{agentStrategies} strategies · PDCA · Swarm', status: 'ready', source: 'app/src/agent' },
    { dimension: 'Scheduled tasks', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
    { dimension: 'Protocol support', liri: 'MCP + ACP + A2A + LSP', status: 'experimental', source: 'app/src/mcp' },
  ],
} satisfies typeof zh;

export const comparison = { zh, en };

/** 状态 → 徽章配色 */
export const comparisonStatusClass: Record<keyof typeof zh.statuses, string> = {
  ready: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  polish: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  audit: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  building: 'text-surface-400 bg-surface-800/40 border-surface-700/40',
  experimental: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
};
