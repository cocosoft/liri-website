/** 「核心能力」区块文案 */
const zh = {
  title: '核心能力',
  subtitle: '八项差异化能力，每一项都能在 GitHub 源码里核对',
  items: [
    {
      title: '深度 Agent 引擎',
      description: '自研 TAOR 循环：有策略、有记忆、有检查点',
      details: [
        'TAOR 决策循环（Think-Act-Observe-Reason）',
        '{strategies} 种 Agent 策略：通用 / 编码 / 探索 / 规划',
        '检查点续跑，长任务中断可恢复',
        '上下文分层切窗 + 三级自动压缩',
        '8 类终止原因 + 轮级熔断，防止空转',
      ],
      highlight: '核心',
    },
    {
      title: '5 层安全纵深',
      description: 'Rust AST 编译时分析 → 五层防线 → 多后端沙箱隔离',
      details: [
        'Rust FFI AST 编译时 Bash 分析',
        '{dangerousRules} 条危险命令 + {injectionRules} 条注入规则',
        'Guardrail 策略规则引擎',
        'AutoMode 风险分类器',
        '沙箱覆盖 Landlock / macOS / Windows / Docker / SSH / PTY',
      ],
      highlight: '安全',
    },
    {
      title: '{tools} 个内置工具',
      description: '{categories} 个分类，覆盖文件、命令、网络、媒体、代码与协作',
      details: [
        'Rust AST 级 Bash 执行',
        'LSP 智能提示集成',
        '网页抓取与搜索',
        'Notebook、图像、音视频处理',
        'MCP 客户端 + 服务端完整支持',
      ],
      highlight: '丰富',
    },
    {
      title: '{channels} 个消息渠道',
      description: '{channels} 个通道适配器，微信 / 企微 / 钉钉 / 飞书 / QQ 均已支持',
      details: [
        'Telegram / Discord / Slack / WhatsApp',
        '微信 / 企微 / 钉钉 / 飞书 / QQ / 元宝',
        'Email / SMS / Webhook / IRC / Matrix',
        '统一通道目录与网关路由',
        '支持按通道编译裁剪，产物更小',
      ],
      highlight: '多平台',
    },
    {
      title: '企业级可观测性',
      description: 'OpenTelemetry 接入 + 告警体系 + 健康检查',
      details: [
        'Tracing + Metrics，对齐 OTel GenAI 语义约定',
        '结构化日志分级管理',
        '告警规则与事件管理',
        '健康检查、备份与数据归档',
        '会话事件可回放、可审计',
      ],
      highlight: '可观测',
    },
    {
      title: '可插拔架构',
      description: '插件 SDK + 技能系统 + 四协议，按构建变体裁剪',
      details: [
        '5 种构建变体：core / personal / coding / enterprise / headless',
        '插件市场，支持热加载与签名校验',
        '技能三来源隔离（内置 / 用户 / 第三方）',
        'MCP / ACP / A2A / LSP 四协议',
        '四阶段启动（T0–T3）与按需加载',
      ],
      highlight: '灵活',
    },
    {
      title: '本地优先',
      description: 'Ollama / llama.cpp 本地模型，数据默认存在本机',
      details: [
        '本地推理，可完全离线运行',
        'SQLite 单一数据文件，不出设备',
        '会话以 events.jsonl 追加存储',
        '云端 Provider 作为可选增强',
        '按工作区隔离的沙箱目录',
      ],
      highlight: '隐私',
    },
    {
      title: '智能路由',
      description: '{taskTypes} 类任务 × 4 档 tier × 5 层决策 + 供应商回退链',
      details: [
        '{taskTypes} 种任务类型自动识别',
        '4 档 tier：simple / medium / complex / reasoning',
        '5 层决策：开关 → 快通道 → 会话黏性 → LLM 判别 → Tier',
        'FallbackChain 多供应商回退 + 重试策略',
        '定价与上下文窗口均取自数据库',
      ],
      highlight: '路由',
    },
  ],
};

