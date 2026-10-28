/** 「项目状态」页框架文案（S1–S5 的正文复用已有区块字典） */
const zh = {
  meta: {
    title: '项目状态 — Liri',
    description:
      '能力自查、当前限制、版本节奏与技术栈：一页看清 Liri 现在做到哪、哪些还没做完，每个数字都能点回源码。',
  },
  label: '状态',
  title: '项目状态',
  subtitle:
    '能力自查、当前限制、版本节奏与技术栈——一页看清现在做到哪、哪些还没做完。每个数字都能点回源码。',
  jumpLabel: '本页内容',
  jumps: [
    { href: '#comparison', label: '能力自查' },
    { href: '#limitations', label: '当前限制' },
    { href: '#roadmap', label: '版本与迭代' },
    { href: '#techstack', label: '技术栈' },
  ],
  healthNote: '架构健康度趋势（9 次快照）将在下一版接入本页。',
  updateNote: '本页随版本更新；若与源码不一致，以 GitHub 仓库为准。',
};

const en = {
  meta: {
    title: 'Project Status — Liri',
    description:
      'Capability self-check, current limitations, release cadence and tech stack: everything Liri has built and everything it has not, with every number linking back to source.',
  },
  label: 'Status',
  title: 'Project status',
  subtitle:
    'Capability self-check, current limitations, release cadence and tech stack — what is done, what is not, and every number links back to source.',
  jumpLabel: 'On this page',
  jumps: [
    { href: '#comparison', label: 'Self-check' },
    { href: '#limitations', label: 'Limitations' },
    { href: '#roadmap', label: 'Versions' },
    { href: '#techstack', label: 'Tech stack' },
  ],
  healthNote: 'Architecture health trend (9 snapshots) will land on this page in the next release.',
  updateNote: 'Updated with each release; the GitHub repository is authoritative if anything disagrees.',
} satisfies typeof zh;

export const status = { zh, en };
