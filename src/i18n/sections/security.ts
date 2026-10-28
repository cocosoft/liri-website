/** 「五层安全纵深」区块文案 */
const zh = {
  title: '五层安全纵深',
  subtitle: '从编译时 AST 分析到运行时沙箱：规则条数、阈值与降级策略都写在源码里',
  layers: [
    {
      title: 'Rust AST 编译时分析',
      short: '在代码执行前用 Rust FFI 做 AST 级安全分析，命中 {dangerousRules} 条危险命令规则',
      tag: '编译时',
      details: [
        'Rust FFI 层解析 Bash AST',
        'Bash AST 解析，{dangerousRules} 条危险命令规则',
        '变量注入检测、路径穿越拦截',
        '参数篡改识别，白名单命令验证',
      ],
    },
    {
      title: 'TypeScript 语义分析',
      short: '运行时逐段判定复合命令，拒绝原因可归因到具体语句',
      tag: '运行时',
      details: [
        '复合只读命令逐段放行，不再整条拒绝',
        '{injectionRules} 条注入模式检测（含零宽字符、环境变量污染）',
        '{shellRules} 条 Shell 专项规则（bash / PowerShell / cmd）',
        '拒绝报文指向真实原因与命中语句',
      ],
    },
    {
      title: 'Guardrail 规则引擎',
      short: '可配置策略规则系统，按工具/渠道/用户组精细化授权',
      tag: '策略',
      details: [
        'deny-by-default 白名单模式',
        '权限粒度：工具 → 规则 → 指纹',
        '规则变更即时生效，无需重启',
        '拒绝时回传规则来源与命中语句',
      ],
    },
    {
      title: 'AutoMode 分类器',
      short: '按任务与工具上下文判定风险等级，自动决定放行、询问还是拒绝',
      tag: '智能',
      details: [
        '基于命令语义与工具上下文的风险分级',
        '低风险命令按策略自动放行',
        '高风险转入审批，进 Inbox 待处理',
        '未受信命令默认转询问而非直接拒绝',
      ],
    },
    {
      title: '沙箱隔离执行',
      short: '6 种隔离后端：Landlock / macOS / Windows / Docker / SSH / PTY，越权命令无法触及宿主机',
      tag: '隔离',
      details: [
        'Linux Landlock：内核级文件系统限制',
        'macOS 沙箱 / Windows Low IL + Job 兜底',
        'Docker 容器：完整隔离 + 资源与网络策略',
        'SSH 远程执行与 PTY 伪终端路径控制',
        '无可用隔离后端时诚实降级并给出提示',
      ],
    },
  ],
  protectionsTitle: '安全防护数据',
  protections: [
    { label: '危险命令规则', value: '{n}', desc: 'AST 级匹配，覆盖 bash / PowerShell / cmd' },
    { label: '注入检测规则', value: '{n}', desc: '含零宽字符、环境变量污染等注入形态' },
    { label: '沙箱隔离后端', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
    { label: '沙箱实现文件', value: '{n}', desc: 'app/src/sandbox 下的 TypeScript 实现' },
  ],
  summary:
    'Rust AST 编译时分析 · TypeScript 语义分析 · Guardrail 规则引擎 · AutoMode 分类器 · 沙箱隔离执行',
};

const en = {
  title: 'Five layers of defense in depth',
  subtitle:
    'From compile-time AST analysis to runtime sandboxing: every rule count, threshold and fallback policy lives in the source code',
  layers: [
    {
      title: 'Compile-time Rust AST analysis',
      short:
        'Rust FFI performs AST-level security analysis before code runs, checked against {dangerousRules} dangerous-command rules',
      tag: 'Compile-time',
      details: [
        'The Rust FFI layer parses the Bash AST',
        'Bash AST parsing with {dangerousRules} dangerous-command rules',
        'Variable-injection detection and path-traversal blocking',
        'Argument-tampering detection with allowlisted command validation',
      ],
    },
    {
      title: 'TypeScript semantic analysis',
      short:
        'Compound commands are judged segment by segment at runtime, with rejection reasons tied to the exact statement',
      tag: 'Runtime',
      details: [
        'Compound read-only commands pass segment by segment instead of being rejected wholesale',
        '{injectionRules} injection patterns detected, including zero-width characters and environment-variable poisoning',
        '{shellRules} shell-specific rules (bash / PowerShell / cmd)',
        'Rejection messages point to the real cause and the offending statement',
      ],
    },
    {
      title: 'Guardrail rule engine',
      short:
        'A configurable policy rule system with fine-grained authorization by tool, channel and user group',
      tag: 'Policy',
      details: [
        'deny-by-default with allowlists',
        'Permission granularity: tool → rule → fingerprint',
        'Rule changes take effect immediately, with no restart required',
        'Rejections report the rule source and the matched statement',
      ],
    },
    {
      title: 'AutoMode classifier',
      short:
        'Scores risk from task and tool context, then decides automatically whether to allow, ask or deny',
      tag: 'Adaptive',
      details: [
        'Risk grading based on command semantics and tool context',
        'Low-risk commands are allowed automatically per policy',
        'High-risk commands move to approval and land in the Inbox',
        'Untrusted commands default to asking rather than denial',
      ],
    },
    {
      title: 'Sandboxed execution',
      short:
        '6 isolation backends — Landlock / macOS / Windows / Docker / SSH / PTY — so overreaching commands never touch the host',
      tag: 'Isolation',
      details: [
        'Linux Landlock: kernel-level filesystem restrictions',
        'macOS sandbox / Windows Low IL + Job object fallback',
        'Docker: full isolation with resource and network policies',
        'SSH remote execution and controlled PTY paths',
        'Honest degradation with a clear notice when no backend is available',
      ],
    },
  ],
  protectionsTitle: 'Security by the numbers',
  protections: [
    { label: 'Dangerous-command rules', value: '{n}', desc: 'AST-level matching across bash / PowerShell / cmd' },
    { label: 'Injection detection rules', value: '{n}', desc: 'Covers zero-width characters, environment-variable poisoning and more' },
    { label: 'Sandbox backends', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
    { label: 'Sandbox implementation files', value: '{n}', desc: 'TypeScript implementations under app/src/sandbox' },
  ],
  summary:
    'Compile-time Rust AST analysis · TypeScript semantic analysis · Guardrail rule engine · AutoMode classifier · Sandboxed execution',
} satisfies typeof zh;

export const security = { zh, en };
