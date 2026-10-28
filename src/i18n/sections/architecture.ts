/** 「架构全景图」区块文案 */
const zh = {
  title: '架构全景图',
  subtitle:
    '从入口到反馈的 8 个功能层；工程上由 6 层依赖门禁（entry > ui > app > service > infra > core）强制约束',
  // 首页摘要卡（完整图见演进页 M4）
  summary: {
    title: '像操作系统那样分层',
    subtitle: '薄内核 + 子系统边界 + 依赖门禁；本地优先是默认，不是开关。',
    pillars: [
      { title: '内核', desc: '@openliri/kernel 独立包，对外只暴露薄接口，K01–K08 门禁守着' },
      { title: '子系统', desc: '工具、渠道、记忆、路由、沙箱、任务各自有入口与边界' },
      { title: '门禁', desc: '6 层依赖方向 + 20+ 项架构检查，违反即 CI 阻断' },
      { title: '本地优先', desc: '数据默认留在本机，模型可以完全本地运行' },
    ],
    link: '看架构怎么演进、还缺什么',
  },
  layers: [
    {
      name: '多模态入口层',
      subtitle: '从任何入口，进入 Liri',
      items: [
        { label: 'REPL 终端', detail: 'React + Ink 构建的终端 UI，内置 Buddy 伙伴系统' },
        { label: 'Tauri 桌面客户端', detail: '{desktopComponents} 个 TSX 组件，{desktopPages} 个功能页面（Tauri 2.11 + React 19）' },
        { label: 'MCP / 渠道网关', detail: 'MCP Server + {channels} 个消息渠道（微信/钉钉/飞书/TG 等）' },
        { label: 'CLI / HTTP API', detail: 'Liri / liri-memory / liri-ink 三个可执行入口 + HTTP API' },
      ],
    },
    {
      name: '安全第一层',
      subtitle: '每一次输入都经过安全过滤',
      items: [
        { label: 'Rust AST 编译时分析', detail: 'FFI 层解析 Bash AST，{dangerousRules} 条危险命令规则' },
        { label: 'TypeScript 语义分析', detail: '复合只读命令逐段判定，拒绝原因可归因' },
        { label: 'Guardrail 规则引擎', detail: '{injectionRules} 条注入模式 + {shellRules} 条 Shell 专项规则' },
        { label: 'AutoMode 分类器', detail: '自动判断任务风险等级，决定放行 / 询问 / 拒绝' },
      ],
    },
    {
      name: '智能路由层',
      subtitle: '按任务类型与难度选择模型',
      items: [
        { label: '{taskTypes} 种任务类型识别', detail: '编码 / 写作 / 分析 / 工具 / 翻译 / 搜索 / 创意 / 闲聊等' },
        { label: '4 档 tier', detail: 'simple / medium / complex / reasoning' },
        { label: '5 层决策管线', detail: '开关 → 快通道 → 会话黏性 → LLM 判别 → Tier 解析' },
        { label: 'FallbackChain 回退', detail: '主供应商不可用按序回退，配套 RetryPolicy' },
      ],
    },
    {
      name: '外脑注入层',
      subtitle: '知识库 + 记忆 + 会话事件，三段可检索上下文',
      items: [
        { label: '知识库', detail: 'Markdown 落盘 + 语义索引，关键词 / 向量 / RRF 融合检索' },
        { label: '记忆系统', detail: '分层记忆 + SQLite 向量表，按相关性加权召回' },
        { label: '会话事件', detail: 'events.jsonl 追加存储，可回放、可审计' },
        { label: 'DreamEngine', detail: '空闲时整理知识：采集 → 分析 → 生成 → 写入 → 索引' },
      ],
    },
    {
      name: 'TAOR 决策循环',
      subtitle: 'Think → Act → Observe → Reason',
      items: [
        { label: 'Think（思考）', detail: '{strategies} 种 Agent 策略：通用 / 编码 / 探索 / 规划' },
        { label: 'Act（行动）', detail: '{tools} 个内置工具，按构建变体动态注册' },
        { label: 'Observe（观察）', detail: '结果评估 + 上下文分层切窗与自动压缩' },
        { label: 'Reason（推理）', detail: 'Token 预算管理 + 检查点续跑 + 轮级熔断' },
      ],
    },
    {
      name: '执行沙箱层',
      subtitle: '命令在隔离环境中执行，无隔离时诚实降级',
      items: [
        { label: 'Linux Landlock', detail: '内核级文件系统访问限制' },
        { label: 'macOS / Windows', detail: '系统沙箱 + Low IL / Job 对象兜底隔离' },
        { label: 'Docker 容器', detail: '完整容器隔离 + 资源限制 + 网络策略' },
        { label: 'SSH / PTY', detail: '远程纯净执行环境与伪终端路径控制' },
      ],
    },
    {
      name: '长程任务层',
      subtitle: '从单次对话到跨天任务',
      items: [
        { label: 'PDCA 管线', detail: 'Plan-Do-Check-Act 闭环，进度按产物存在性推进' },
        { label: 'Swarm 多智能体', detail: 'AgentSwarm + 议事编排，注册表动态发现' },
        { label: 'Cron 定时任务', detail: '支持 once / interval / cron 表达式（含时区）' },
        { label: '任务持久化', detail: '会话快照 + 断点恢复 + 等待中可见倒计时' },
      ],
    },
    {
      name: '反馈与进化层',
      subtitle: '每一次交互，都留下可核对的证据',
      items: [
        { label: '失败样本归纳', detail: '把失败模式归纳后写回提示词与技能，形成改进闭环' },
        { label: '成本账本', detail: '按数据库定价表计费，记录 provider 回显的真实模型名' },
        { label: '评测门禁', detail: '内建基线题库 + pass^k 可靠性口径 + 成对安全测量' },
        { label: '事件回放', detail: '每一次模型调用的上下文都能事后重建' },
      ],
    },
  ],
  principlesTitle: '架构哲学',
  principles: [
    { title: '安全内生', desc: '安全不是插件，是每一层架构的 DNA' },
    { title: '本地优先', desc: '数据本地存储，离线可用，隐私默认保障' },
    { title: '智能路由', desc: '{taskTypes} 类任务匹配对应档位的模型' },
    { title: '外脑设计', desc: '知识库 + 记忆 + 事件日志，三段上下文可检索' },
    { title: '可核对闭环', desc: '失败样本归纳写回，变更由门禁拦住' },
    { title: '多模态统一', desc: '终端/桌面/IM/API 共用同一套引擎' },
  ],
};

