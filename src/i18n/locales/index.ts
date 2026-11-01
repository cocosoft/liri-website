import type { Lang } from '../index';
import { ar } from './ar';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { ru } from './ru';

/**
 * 除中文、英文之外的语言包。每个文件导出整站文案（ui、channels 与 22 个区块），
 * 结构必须与英文版一一对应——由 withLocales 在构建期逐键校验，缺键直接报错。
 */
export const localeDicts = { ja, ko, es, pt, fr, de, ru, it, ar };

type Bundle = Record<string, unknown>;

/** 递归比对结构：键、数组长度、类型必须一致，避免漏译后线上出现 undefined */
function assertShape(section: string, lang: Lang, base: unknown, target: unknown, path = ''): void {
  const where = `${section}.${path || '(root)'}`;
  if (target === undefined) throw new Error(`[i18n] ${lang} 缺少字段：${where}`);
  if (Array.isArray(base)) {
    if (!Array.isArray(target)) throw new Error(`[i18n] ${lang} 的 ${where} 应为数组`);
    if (target.length !== base.length) throw new Error(`[i18n] ${lang} 的 ${where} 数组长度不一致`);
    base.forEach((item, i) => assertShape(section, lang, item, target[i], `${path}[${i}]`));
    return;
  }
  if (base && typeof base === 'object') {
    if (!target || typeof target !== 'object') throw new Error(`[i18n] ${lang} 的 ${where} 应为对象`);
    for (const key of Object.keys(base)) {
      assertShape(section, lang, (base as Bundle)[key], (target as Bundle)[key], path ? `${path}.${key}` : key);
    }
    return;
  }
  if (typeof target !== typeof base) throw new Error(`[i18n] ${lang} 的 ${where} 类型不一致`);
}

/**
 * 把一个区块的 zh/en 文案扩展成 10 种语言。
 * 用法：`export const hero = withLocales('hero', { zh, en });`
 */
export function withLocales<T>(key: string, base: { zh: T; en: T }): Record<Lang, T> {
  const out: Record<string, unknown> = { ...base };
  for (const [lang, bundle] of Object.entries(localeDicts)) {
    const value = (bundle as Bundle)[key];
    if (value === undefined) throw new Error(`[i18n] ${lang} 缺少区块：${key}`);
    assertShape(key, lang as Lang, base.en, value);
    out[lang] = value;
  }
  return out as Record<Lang, T>;
}
