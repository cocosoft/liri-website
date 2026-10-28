/** 「桌面客户端」区块文案 */
const zh = {
  title: '桌面客户端',
  subtitle:
    'Tauri 2.11 + React 19 构建 · {components} 个 TSX 组件 · {pages} 个功能页面 · 完整的桌面体验',
  sidebar: [
    '聊天',
    'AI 模型',
    '知识库',
    '记忆管理',
    '技能',
    'MCP',
    '定时任务',
    '成本中心',
    'Buddy 伙伴',
    '系统设置',
  ],
  panelTitle: '聊天面板',
  panelUser: 'Liri · 玲珑鸟',
  greeting: '你好！我是 Liri，有什么需要帮忙的吗？',
  userMessage: '帮我分析一下这个项目的数据',
  reply: '好的，正在分析中...',
  inputPlaceholder: '输入消息，按 Enter 发送...',
  mockNote: '界面结构示意，非真实截图',
  features: [
    { label: '聊天面板', desc: '多轮对话' },
    { label: '模型管理', desc: '多模型切换' },
    { label: '知识库', desc: '文件检索' },
    { label: '记忆管理', desc: '历史回顾' },
    { label: '定时任务', desc: 'Cron 调度' },
    { label: 'MCP 接入', desc: '服务发现与安装' },
    { label: '成本中心', desc: '用量与费用记录' },
    { label: 'Buddy 伙伴', desc: '外观与成长数据' },
  ],
};

const en = {
  title: 'Desktop Client',
  subtitle:
    'Built with Tauri 2.11 + React 19 · {components} TSX components · {pages} feature pages · a complete desktop experience',
  sidebar: [
    'Chat',
    'AI Models',
    'Knowledge Base',
    'Memory',
    'Skills',
    'MCP',
    'Scheduled Tasks',
    'Cost Center',
    'Buddy',
    'Settings',
  ],
  panelTitle: 'Chat panel',
  panelUser: 'Liri · Linglong Bird',
  greeting: "Hi! I'm Liri — what can I help you with?",
  userMessage: 'Help me analyze the data in this project',
  reply: 'Sure, analyzing now...',
  inputPlaceholder: 'Type a message and press Enter to send...',
  mockNote: 'Interface structure illustration — not an actual screenshot',
  features: [
    { label: 'Chat panel', desc: 'Multi-turn conversations' },
    { label: 'Model management', desc: 'Switch between models' },
    { label: 'Knowledge base', desc: 'File retrieval' },
    { label: 'Memory', desc: 'Review past history' },
    { label: 'Scheduled tasks', desc: 'Cron scheduling' },
    { label: 'MCP integration', desc: 'Discover and install servers' },
    { label: 'Cost center', desc: 'Usage and spend records' },
    { label: 'Buddy', desc: 'Appearance and growth data' },
  ],
} satisfies typeof zh;

export const desktopClient = { zh, en };
