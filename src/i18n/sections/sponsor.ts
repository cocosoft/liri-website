/** 「支持 Liri」页文案 */
const zh = {
  meta: {
    title: '支持 Liri — Liri',
    description:
      'Liri 是一个人维护的开源项目。赞助不是打赏，是买时间：让外部安全审计、英文文档校对和基础设施有人做。',
  },
  label: '支持',
  hero: {
    title: '支持 Liri',
    subtitle: '这是一个一人维护的开源项目。赞助不是打赏，是买时间——让审计、文档和基础设施有人做。',
    note: '所有资金去向按月公开在下面的账本里；MIT 的部分永远 MIT。',
  },
  channelsTitle: '赞助方式',
  channels: [
    {
      title: 'GitHub Sponsors',
      desc: '面向国际，月度赞助，名单与金额在 GitHub 上自然公开。',
      cta: '每月赞助',
    },
    {
      title: '爱发电',
      desc: '面向国内，支持支付宝 / 微信，可月度也可一次性。',
      cta: '去爱发电',
    },
  ],
  comingSoon: '即将开通',
  pendingNote: '国内渠道（爱发电）正在筹备，开通后会加在这里。',
  waitlistNote:
    'GitHub Sponsors 的收款要求账号位于支持地区，中国大陆暂不在名单内；赞助申请已提交，审核中。',
  contact: '企业支持与其它问题：在 Issues 里开一条（建议带 sponsor 标签）',
  usesTitle: '钱花在哪',
  usesNote: '比例是维护者的计划值，不是承诺；实际支出按月记录在账本里。',
  uses: [
    { label: '外部安全审计', share: '~40%', desc: '五层防线与 6 种沙箱后端还没有第三方审计，这是最缺的一块' },
    { label: 'CI 与发布签名', share: '~20%', desc: '多平台构建、安装包签名与发布流水线' },
    { label: '英文文档校对', share: '~15%', desc: '当前英文是人工翻译，通常滞后中文一个版本' },
    { label: '模型 API 额度', share: '~15%', desc: '评测与回归测试需要真实调用，不是 mock' },
    { label: '域名与托管', share: '~10%', desc: '官网、文档站与镜像' },
  ],
  notTitle: '不承诺什么',
  nots: [
    '不买功能排期：Issue 的优先级看影响面，不看金额',
    '不买优先支持：所有人在同一个 Issue 区排队',
    '不做闭源特权版：MIT 的部分永远 MIT',
    '不公开你的名字：除非你明确同意',
  ],
  tiersTitle: '赞助档位',
  tiers: [
    { title: '每月 ¥30', desc: '名字进入 SPONSORS.md' },
    { title: '每月 ¥100', desc: '名字 + 你的链接进入 SPONSORS.md' },
    { title: '企业支持', desc: 'logo + 链接；需要发票请走 Issues 联系，走对公' },
  ],
  ledgerTitle: '透明账本',
  ledgerDesc: '每月一条：收入 / 支出 / 余额。格式先立在这里，第一条从开通当月开始记。',
  ledgerHeaders: ['月份', '收入', '支出', '余额'],
  ledgerEmpty: '暂无记录',
  otherTitle: '不花钱也能帮',
  others: [
    { title: 'Star 与转发', desc: '让需要它的人看到', href: 'https://github.com/cocosoft/Liri' },
    { title: '带复现步骤的 Issue', desc: '一个能复现的 bug 比十句反馈有用', href: 'https://github.com/cocosoft/Liri/issues/new' },
    { title: '英文文档校对', desc: '英文版是人工翻译，欢迎挑错', href: '/docs' },
    { title: '安全审计', desc: '按清单逐条验证，不接收公开漏洞细节', href: '/evolution' },
    { title: '认领一块空白', desc: '维护者制度、契约层、覆盖率门禁', href: '/evolution' },
  ],
  faqTitle: '常见问题',
  faq: [
    { q: '能开发票吗？', a: '个人渠道不能。企业支持请通过 Issues 联系，走对公。' },
    { q: '能指定用途吗？', a: '可以备注，但最终按上面的比例分配。' },
    { q: '能退款吗？', a: '月度赞助随时可以取消；已支付的月份不退。' },
    { q: '会公开我的名字吗？', a: '默认不公开。想要出现在 SPONSORS.md 里，请在赞助时留言。' },
  ],
};

