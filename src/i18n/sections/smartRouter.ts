/** 「智能路由」区块文案 */
const zh = {
  title: '智能路由',
  subtitle: '按任务类型与难度选择模型档位；主供应商不可用时按配置顺序回退',
  taskTypesHeading: '自动识别 {taskTypes} 种任务类型（下为常见 {common} 类）',
  taskTypes: [
    { name: '编码', desc: '代码生成/调试/审查' },
    { name: '写作', desc: '文档/文案/翻译' },
    { name: '分析', desc: '数据分析/推理/规划' },
    { name: '工具', desc: '文件/搜索/系统操作' },
    { name: '翻译', desc: '多语言翻译/本地化' },
    { name: '搜索', desc: 'Web 搜索/信息检索' },
    { name: '创意', desc: '头脑风暴/设计/构思' },
    { name: '闲聊', desc: '日常对话/通用交流' },
  ],
  layersHeading: '{n} 层决策管线',
  layers: [
    { name: 'L1: 路由开关', desc: '关闭时直连默认模型，不做额外判定' },
    { name: 'L2: 快通道命中', desc: '命中简单任务或前缀规则，直接走低档模型' },
    { name: 'L3: 会话黏性', desc: '同一会话保持已选模型，避免频繁切换' },
    { name: 'L4: LLM 判别', desc: '小模型判定任务类型与难度，产出 tier' },
    { name: 'L5: Tier 解析', desc: '按 simple/medium/complex/reasoning 落到具体模型' },
  ],
  fallbackHeading: '供应商回退链',
  fallbackNote: '主模型不可用 → 自动回退 → 降级不中断',
  fallback: [
    { name: '首选', model: '主供应商 · 当前档位模型' },
    { name: '回退 1', model: '同档备用供应商' },
    { name: '回退 2', model: '跨档降级供应商' },
    { name: '回退 3', model: '其余已配置供应商' },
    { name: '兜底', model: '本地 Ollama / llama.cpp' },
  ],
};

const en = {
  title: 'Smart Routing',
  subtitle:
    'Picks a model tier from task type and difficulty, then falls back through your configured order when the primary provider is unavailable',
  taskTypesHeading: 'Auto-detects {taskTypes} task types ({common} common ones below)',
  taskTypes: [
    { name: 'Coding', desc: 'Code generation, debugging, review' },
    { name: 'Writing', desc: 'Docs, copy, translation' },
    { name: 'Analysis', desc: 'Data analysis, reasoning, planning' },
    { name: 'Tools', desc: 'Files, search, system operations' },
    { name: 'Translation', desc: 'Multilingual translation and localization' },
    { name: 'Search', desc: 'Web search and information retrieval' },
    { name: 'Creative', desc: 'Brainstorming, design, ideation' },
    { name: 'Chat', desc: 'Everyday conversation' },
  ],
  layersHeading: '{n}-layer decision pipeline',
  layers: [
    { name: 'L1: Router switch', desc: 'When off, requests go straight to the default model with no extra checks' },
    { name: 'L2: Fast path', desc: 'Simple tasks or prefix rules go straight to the low-tier model' },
    { name: 'L3: Session stickiness', desc: 'Keeps one model per conversation so it does not keep switching' },
    { name: 'L4: LLM classifier', desc: 'A small model judges task type and difficulty, then assigns a tier' },
    { name: 'L5: Tier resolution', desc: 'Maps simple/medium/complex/reasoning tiers to concrete models' },
  ],
  fallbackHeading: 'Provider fallback chain',
  fallbackNote: 'Primary model down → automatic fallback → degradation without interruption',
  fallback: [
    { name: 'Primary', model: 'Primary provider · current tier model' },
    { name: 'Fallback 1', model: 'Same-tier backup provider' },
    { name: 'Fallback 2', model: 'Cross-tier fallback provider' },
    { name: 'Fallback 3', model: 'Any other configured provider' },
    { name: 'Last resort', model: 'Local Ollama / llama.cpp' },
  ],
} satisfies typeof zh;

export const smartRouter = { zh, en };
