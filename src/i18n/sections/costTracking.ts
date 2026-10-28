/** 「成本透明」区块文案 */
const zh = {
  title: '成本透明',
  subtitle: '定价读数据库、按真实模型归因、逐次调用落库——每一分钱都能对上账',
  attributionTitle: '成本归因',
  attributionRows: [
    { label: '定价来源', value: 'model_registry 表' },
    { label: '模型归因', value: 'provider 回显模型名' },
    { label: '用量依据', value: 'provider 真实 usage' },
    { label: '偏差可观测', value: '估算 vs 实测双记' },
  ],
  ledgerTitle: '预算与账本',
  ledgerRows: [
    { label: '每日预算', value: '全局 / 批处理各一份' },
    { label: '水位控制', value: '预警 → 压缩 → 阻断' },
    { label: '调用流水', value: 'cost_records 落库' },
    { label: '会话汇总', value: '按会话累计成本' },
  ],
  questionsTitle: '一次调用，事后能回答四个问题',
  questions: [
    { dim: '用了哪个模型', desc: '真实回显，非配置值' },
    { dim: '花了多少钱', desc: '按定价表折算' },
    { dim: '上下文是什么', desc: '事件日志可回放' },
    { dim: '是否回退过', desc: '回退链全程留痕' },
  ],
  footer: 'CostTracker · PriceManager · cost_records · 每日预算 · 用量归因',
};

const en = {
  title: 'Transparent Costs',
  subtitle:
    'Pricing read straight from the database, attribution to the real model, every call written to the ledger — every cent reconciles.',
  attributionTitle: 'Cost attribution',
  attributionRows: [
    { label: 'Pricing source', value: 'model_registry table' },
    { label: 'Model attribution', value: 'provider-reported model name' },
    { label: 'Usage basis', value: 'real provider usage' },
    { label: 'Drift made visible', value: 'estimates and actuals both recorded' },
  ],
  ledgerTitle: 'Budgets & ledger',
  ledgerRows: [
    { label: 'Daily budget', value: 'One global, one for batch' },
    { label: 'Watermark control', value: 'Warn → compress → block' },
    { label: 'Call log', value: 'Written to cost_records' },
    { label: 'Session totals', value: 'Cost accumulated per session' },
  ],
  questionsTitle: 'One call, four questions answered after the fact',
  questions: [
    { dim: 'Which model ran', desc: 'Provider-reported, not the config value' },
    { dim: 'What it cost', desc: 'Priced against the rate table' },
    { dim: 'What the context was', desc: 'Replayable from the event log' },
    { dim: 'Whether it fell back', desc: 'Every hop of the fallback chain recorded' },
  ],
  footer: 'CostTracker · PriceManager · cost_records · daily budgets · usage attribution',
} satisfies typeof zh;

export const costTracking = { zh, en };
