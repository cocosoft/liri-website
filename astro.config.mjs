import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

// 临时预览：部署在 GitHub Pages 项目子路径 https://cocosoft.github.io/liri-website/
// 自定义域名生效后切回：BASE 改为 '/'、site 改为 https://openliri.com，并恢复 public/CNAME
const BASE = '/liri-website';
const PREFIX = BASE.replace(/\/$/, '');

/** 给 Markdown 渲染出的站内绝对链接补上部署 base */
function rehypeBaseLinks() {
  const walk = (node) => {
    if (node.type === 'element') {
      for (const attr of ['href', 'src']) {
        const value = node.properties?.[attr];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
          node.properties[attr] = PREFIX + value;
        }
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://cocosoft.github.io',
  base: BASE,
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeBaseLinks],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