const en = {
  title: 'Architecture at a glance',
  subtitle:
    '8 functional layers from entry point to feedback; enforced in engineering by 6 dependency gates (entry > ui > app > service > infra > core)',
  summary: {
    title: 'Layered like an operating system',
    subtitle: 'A thin kernel, subsystem boundaries and dependency gates; local-first is the default, not a switch.',
    pillars: [
      { title: 'Kernel', desc: '@openliri/kernel is its own package exposing a thin interface, guarded by gates K01–K08' },
      { title: 'Subsystems', desc: 'Tools, channels, memory, routing, sandbox and tasks each have their own entry points and boundaries' },
      { title: 'Gates', desc: 'A 6-layer dependency direction plus 20+ architecture checks — violations block CI' },
      { title: 'Local-first', desc: 'Data stays on your machine by default; models can run fully local' },
    ],
    link: 'See how the architecture evolved and what is missing',
  },
  layers: [
    {
      name: 'Multimodal entry layer',
      subtitle: 'Enter Liri from any surface',
      items: [
        { label: 'REPL terminal', detail: 'A terminal UI built with React + Ink, with the Buddy companion system built in' },
        { label: 'Tauri desktop client', detail: '{desktopComponents} TSX components across {desktopPages} feature pages (Tauri 2.11 + React 19)' },
        { label: 'MCP / channel gateway', detail: 'MCP Server plus {channels} messaging channels (WeChat, DingTalk, Feishu, Telegram and more)' },
        { label: 'CLI / HTTP API', detail: 'Three executables — Liri / liri-memory / liri-ink — plus an HTTP API' },
      ],
    },
    {
      name: 'Security first layer',
      subtitle: 'Every input passes through a security filter',
      items: [
        { label: 'Compile-time Rust AST analysis', detail: 'The FFI layer parses the Bash AST against {dangerousRules} dangerous-command rules' },
        { label: 'TypeScript semantic analysis', detail: 'Compound read-only commands are judged segment by segment, with attributable rejection reasons' },
        { label: 'Guardrail rule engine', detail: '{injectionRules} injection patterns + {shellRules} shell-specific rules' },
        { label: 'AutoMode classifier', detail: 'Scores task risk automatically and decides between allow, ask and deny' },
      ],
    },
    {
      name: 'Smart routing layer',
      subtitle: 'Model choice based on task type and difficulty',
      items: [
        { label: '{taskTypes} task types detected', detail: 'coding, writing, analysis, tools, translation, search, ideation, small talk and more' },
        { label: '4 tiers', detail: 'simple / medium / complex / reasoning' },
        { label: '5-stage decision pipeline', detail: 'switch → fast path → session stickiness → LLM judgment → tier resolution' },
        { label: 'FallbackChain', detail: 'Ordered failover when the primary provider is unavailable, paired with RetryPolicy' },
      ],
    },
    {
      name: 'Second-brain injection layer',
      subtitle: 'Knowledge base + memory + session events: three retrievable context sources',
      items: [
        { label: 'Knowledge base', detail: 'Markdown on disk plus semantic indexing, with keyword / vector / RRF hybrid retrieval' },
        { label: 'Memory system', detail: 'Tiered memory with a SQLite vector table and relevance-weighted recall' },
        { label: 'Session events', detail: 'Append-only events.jsonl — replayable and auditable' },
        { label: 'DreamEngine', detail: 'Consolidates knowledge while idle: collect → analyze → generate → write → index' },
      ],
    },
    {
      name: 'TAOR decision loop',
      subtitle: 'Think → Act → Observe → Reason',
      items: [
        { label: 'Think', detail: '{strategies} agent strategies: general / coding / exploration / planning' },
        { label: 'Act', detail: '{tools} built-in tools, registered dynamically per build variant' },
        { label: 'Observe', detail: 'Result evaluation plus layered context windows and automatic compaction' },
        { label: 'Reason', detail: 'Token budget management + checkpoint resume + per-round circuit breaking' },
      ],
    },
    {
      name: 'Execution sandbox layer',
      subtitle: 'Commands run in isolation, and degrade honestly when no isolation is available',
      items: [
        { label: 'Linux Landlock', detail: 'Kernel-level filesystem access restrictions' },
        { label: 'macOS / Windows', detail: 'System sandboxes with Low IL / Job object as a fallback' },
        { label: 'Docker container', detail: 'Full container isolation with resource limits and network policies' },
        { label: 'SSH / PTY', detail: 'Clean remote execution environments and controlled pseudo-terminal paths' },
      ],
    },
    {
      name: 'Long-running task layer',
      subtitle: 'From a single conversation to multi-day work',
      items: [
        { label: 'PDCA pipeline', detail: 'A Plan-Do-Check-Act loop that advances progress based on real artifacts' },
        { label: 'Swarm multi-agent', detail: 'AgentSwarm with council-style orchestration and dynamic registry discovery' },
        { label: 'Cron scheduling', detail: 'once / interval / cron expressions, time zones included' },
        { label: 'Task persistence', detail: 'Session snapshots, breakpoint recovery and visible countdowns while waiting' },
      ],
    },
    {
      name: 'Feedback and evolution layer',
      subtitle: 'Every interaction leaves verifiable evidence',
      items: [
        { label: 'Failure-pattern induction', detail: 'Failure patterns are generalized back into prompts and skills, closing the improvement loop' },
        { label: 'Cost ledger', detail: 'Billed against the database pricing table, recording the real model name echoed by the provider' },
        { label: 'Evaluation gates', detail: 'Built-in baseline suites, pass^k reliability scoring and paired safety measurement' },
        { label: 'Event replay', detail: 'The context of every model call can be reconstructed after the fact' },
      ],
    },
  ],
  principlesTitle: 'Architecture philosophy',
  principles: [
    { title: 'Security built in', desc: 'Security is not a plugin — it is the DNA of every layer' },
    { title: 'Local-first', desc: 'Data stays local, works offline, privacy protected by default' },
    { title: 'Smart routing', desc: '{taskTypes} task classes mapped to the right model tier' },
    { title: 'Second brain', desc: 'Knowledge base, memory and event logs: three retrievable context layers' },
    { title: 'Verifiable loop', desc: 'Lessons from failures feed back in, and gates block regressions' },
    { title: 'Unified multimodal', desc: 'Terminal, desktop, IM and API all share one engine' },
  ],
} satisfies typeof zh;

export const architecture = { zh, en };
