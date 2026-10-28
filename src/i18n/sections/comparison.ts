/** 「竞品对比」区块文案 */
const zh = {
  title: '竞品对比',
  subtitle: '16 个维度，Liri 一侧的数字取自已开源代码',
  dimensionHeader: '维度',
  rows: [
    { dimension: '语言', liri: 'TypeScript + Rust', competitor1: 'Python', competitor2: 'Python', competitor3: 'Python' },
    { dimension: '本地优先', liri: 'Ollama / llama.cpp + 本地 SQLite', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '智能路由', liri: '{taskTypes} 类型 · 4 档 · 5 层决策', competitor1: '未见', competitor2: '部分', competitor3: '部分' },
    { dimension: '安全体系', liri: '{securityLayers} 层纵深 · 6 种沙箱后端', competitor1: '部分', competitor2: '未见', competitor3: '部分' },
    { dimension: '消息渠道', liri: '{channels} 个（含微信/钉钉/飞书/QQ）', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '桌面客户端', liri: 'Tauri 2.11 · {components} 个 TSX 组件', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '终端 UI', liri: 'React + Ink', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '人格系统', liri: '{species} 物种 × {hats} 帽 × {eyes} 眼', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '语音交互', liri: '本地 faster-whisper / Piper + 云端', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '成本透明', liri: 'DB 定价 · 每次调用落库', competitor1: '未见', competitor2: '部分', competitor3: '未见' },
    { dimension: '外脑系统', liri: '知识库 + 记忆 + 事件日志', competitor1: '未见', competitor2: '部分', competitor3: '未见' },
    { dimension: '上下文治理', liri: '分层切窗 + 三级压缩', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '生态市场', liri: '插件市场 + MCP 市场 + 技能来源', competitor1: '部分', competitor2: '部分', competitor3: '部分' },
    { dimension: 'Agent 策略', liri: '{agentStrategies} 种策略 · PDCA · Swarm', competitor1: '未见', competitor2: '支持', competitor3: '支持' },
    { dimension: '定时任务', liri: 'once / interval / cron', competitor1: '未见', competitor2: '未见', competitor3: '未见' },
    { dimension: '协议支持', liri: 'MCP + ACP + A2A + LSP', competitor1: '部分', competitor2: '未见', competitor3: '部分' },
  ],
  footnote:
    '* Liri 列数据取自源码 v{version}；竞品列为定性判断，以各项目公开文档为准，「未见」不代表其不具备该能力',
};

const en = {
  title: 'Comparison',
  subtitle: '16 dimensions — every figure on the Liri side is taken from the open-source code',
  dimensionHeader: 'Dimension',
  rows: [
    { dimension: 'Language', liri: 'TypeScript + Rust', competitor1: 'Python', competitor2: 'Python', competitor3: 'Python' },
    { dimension: 'Local-first', liri: 'Ollama / llama.cpp + local SQLite', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Smart routing', liri: '{taskTypes} task types · 4 tiers · 5 decision layers', competitor1: 'Not found', competitor2: 'Partial', competitor3: 'Partial' },
    { dimension: 'Security model', liri: '{securityLayers} defense layers · 6 sandbox backends', competitor1: 'Partial', competitor2: 'Not found', competitor3: 'Partial' },
    { dimension: 'Messaging channels', liri: '{channels} channels (incl. WeChat / DingTalk / Feishu / QQ)', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Desktop client', liri: 'Tauri 2.11 · {components} TSX components', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Terminal UI', liri: 'React + Ink', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Persona system', liri: '{species} species × {hats} hats × {eyes} eyes', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Voice interaction', liri: 'Local faster-whisper / Piper + cloud', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Cost transparency', liri: 'Pricing in the DB · every call recorded', competitor1: 'Not found', competitor2: 'Partial', competitor3: 'Not found' },
    { dimension: 'Second Brain', liri: 'Knowledge base + memory + event log', competitor1: 'Not found', competitor2: 'Partial', competitor3: 'Not found' },
    { dimension: 'Context governance', liri: 'Layered windowing + three-stage compression', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Ecosystem & marketplace', liri: 'Plugin market + MCP market + skill sources', competitor1: 'Partial', competitor2: 'Partial', competitor3: 'Partial' },
    { dimension: 'Agent strategies', liri: '{agentStrategies} strategies · PDCA · Swarm', competitor1: 'Not found', competitor2: 'Yes', competitor3: 'Yes' },
    { dimension: 'Scheduled tasks', liri: 'once / interval / cron', competitor1: 'Not found', competitor2: 'Not found', competitor3: 'Not found' },
    { dimension: 'Protocol support', liri: 'MCP + ACP + A2A + LSP', competitor1: 'Partial', competitor2: 'Not found', competitor3: 'Partial' },
  ],
  footnote:
    '* Liri column data is taken from source code v{version}; competitor columns are qualitative judgments based on each project’s public documentation — “Not found” does not mean the capability is absent',
} satisfies typeof zh;

export const comparison = { zh, en };
