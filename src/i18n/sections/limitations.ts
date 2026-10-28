/** 「当前限制」区块文案：首发期主动列出未完成/待验证项 */
const zh = {
  title: '当前限制',
  subtitle: '快速迭代期哪些地方还没到位，我们先写出来，省得你自己踩。',
  statuses: {
    audit: '待外部审计',
    polish: '打磨中',
    building: '建设中',
    experimental: '实验性',
    note: '说明',
  },
  items: [
    {
      status: 'audit',
      title: '安全体系待外部审计',
      desc: '{securityLayers} 层防线与 6 种沙箱后端已实现，{sandboxFiles} 个沙箱相关文件可逐条核对，但尚未通过第三方安全审计。',
    },
    {
      status: 'polish',
      title: '桌面端交互打磨中',
      desc: '{desktopComponents} 个 TSX 组件与 {desktopPages} 个页面已就绪，快捷键、动效与边界场景仍在调整。',
    },
    {
      status: 'building',
      title: '生态市场条目有限',
      desc: '插件市场、MCP 市场与技能来源已打通，但可安装的条目还在补齐。',
    },
    {
      status: 'experimental',
      title: 'ACP / A2A 为实验性实现',
      desc: '这两种协议仍在演进，接口可能随版本调整；MCP 与 LSP 已稳定可用。',
    },
    {
      status: 'building',
      title: '英文文档可能滞后',
      desc: '中文文档由源码仓库自动同步，英文为人工翻译，通常比中文晚一个版本。',
    },
    {
      status: 'note',
      title: '文档与源码以仓库为准',
      desc: '官网文档由 app/docs 同步生成，若与源码不一致，请以 GitHub 仓库为准。',
    },
  ],
  cta: '发现问题？提交 Issue',
};

const en = {
  title: 'Current limitations',
  subtitle: 'What is not finished yet during rapid iteration — written down so you do not have to discover it the hard way.',
  statuses: {
    audit: 'Pending audit',
    polish: 'Polishing',
    building: 'In progress',
    experimental: 'Experimental',
    note: 'Note',
  },
  items: [
    {
      status: 'audit',
      title: 'Security awaits external audit',
      desc: '{securityLayers} defense layers and 6 sandbox backends are implemented, with {sandboxFiles} sandbox-related files you can review one by one — but no third-party security audit has been completed yet.',
    },
    {
      status: 'polish',
      title: 'Desktop interactions still being polished',
      desc: '{desktopComponents} TSX components and {desktopPages} pages are in place; shortcuts, animations and edge cases are still being refined.',
    },
    {
      status: 'building',
      title: 'Marketplace catalog is still small',
      desc: 'The plugin market, MCP market and skill sources work end to end, but the installable catalog is still growing.',
    },
    {
      status: 'experimental',
      title: 'ACP / A2A are experimental',
      desc: 'Both protocols are still evolving and their interfaces may change between releases; MCP and LSP are stable.',
    },
    {
      status: 'building',
      title: 'English docs may lag behind',
      desc: 'Chinese docs are synced automatically from the source repository; the English version is a manual translation and is usually one release behind.',
    },
    {
      status: 'note',
      title: 'The repository wins over the site',
      desc: 'These pages are generated from app/docs. If something disagrees with the source, the GitHub repository is authoritative.',
    },
  ],
  cta: 'Found an issue? Open an Issue',
} satisfies typeof zh;

export const limitations = { zh, en };

/** 状态 → 徽章配色 */
export const limitationStatusClass: Record<keyof typeof zh.statuses, string> = {
  audit: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  polish: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  building: 'text-surface-400 bg-surface-800/40 border-surface-700/40',
  experimental: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  note: 'text-surface-400 bg-surface-800/40 border-surface-700/40',
};
