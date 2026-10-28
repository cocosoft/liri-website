import { withBase } from '../utils/url';

/** 支持的语言（参考 Liri 主仓 i18n：locale 列表 + 默认语言 + 回退） */
export const LOCALES = ['zh', 'en'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'zh';

/** 语言切换器与 <html lang> 显示用的标签 */
export const LANG_LABEL: Record<Lang, string> = { zh: '中文', en: 'English' };
export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', en: 'en' };

/** 从 URL 推断当前语言：/en 与 /en/... 为英文，其余为中文 */
export function getLangFromUrl(url: URL): Lang {
  return url.pathname.split('/')[1] === 'en' ? 'en' : 'zh';
}

/** 取当前语言的文案表（zh / en 两份结构由 satisfies 保证一致） */
export function pick<T>(dict: { zh: T; en: T }, url: URL): T {
  return dict[getLangFromUrl(url)];
}

/**
 * 站内路径本地化：'/docs' → '/en/docs'（中文保持原路径，避免已有链接与 SEO 失效）。
 * 传入的 path 需以 '/' 开头且不含部署 base。
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/')) return path;
  return withBase(lang === DEFAULT_LOCALE ? path : `/en${path}`);
}

/** 当前页面对应的另一语言版本地址，供语言切换器使用 */
export function switchLangPath(url: URL, lang: Lang): string {
  const stripped = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizePath(stripped, lang);
}

/** 与 Liri 主仓一致的 `{name}` 占位符插值 */
export function fmt(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    params[name] === undefined ? `{${name}}` : String(params[name])
  );
}

/** 数字按英文千分位展示（4,059），两种语言统一 */
export function num(n: number): string {
  return n.toLocaleString('en-US');
}