const en = {
  meta: {
    title: 'Support Liri — Liri',
    description:
      'Liri is an open-source project maintained by one person. Sponsorship is not a tip — it buys time for the external security audit, English docs review and infrastructure.',
  },
  label: 'Support',
  hero: {
    title: 'Support Liri',
    subtitle:
      'This is a one-person open-source project. Sponsorship is not a tip — it buys time for audits, docs and infrastructure.',
    note: 'Every month of spending is published in the ledger below; whatever is MIT stays MIT.',
  },
  channelsTitle: 'Ways to sponsor',
  channels: [
    {
      title: 'GitHub Sponsors',
      desc: 'For international sponsors, monthly, with the sponsor list public on GitHub.',
      cta: 'Sponsor monthly',
    },
    {
      title: 'Afdian',
      desc: 'For sponsors in China — Alipay / WeChat, monthly or one-off.',
      cta: 'Go to Afdian',
    },
  ],
  comingSoon: 'Coming soon',
  pendingNote: 'The China channel (Afdian) is being set up and will be added here.',
  waitlistNote:
    'Receiving GitHub Sponsors payouts requires an account in a supported region; mainland China is not on the list yet. The application has been submitted and is under review.',
  contact: 'Enterprise support and anything else: open an issue (tag it sponsor)',
  usesTitle: 'Where the money goes',
  usesNote: 'Shares are the maintainer’s plan, not a promise; actual spending is logged monthly.',
  uses: [
    { label: 'External security audit', share: '~40%', desc: 'Five defense layers and six sandbox backends have had no third-party audit — the biggest gap' },
    { label: 'CI and release signing', share: '~20%', desc: 'Multi-platform builds, installer signing and the release pipeline' },
    { label: 'English docs review', share: '~15%', desc: 'The English docs are a manual translation and usually lag Chinese by a release' },
    { label: 'Model API credits', share: '~15%', desc: 'Evaluation and regression need real calls, not mocks' },
    { label: 'Domain and hosting', share: '~10%', desc: 'Website, docs site and mirrors' },
  ],
  notTitle: 'What it does not buy',
  nots: [
    'No feature scheduling: issue priority follows impact, not amount',
    'No priority support: everyone queues in the same issue tracker',
    'No closed-source privileged edition: what is MIT stays MIT',
    'No public mention of your name unless you explicitly agree',
  ],
  tiersTitle: 'Tiers',
  tiers: [
    { title: '¥30 / month', desc: 'Your name in SPONSORS.md' },
    { title: '¥100 / month', desc: 'Your name and link in SPONSORS.md' },
    { title: 'Enterprise', desc: 'Logo and link; invoices available — contact via issues' },
  ],
  ledgerTitle: 'Transparent ledger',
  ledgerDesc: 'One entry per month: income / spending / balance. The format starts here; the first entry lands in the month sponsorship opens.',
  ledgerHeaders: ['Month', 'Income', 'Spending', 'Balance'],
  ledgerEmpty: 'No entries yet',
  otherTitle: 'Ways to help without money',
  others: [
    { title: 'Star and share', desc: 'Help the people who need it find it', href: 'https://github.com/cocosoft/Liri' },
    { title: 'A reproducible issue', desc: 'One reproducible bug beats ten opinions', href: 'https://github.com/cocosoft/Liri/issues/new' },
    { title: 'English docs review', desc: 'The English site is a manual translation — corrections welcome', href: '/docs' },
    { title: 'Security audit', desc: 'Walk the checklist; do not post vulnerability details publicly', href: '/evolution' },
    { title: 'Claim a blank', desc: 'Maintainer model, subsystem contracts, coverage gate', href: '/evolution' },
  ],
  faqTitle: 'FAQ',
  faq: [
    { q: 'Can you issue an invoice?', a: 'Not through personal channels. For enterprise support, contact us via issues and we will go through a company account.' },
    { q: 'Can I direct where my money goes?', a: 'You can leave a note, but allocation follows the shares above.' },
    { q: 'Can I get a refund?', a: 'Monthly sponsorship can be cancelled at any time; past months are not refunded.' },
    { q: 'Will my name be public?', a: 'Not by default. Leave a note when sponsoring if you want to appear in SPONSORS.md.' },
  ],
} satisfies typeof zh;

export const sponsor = { zh, en };
