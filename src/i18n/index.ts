import { withBase } from '../utils/url';

/** 支持的语言（参考 Liri 主仓 i18n：locale 列表 + 默认语言 + 回退） */
export const LOCALES = ['zh', 'en', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'ru', 'it', 'ar'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'zh';
/** 除默认语言外，其余语言都走 /<locale> 前缀 */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Lang[];

/** 语言切换器与 <html lang> 显示用的标签（用各语言自己的写法） */
export const LANG_LABEL: Record<Lang, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский',
  it: 'Italiano',
  ar: 'العربية',
};
/** 文字方向：阿拉伯语为 RTL，其余为 LTR */
export const DIRECTION: Record<Lang, 'ltr' | 'rtl'> = {
  zh: 'ltr',
  en: 'ltr',
  ja: 'ltr',
  ko: 'ltr',
  es: 'ltr',
  pt: 'ltr',
  fr: 'ltr',
  de: 'ltr',
  ru: 'ltr',
  it: 'ltr',
  ar: 'rtl',
};
export const HTML_LANG: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  es: 'es',
  pt: 'pt-BR',
  fr: 'fr',
  de: 'de',
  ru: 'ru',
  it: 'it',
  ar: 'ar',
};
export const OG_LOCALE: Record<Lang, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
  es: 'es_ES',
  pt: 'pt_BR',
  fr: 'fr_FR',
  de: 'de_DE',
  ru: 'ru_RU',
  it: 'it_IT',
  ar: 'ar_AR',
};

/** 从 URL 推断当前语言：/ja 与 /ja/... 为日语，其余为默认语言 */
export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  const hit = LOCALES.find((locale) => locale !== DEFAULT_LOCALE && locale === segment);
  return hit ?? DEFAULT_LOCALE;
}

/** 取当前语言的文案表（各语言结构由 locales/ 里的校验保证一致） */
export function pick<T>(dict: Record<Lang, T>, url: URL): T {
  return dict[getLangFromUrl(url)];
}

/**
 * 站内路径本地化：'/docs' → '/ja/docs'（中文保持原路径，避免已有链接与 SEO 失效）。
 * 传入的 path 需以 '/' 开头且不含部署 base。
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/')) return path;
  return withBase(lang === DEFAULT_LOCALE ? path : `/${lang}${path}`);
}

/** 当前页面对应的另一语言版本地址，供语言切换器使用 */
const LOCALE_PREFIX = new RegExp(`^/(${LOCALES.join('|')})(?=/|$)`);

export function switchLangPath(url: URL, lang: Lang): string {
  const stripped = url.pathname.replace(LOCALE_PREFIX, '') || '/';
  return localizePath(stripped, lang);
}

/** 与 Liri 主仓一致的 `{name}` 占位符插值 */
export function fmt(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    params[name] === undefined ? `{${name}}` : String(params[name])
  );
}

/** 数字按英文千分位展示（4,059），各语言统一 */
export function num(n: number): string {
  return n.toLocaleString('en-US');
}
