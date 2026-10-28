/** 「使用场景」区块文案 */
const zh = {
  title: '使用场景',
  subtitle: '无论你是开发者、安全负责人、运维，还是效率追求者，Liri 都能帮到你',
  groups: [
    {
      role: '给开发者',
      description: '{tools} 个内置工具、LSP 集成、MCP 协议、插件 SDK、Notebook 交互式执行',
      items: [
        '终端 REPL 直接对话，执行命令，管理项目',
        'Rust AST 级 Bash 安全执行',
        'LSP 智能提示，代码补全与诊断',
        'MCP 协议客户端 + 服务端完整支持',
        '插件 SDK 自定义扩展',
      ],
    },
    {
      role: '给安全负责人',
      description: '{layers} 层纵深安全体系，从编译时到运行时，层层把关',
      items: [
        'Rust FFI AST 编译时 Bash 分析',
        '{dangerous} 条危险命令 + {injection} 条注入规则',
        'Guardrail 策略规则引擎，deny-by-default',
        '6 种沙箱后端：Landlock / macOS / Windows / Docker / SSH / PTY',
        '工具调用与权限决策全量落库，可审计',
      ],
    },
    {
      role: '给运维',
      description: '3 种运行模式、系统监控、Docker 部署、OpenTelemetry 接入',
      items: [
        'REPL / MCP Server / Daemon 三种运行模式',
        '可安装为系统服务（schtasks / launchd / systemd）',
        'OpenTelemetry Tracing + Metrics 全链路',
        'Docker 部署，健康检查与告警',
        'Cron 定时任务 + 自动化工作流',
      ],
    },
    {
      role: '给普通用户',
      description: '{channels} 个消息渠道、桌面客户端、定时任务、技能系统',
      items: [
        'Telegram / 微信 / 钉钉 / 飞书 / QQ 等全平台',
        'Tauri 2.11 桌面客户端',
        '定时任务，自动化日常操作',
        '技能系统，条件触发编排',
        '知识库，构建个人第二大脑',
      ],
    },
  ],
};

const en = {
  title: 'Use cases',
  subtitle:
    'Whether you are a developer, a security lead, an ops engineer or simply chasing efficiency, Liri has you covered',
  groups: [
    {
      role: 'For developers',
      description:
        '{tools} built-in tools, LSP integration, the MCP protocol, a plugin SDK and interactive Notebook execution',
      items: [
        'Chat, run commands and manage projects straight from the terminal REPL',
        'Rust AST-level safe Bash execution',
        'LSP-powered hints, completion and diagnostics',
        'Full MCP client and server support',
        'Extend everything with the plugin SDK',
      ],
    },
    {
      role: 'For security leads',
      description:
        '{layers} layers of defense in depth — checked at every step, from compile time to runtime',
      items: [
        'Compile-time Bash analysis via Rust FFI AST',
        '{dangerous} dangerous-command rules + {injection} injection rules',
        'Guardrail policy rule engine, deny-by-default',
        '6 sandbox backends: Landlock / macOS / Windows / Docker / SSH / PTY',
        'Every tool call and permission decision logged for audit',
      ],
    },
    {
      role: 'For ops teams',
      description:
        '3 run modes, system monitoring, Docker deployment and OpenTelemetry integration',
      items: [
        'REPL / MCP Server / Daemon run modes',
        'Installs as a system service (schtasks / launchd / systemd)',
        'End-to-end OpenTelemetry tracing + metrics',
        'Docker deployment with health checks and alerting',
        'Cron jobs + automated workflows',
      ],
    },
    {
      role: 'For everyone',
      description:
        '{channels} messaging channels, a desktop client, scheduled tasks and a skill system',
      items: [
        'Telegram / WeChat / DingTalk / Feishu / QQ and more',
        'Tauri 2.11 desktop client',
        'Scheduled tasks that automate daily routines',
        'Skill system with conditional orchestration',
        'Knowledge base for your personal second brain',
      ],
    },
  ],
} satisfies typeof zh;

export const scenarios = { zh, en };
