/** 「更多」三合一区块：Buddy / 成本 / 场景各压成一张卡 */
const zh = {
  title: '不止于功能清单',
  subtitle: '三块容易被忽略、但每天都在用的东西。',
  cards: [
    {
      id: 'buddy',
      icon: '🐣',
      title: 'Buddy 人格系统',
      desc: '不是工具，是伙伴：外观由种子确定性生成，同一只始终长得一样；成长状态落盘，跨会话累计。',
      chips: ['{species} 种物种', '{hats} 种帽子', '{eyes} 种眼睛', '{rarities} 级稀有度'],
    },
    {
      id: 'cost',
      icon: '🧾',
      title: '成本透明',
      desc: '定价读数据库、按 provider 回显的真实模型名归因、每次调用写入 cost_records；预算过水位先预警，再压缩，最后阻断。',
      chips: ['定价表 model_registry', '真实 usage', '逐次落库', '每日预算'],
    },
    {
      id: 'scenarios',
      icon: '🎯',
      title: '四类使用场景',
      desc: '开发者拿它跑命令改代码，安全负责人用它做 AST 级拦截与审计，运维当常驻服务，普通用户从聊天软件里直接调用。',
      chips: ['开发者', '安全负责人', '运维', '普通用户'],
    },
  ],
};

const en = {
  title: 'More than a feature list',
  subtitle: 'Three things that are easy to miss and used every day.',
  cards: [
    {
      id: 'buddy',
      icon: '🐣',
      title: 'Buddy persona',
      desc: 'Not a tool — a companion. Its look is generated deterministically from a seed, so the same Buddy always looks the same; growth state is persisted and accumulates across sessions.',
      chips: ['{species} species', '{hats} hats', '{eyes} eyes', '{rarities} rarity tiers'],
    },
    {
      id: 'cost',
      icon: '🧾',
      title: 'Transparent costs',
      desc: 'Pricing read from the database, attribution to the provider-reported model name, every call written to cost_records; budgets warn, then compress, then block.',
      chips: ['model_registry pricing', 'real usage', 'per-call ledger', 'daily budget'],
    },
    {
      id: 'scenarios',
      icon: '🎯',
      title: 'Four kinds of users',
      desc: 'Developers run commands and edit code; security leads get AST-level blocking and audit trails; ops teams run it as a service; everyone else reaches it from a chat app.',
      chips: ['Developers', 'Security leads', 'Ops teams', 'Everyone'],
    },
  ],
} satisfies typeof zh;

export const highlights = { zh, en };
