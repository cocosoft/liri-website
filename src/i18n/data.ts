import type { Lang } from '.';
import { localeDicts } from './locales';

/**
 * 渠道相关中文专名的英文对照（键为 src/data/site.ts 中的原文）。
 * 其余语言由 locales/<lang>.ts 的 channels 提供，未命中时回退英文，再回退原文。
 */
const base: Record<'zh' | 'en', Record<string, string>> = {
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
  if (lang === 'zh') return name;
  if (lang === 'en') return base.en[name] ?? name;
  const channels = localeDicts[lang].channels as Record<string, string>;
  return channels[name] ?? base.en[name] ?? name;
}
