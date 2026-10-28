/** 「外脑系统」区块文案 */
const zh = {
  title: '外脑系统',
  subtitle: '知识库 → 记忆 → 会话事件：三段可检索上下文，都保存在本机',
  layers: [
    {
      badge: '第1层：知识库',
      title: '知识库',
      desc: 'Markdown 落盘 + 语义索引，检索结果带来源标注',
      tags: ['Markdown 落盘', '语义索引 JSONL', '关键词检索', '向量检索', 'RRF 融合'],
    },
    {
      badge: '第2层：记忆',
      title: '记忆系统',
      desc: '分层记忆 + SQLite 向量表，按相关性加权召回',
      tags: ['分层记忆', 'memory_vectors', '相关性加权', '记忆清洗', '上下文注入'],
    },
    {
      badge: '第3层：事实源',
      title: '会话事件日志',
      desc: '进入模型请求的内容都会落为会话事件，可回放',
      tags: ['events.jsonl 追加', '写前落盘', '会话回放', '审计可追溯', '编译期强制登记'],
    },
  ],
  governTitle: '整理与治理',
  governSubtitle: '空闲时整理知识，超窗时压缩上下文 —— 两条真实存在的后台管线',
  dreamHeading: 'DreamEngine 五阶段管线',
  dreamStages: [
    { name: '采集', desc: '汇总待整理的会话与文档' },
    { name: '分析', desc: '抽取主题与可复用结论' },
    { name: '生成', desc: '产出面向上层的笔记' },
    { name: '写入', desc: '落盘到知识库与记忆' },
    { name: '索引', desc: '重建向量与关键词索引' },
  ],
  contextTitle: '上下文分层治理',
  contextBody:
    '超窗的长会话先丢头部旧轮次，构建期内存占用从 O(全量) 降到 O(窗口)；切窗时保留「原文可取回」提示，需要细节再按页读回；再按 token 水位自动压缩。',
  contextCards: [
    { title: '分层切窗', desc: '超窗先裁旧轮次' },
    { title: '按需取回', desc: '原文可分段读回' },
    { title: '三级压缩', desc: 'Tier1/2 同步 + Tier3 后台' },
  ],
  pdcaTitle: 'PDCA 自迭代闭环',
  pdcaBody:
    '对于长程任务，Liri 自动执行 Plan-Do-Check-Act 循环：分解任务 → 执行步骤 → 评审结果 → 修正方案，直至完成或触发终止条件。',
  pdcaSteps: [
    { step: 'Plan', desc: '自动分解' },
    { step: 'Do', desc: '逐步执行' },
    { step: 'Check', desc: '自动评审' },
    { step: 'Act', desc: '自动修正' },
  ],
};

const en = {
  title: 'The Second Brain',
  subtitle: 'Knowledge base → Memory → Session events: three retrievable context layers, all stored on your machine',
  layers: [
    {
      badge: 'Layer 1: Knowledge base',
      title: 'Knowledge Base',
      desc: 'Markdown on disk plus semantic indexing, with sources cited in every result',
      tags: ['Markdown on disk', 'Semantic index JSONL', 'Keyword search', 'Vector search', 'RRF fusion'],
    },
    {
      badge: 'Layer 2: Memory',
      title: 'Memory System',
      desc: 'Layered memory plus SQLite vector tables, recalled with relevance weighting',
      tags: ['Layered memory', 'memory_vectors', 'Relevance weighting', 'Memory cleanup', 'Context injection'],
    },
    {
      badge: 'Layer 3: Source of truth',
      title: 'Session Event Log',
      desc: 'Everything that enters a model request becomes a session event you can replay',
      tags: ['Append-only events.jsonl', 'Persist before write', 'Session replay', 'Auditable trail', 'Compile-time registration'],
    },
  ],
  governTitle: 'Organize & Govern',
  governSubtitle: 'Curate knowledge when idle, compress context when it overflows — two real background pipelines',
  dreamHeading: 'DreamEngine five-stage pipeline',
  dreamStages: [
    { name: 'Gather', desc: 'Collect sessions and documents awaiting curation' },
    { name: 'Analyze', desc: 'Extract themes and reusable conclusions' },
    { name: 'Generate', desc: 'Produce notes aimed at the layers above' },
    { name: 'Write', desc: 'Write through to the knowledge base and memory' },
    { name: 'Index', desc: 'Rebuild vector and keyword indexes' },
  ],
  contextTitle: 'Layered Context Governance',
  contextBody:
    'When a long conversation overflows, the oldest turns are dropped first, cutting build-time memory from O(total) to O(window). A “raw text is retrievable” note survives the cut, details can be paged back in, and token watermarks trigger automatic compression.',
  contextCards: [
    { title: 'Layered windowing', desc: 'Trim old turns first when context overflows' },
    { title: 'Retrieve on demand', desc: 'Page the raw text back in' },
    { title: 'Three-tier compression', desc: 'Tier 1/2 inline + Tier 3 in the background' },
  ],
  pdcaTitle: 'PDCA Self-Improvement Loop',
  pdcaBody:
    'For long-running tasks, Liri runs the Plan-Do-Check-Act loop on its own: decompose the task → execute steps → review results → revise the plan, until it finishes or hits a stop condition.',
  pdcaSteps: [
    { step: 'Plan', desc: 'Auto-decompose' },
    { step: 'Do', desc: 'Step-by-step execution' },
    { step: 'Check', desc: 'Auto-review' },
    { step: 'Act', desc: 'Auto-correct' },
  ],
} satisfies typeof zh;

export const brainSection = { zh, en };
