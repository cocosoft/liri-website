/** 「本地优先」区块文案 */
const zh = {
  title: '本地优先',
  subtitle:
    '支持 Ollama / llama.cpp 本地模型；数据默认存在本机。换用云端 Provider 时，只有那次请求的内容会发给所选的供应商',
  benefits: [
    {
      title: '可离线运行',
      desc: '使用本地 Ollama 或 llama.cpp 模型时，不需要联网也能对话和执行本地工具；会话、记忆与知识库都写在本机文件里。',
    },
    {
      title: '数据默认在本机',
      desc: '会话、记忆、知识库存放在本地 SQLite 与工作区目录中，会话记录以 events.jsonl 追加保存，方便回看与审计。',
    },
    {
      title: '按需接入云端',
      desc: '需要更强的模型时，可在配置里启用云端 Provider（{providers} 类），由路由按任务档位选择；也可以只用本地模型。',
    },
  ],
  compareTitle: '本地模式 / 云端模式',
  compareRows: [
    { label: '模型运行位置', local: '本机（Ollama / llama.cpp）', cloud: '供应商服务器' },
    { label: '是否需要联网', local: '不需要', cloud: '需要' },
    { label: '本次请求内容流向', local: '不出本机', cloud: '发给所选供应商' },
    { label: '成本来源', local: '自有算力', cloud: '按用量计费' },
    { label: '会话记录', local: 'events.jsonl 本机留存', cloud: '同样本机留存' },
  ],
};

const en = {
  title: 'Local-first',
  subtitle:
    'Run local models through Ollama or llama.cpp, and keep your data on your own machine by default. When you switch to a cloud provider, only the contents of that request are sent to the provider you chose',
  benefits: [
    {
      title: 'Works offline',
      desc: 'With a local Ollama or llama.cpp model you can chat and run local tools without a network connection. Sessions, memory and the knowledge base all live in local files.',
    },
    {
      title: 'Your data stays local',
      desc: 'Sessions, memory and the knowledge base live in local SQLite and your workspace directory, with conversation history appended to events.jsonl for easy review and auditing.',
    },
    {
      title: 'Add the cloud on demand',
      desc: 'When you need more horsepower, enable cloud providers ({providers} supported) in your config and let routing pick one per task tier — or stay local only.',
    },
  ],
  compareTitle: 'Local vs. Cloud',
  compareRows: [
    { label: 'Where the model runs', local: 'Your machine (Ollama / llama.cpp)', cloud: 'The provider’s servers' },
    { label: 'Network required', local: 'No', cloud: 'Yes' },
    { label: 'Where request data goes', local: 'Never leaves your machine', cloud: 'Sent to the chosen provider' },
    { label: 'Cost model', local: 'Your own hardware', cloud: 'Pay per use' },
    { label: 'Conversation history', local: 'events.jsonl stays local', cloud: 'Stays local too' },
  ],
} satisfies typeof zh;

export const localFirst = { zh, en };
