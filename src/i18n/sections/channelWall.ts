/** 「消息渠道」区块文案 */
const zh = {
  title: '{channels} 个消息渠道',
  subtitle: '{channels} 个通道均有对应适配器；按通道配置环境变量后启用，也可在编译期裁剪',
  summary: '共 {count} 个通道 · 统一通道目录 · 按通道启用 · 支持编译期裁剪',
};

const en = {
  title: '{channels} messaging channels',
  subtitle:
    'Every one of the {channels} channels ships with a matching adapter. Set its environment variables to switch it on, or trim it out at build time.',
  summary:
    '{count} channels in total · one unified catalog · enable per channel · compile-time trimming',
} satisfies typeof zh;

export const channelWall = { zh, en };