const en = {
  title: 'Capabilities',
  subtitle: 'Eight differentiated capabilities, every one of them verifiable in the GitHub source',
  items: [
    {
      title: 'Deep agent engine',
      description: 'An in-house TAOR loop with strategy, memory and checkpoints',
      details: [
        'TAOR decision cycle (Think-Act-Observe-Reason)',
        '{strategies} agent strategies: general / coding / exploration / planning',
        'Checkpoint resume keeps long-running tasks recoverable after interruption',
        'Layered context windows with three-tier automatic compaction',
        '8 termination reasons plus per-round circuit breaking to stop runaway loops',
      ],
      highlight: 'Core',
    },
    {
      title: '5 layers of defense in depth',
      description: 'Rust AST compile-time analysis → five lines of defense → multi-backend sandbox isolation',
      details: [
        'Compile-time Bash analysis via Rust FFI AST',
        '{dangerousRules} dangerous-command rules + {injectionRules} injection rules',
        'Guardrail policy rule engine',
        'AutoMode risk classifier',
        'Sandbox coverage across Landlock / macOS / Windows / Docker / SSH / PTY',
      ],
      highlight: 'Security',
    },
    {
      title: '{tools} built-in tools',
      description: '{categories} categories spanning files, commands, network, media, code and collaboration',
      details: [
        'Rust AST-level Bash execution',
        'LSP-powered code intelligence',
        'Web scraping and search',
        'Notebook, image, audio and video processing',
        'Full MCP client and server support',
      ],
      highlight: 'Breadth',
    },
    {
      title: '{channels} messaging channels',
      description: '{channels} channel adapters, with WeChat / WeCom / DingTalk / Feishu / QQ all supported',
      details: [
        'Telegram / Discord / Slack / WhatsApp',
        'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
        'Email / SMS / Webhook / IRC / Matrix',
        'A unified channel catalog with gateway routing',
        'Compile-time channel trimming for smaller builds',
      ],
      highlight: 'Multi-platform',
    },
    {
      title: 'Enterprise-grade observability',
      description: 'OpenTelemetry integration, alerting and health checks',
      details: [
        'Tracing + metrics aligned with OTel GenAI semantic conventions',
        'Tiered structured logging',
        'Alert rules and incident management',
        'Health checks, backups and data archiving',
        'Replayable, auditable session events',
      ],
      highlight: 'Observability',
    },
    {
      title: 'Pluggable architecture',
      description: 'Plugin SDK, skill system and four protocols — trimmable per build variant',
      details: [
        '5 build variants: core / personal / coding / enterprise / headless',
        'Plugin marketplace with hot loading and signature verification',
        'Three isolated skill sources (built-in / user / third-party)',
        'MCP / ACP / A2A / LSP protocols',
        'Four-stage startup (T0–T3) with on-demand loading',
      ],
      highlight: 'Flexible',
    },
    {
      title: 'Local-first',
      description: 'Ollama / llama.cpp local models, with data staying on your machine by default',
      details: [
        'Local inference that runs fully offline',
        'A single SQLite data file that never leaves the device',
        'Sessions stored as append-only events.jsonl',
        'Cloud providers as an optional enhancement',
        'Workspace-isolated sandbox directories',
      ],
      highlight: 'Privacy',
    },
    {
      title: 'Smart routing',
      description: '{taskTypes} task classes × 4 tiers × 5 decision stages, plus provider fallback chains',
      details: [
        '{taskTypes} task types detected automatically',
        '4 tiers: simple / medium / complex / reasoning',
        '5 decision stages: switch → fast path → session stickiness → LLM judgment → tier',
        'FallbackChain across providers with retry policies',
        'Pricing and context windows both read from the database',
      ],
      highlight: 'Routing',
    },
  ],
} satisfies typeof zh;

export const capabilities = { zh, en };
