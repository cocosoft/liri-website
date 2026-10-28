import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

// 部署在自定义域名根路径：https://openliri.com
// 若改回 GitHub Pages 项目地址，把 BASE 设为 '/liri-website'
const BASE = '/';
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
  site: 'https://openliri.com',
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
