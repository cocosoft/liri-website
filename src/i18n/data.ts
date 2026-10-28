import type { Lang } from '.';

/**
 * 渠道相关中文专名的英文对照（键为 src/data/site.ts 中的原文）。
 * 未命中的值按原样输出，便于随时扩充渠道。
 */
export const channelI18n: Record<Lang, Record<string, string>> = {
  zh: {},
  en: {
    即时通讯: 'Messaging',
    国内平台: 'China platforms',
    协作与社交: 'Collaboration & social',
    其它通道: 'Other channels',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Mobile access',
  },
};

export function channelName(name: string, lang: Lang): string {
  return channelI18n[lang][name] ?? name;
}
