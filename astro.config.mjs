import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

// 部署在 GitHub Pages 项目子路径下：https://cocosoft.github.io/liri-website/
// 换成自定义域名（openliri.com）时，把 BASE 改成 '/' 即可
const BASE = '/liri-website';

/** 给 Markdown 渲染出的站内绝对链接补上部署 base */
function rehypeBaseLinks() {
  const walk = (node) => {
    if (node.type === 'element') {
      for (const attr of ['href', 'src']) {
        const value = node.properties?.[attr];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
          node.properties[attr] = BASE + value;
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
