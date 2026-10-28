/** 「快速开始」区块文案 */
const zh = {
  title: '快速开始',
  subtitle: '三步启动：安装依赖 → 配置 API Key → 运行 dev',
  stepLabels: ['安装依赖', '配置 API Key', '启动 Liri'],
  copy: '复制命令',
  envComment: '# 编辑 .env 填入你的 API Key',
};

const en = {
  title: 'Get Started',
  subtitle: 'Three steps: install dependencies → configure your API key → run dev',
  stepLabels: ['Install dependencies', 'Configure your API key', 'Launch Liri'],
  copy: 'Copy command',
  envComment: '# edit .env and add your API key',
} satisfies typeof zh;

export const quickstart = { zh, en };
