/** 首屏 Hero 文案 */
const zh = {
  subtitle:
    '玲珑鸟 · AI 私人助手 · <span class="text-brand-400">本地优先</span> · <span class="text-brand-400">安全内生</span>',
  versionPill: 'v{version} · MIT 开源 · 发布于 <span class="whitespace-nowrap">{date}</span>',
  stats: ['{n} 个 TS 文件', '{n} 个内置工具', '{n} 层安全纵深', '{n} 个消息渠道', '{n} 种 Buddy 物种'],
  ctaPrimary: '快速开始',
  ctaGithub: 'GitHub',
  command: 'git clone https://github.com/cocosoft/Liri.git',
  commandHint: '  # 然后 cd app && bun install',
};

const en = {
  subtitle:
    'Linglong Bird · Personal AI Assistant · <span class="text-brand-400">Local-first</span> · <span class="text-brand-400">Security by design</span>',
  versionPill: 'v{version} · MIT licensed · Released <span class="whitespace-nowrap">{date}</span>',
  stats: ['{n} TS files', '{n} built-in tools', '{n} security layers', '{n} messaging channels', '{n} Buddy species'],
  ctaPrimary: 'Get Started',
  ctaGithub: 'GitHub',
  command: 'git clone https://github.com/cocosoft/Liri.git',
  commandHint: '  # then cd app && bun install',
} satisfies typeof zh;

export const hero = { zh, en };
