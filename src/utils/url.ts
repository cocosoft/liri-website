const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * 给站内绝对路径加上部署 base。
 * 部署在自定义域名根路径时 BASE 为空，原样返回；
 * 部署在 GitHub Pages 子路径（/liri-website）时自动补前缀。
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return BASE + path;
}
