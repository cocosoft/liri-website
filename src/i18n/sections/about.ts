/** 「Liri 是什么」区块文案 */
const zh = {
  title: 'Liri 是什么',
  p1: 'Liri 是一个基于 <strong class="text-brand-300">TypeScript + Rust</strong> 架构的 <strong class="text-brand-300">AI 私人助手</strong>。',
  p2: '它不只是聊天机器人——它能<strong class="text-brand-300">理解意图</strong>、<strong class="text-brand-300">执行命令</strong>、<strong class="text-brand-300">管理任务</strong>、<strong class="text-brand-300">调用工具</strong>、甚至与其他 AI Agent 协作。从终端到桌面，从 IM 到 MCP，同一个引擎支撑多个入口。',
  p3: '<strong class="text-brand-300">{modules}</strong> 个模块化子系统，<strong class="text-brand-300">{tsFiles}</strong> 个 TypeScript 文件，<strong class="text-brand-300">{desktopComponents}</strong> 个桌面组件 —— 可按构建变体裁剪。',
  statLabels: ['TypeScript 文件', '内置工具', '消息渠道', '桌面 TSX 组件'],
  verifyTitle: '在 GitHub 源码中核对',
};

const en = {
  title: 'What is Liri',
  p1: 'Liri is a <strong class="text-brand-300">personal AI assistant</strong> built on a <strong class="text-brand-300">TypeScript + Rust</strong> architecture.',
  p2: 'It is far more than a chatbot — it can <strong class="text-brand-300">understand intent</strong>, <strong class="text-brand-300">run commands</strong>, <strong class="text-brand-300">manage tasks</strong>, <strong class="text-brand-300">call tools</strong> and even collaborate with other AI agents. One engine powers every entry point: terminal, desktop, IM and MCP.',
  p3: '<strong class="text-brand-300">{modules}</strong> modular subsystems, <strong class="text-brand-300">{tsFiles}</strong> TypeScript files and <strong class="text-brand-300">{desktopComponents}</strong> desktop components — all trimmable per build variant.',
  statLabels: ['TypeScript files', 'Built-in tools', 'Messaging channels', 'Desktop TSX components'],
  verifyTitle: 'Verify in the GitHub source',
} satisfies typeof zh;

export const about = { zh, en };
