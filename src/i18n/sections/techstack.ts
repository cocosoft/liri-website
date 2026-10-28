/** 「技术栈」区块文案 */
const zh = {
  title: '技术栈',
  subtitle: '现代技术选型，每一层都经过深思熟虑',
  items: [
    { label: 'TypeScript', pct: '{n} 文件', desc: '核心语言 · 约 {lines} 行' },
    { label: 'Rust', pct: '{n} 模块', desc: 'AST / 安全 / 压缩原生模块' },
    { label: 'Bun', pct: '', desc: '运行时' },
    { label: 'React 19 + Ink', pct: '', desc: '终端 UI' },
    { label: 'Tauri 2.11', pct: '{n} 组件', desc: '桌面客户端' },
    { label: 'SQLite', pct: '', desc: '数据与向量存储' },
    { label: 'OpenTelemetry', pct: '', desc: '可观测性' },
    { label: 'MCP + ACP + A2A + LSP', pct: '', desc: '协议' },
    { label: 'Docker', pct: '', desc: '沙箱后端之一' },
    { label: 'MIT License', pct: '', desc: '开源协议' },
  ],
};

const en = {
  title: 'Tech stack',
  subtitle: 'A modern stack, chosen with care at every layer',
  items: [
    { label: 'TypeScript', pct: '{n} files', desc: 'Core language · ~870K lines' },
    { label: 'Rust', pct: '{n} modules', desc: 'Native modules for AST, security and compression' },
    { label: 'Bun', pct: '', desc: 'Runtime' },
    { label: 'React 19 + Ink', pct: '', desc: 'Terminal UI' },
    { label: 'Tauri 2.11', pct: '{n} components', desc: 'Desktop client' },
    { label: 'SQLite', pct: '', desc: 'Data and vector storage' },
    { label: 'OpenTelemetry', pct: '', desc: 'Observability' },
    { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protocols' },
    { label: 'Docker', pct: '', desc: 'One of the sandbox backends' },
    { label: 'MIT License', pct: '', desc: 'Open-source license' },
  ],
} satisfies typeof zh;

export const techstack = { zh, en };
