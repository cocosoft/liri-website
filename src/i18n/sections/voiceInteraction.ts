/** 「语音交互」区块文案 */
const zh = {
  title: '语音交互',
  subtitle: '不只是打字——说出你的需求，Liri 听懂、执行、回答',
  features: [
    {
      title: '语音输入',
      desc: '本地 faster-whisper 与 SenseVoice，或云端 OpenAI Whisper',
      platforms: ['本地 faster-whisper', 'SenseVoice', 'OpenAI Whisper', '流式识别'],
    },
    {
      title: '语音输出',
      desc: '本地 Piper 或云端 Edge / OpenAI，也可接自定义命令',
      platforms: ['本地 Piper', 'Edge TTS', 'OpenAI TTS', '自定义命令'],
    },
    {
      title: '工具化调用',
      desc: '语音能力本身也是工具，模型可按需调用',
      platforms: ['tts 工具', 'audio_play 工具', '语音输入', '回复播报'],
    },
    {
      title: '多端适配',
      desc: '桌面端与终端共享同一套语音服务',
      platforms: ['Tauri 桌面', 'CLI 终端', 'HTTP API'],
    },
  ],
  scenarios: '免提操作 · 多任务场景 · 无障碍辅助 · 语音快捷指令 ·',
  scenariosHighlight: '随时随地，说出即执行',
};

const en = {
  title: 'Voice Interaction',
  subtitle: 'More than typing — say what you need, and Liri understands, acts and answers',
  features: [
    {
      title: 'Voice Input',
      desc: 'Local faster-whisper or SenseVoice, or OpenAI Whisper in the cloud',
      platforms: ['Local faster-whisper', 'SenseVoice', 'OpenAI Whisper', 'Streaming recognition'],
    },
    {
      title: 'Voice Output',
      desc: 'Local Piper or Edge / OpenAI in the cloud, or your own custom command',
      platforms: ['Local Piper', 'Edge TTS', 'OpenAI TTS', 'Custom command'],
    },
    {
      title: 'Tool-native',
      desc: 'Speech itself is a tool the model can call whenever it needs one',
      platforms: ['tts tool', 'audio_play tool', 'Voice input', 'Reply playback'],
    },
    {
      title: 'Every Surface',
      desc: 'Desktop and terminal share the same speech service',
      platforms: ['Tauri desktop', 'CLI terminal', 'HTTP API'],
    },
  ],
  scenarios: 'Hands-free operation · Multitasking · Accessibility · Voice shortcuts ·',
  scenariosHighlight: 'Say it anywhere, and it is done',
} satisfies typeof zh;

export const voiceInteraction = { zh, en };
