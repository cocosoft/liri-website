/** 「Buddy 人格系统」区块文案 */
const zh = {
  title: 'Buddy 人格系统',
  subtitle:
    '{species} 种物种 × {hats} 种帽子 × {eyes} 种眼睛 × {rarities} 级稀有度，你的 AI 伙伴，不是工具',
  types: ['物种', '帽子', '眼睛', '稀有度'],
  rarities: ['普通', '罕见', '稀有', '史诗', '传说'],
  buddies: [
    { name: '鸭子', type: '物种', rarity: '普通', desc: '物种决定主体轮廓，共 {species} 种可选' },
    { name: '猫', type: '物种', rarity: '罕见', desc: '可叠加 {hats} 种帽子：王冠 / 礼帽 / 螺旋桨 / 光环 / 巫师帽…' },
    { name: '龙', type: '物种', rarity: '稀有', desc: '{eyes} 种眼睛符号，决定表情与气质' },
    { name: '章鱼', type: '物种', rarity: '史诗', desc: '稀有度分 {rarities} 级：common → legendary' },
    { name: '猫头鹰', type: '物种', rarity: '传说', desc: '外观由种子确定性生成，同一只始终长相一致' },
    { name: '机器人', type: '物种', rarity: '稀有', desc: '成长数据落盘 buddy-growth.json，跨会话保留' },
  ],
  growthTitle: 'Buddy 成长系统',
  growthDesc:
    '成长状态持久化在 <code class="font-mono text-brand-400">buddy-growth.json</code>，跨会话累计，不随进程重启丢失。',
  completedLabel: '完成任务',
  sessionsLabel: '对话轮数',
  streakLabel: '连续天数',
  achievementsLabel: '已解锁成就',
};

const en = {
  title: 'Buddy Persona System',
  subtitle:
    '{species} species × {hats} hats × {eyes} eyes × {rarities} rarity tiers — an AI companion, not a tool',
  types: ['Species', 'Hat', 'Eyes', 'Rarity'],
  rarities: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
  buddies: [
    { name: 'Duck', type: 'Species', rarity: 'Common', desc: 'The species sets the body silhouette — {species} to choose from' },
    { name: 'Cat', type: 'Species', rarity: 'Uncommon', desc: 'Stacks with {hats} hats: crown / top hat / propeller / halo / wizard hat…' },
    { name: 'Dragon', type: 'Species', rarity: 'Rare', desc: '{eyes} eye glyphs that set expression and mood' },
    { name: 'Octopus', type: 'Species', rarity: 'Epic', desc: 'Rarity spans {rarities} tiers: common → legendary' },
    { name: 'Owl', type: 'Species', rarity: 'Legendary', desc: 'Looks are generated deterministically from a seed — the same Buddy always looks the same' },
    { name: 'Robot', type: 'Species', rarity: 'Rare', desc: 'Growth data is persisted to buddy-growth.json and survives across sessions' },
  ],
  growthTitle: 'Buddy Growth System',
  growthDesc:
    'Growth state persists in <code class="font-mono text-brand-400">buddy-growth.json</code>, accumulates across sessions and is never lost when the process restarts.',
  completedLabel: 'Tasks completed',
  sessionsLabel: 'Conversations',
  streakLabel: 'Streak days',
  achievementsLabel: 'Achievements unlocked',
} satisfies typeof zh;

export const buddyShowcase = { zh, en };
