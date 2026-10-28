import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const site = (import.meta.env.SITE || 'https://openliri.com').replace(/\/$/, '');
  const [zhDocs, enDocs] = await Promise.all([getCollection('docs'), getCollection('docsEn')]);

  /** 中英成对的页面：同一内容在两种语言下的路径 */
  const pages = [
    { zh: '/', en: '/en/', priority: '1.0', changefreq: 'weekly' },
    { zh: '/docs', en: '/en/docs', priority: '0.8', changefreq: 'weekly' },
    ...zhDocs.map((doc) => ({
      zh: `/docs/${doc.id}`,
      en: `/en/docs/${doc.id}`,
      priority: '0.6',
      changefreq: 'monthly',
    })),
    // 仅英文独有的文档（目前没有，留作兜底）
    ...enDocs
      .filter((doc) => !zhDocs.some((zh) => zh.id === doc.id))
      .map((doc) => ({
        zh: null,
        en: `/en/docs/${doc.id}`,
        priority: '0.6',
        changefreq: 'monthly',
      })),
  ];

  const url = (path: string, priority: string, changefreq: string, pair: { zh: string | null; en: string }) => {
    const alternates = [
      pair.zh ? `    <xhtml:link rel="alternate" hreflang="zh-CN" href="${site}${pair.zh}"/>` : '',
      `    <xhtml:link rel="alternate" hreflang="en" href="${site}${pair.en}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${site}${pair.zh ?? pair.en}"/>`,
    ]
      .filter(Boolean)
      .join('\n');
    return `  <url>
    <loc>${site}${path}</loc>
${alternates}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  const urls = pages
    .flatMap((page) => [
      page.zh ? url(page.zh, page.priority, page.changefreq, page) : '',
      url(page.en, page.priority, page.changefreq, page),
    ])
    .filter(Boolean)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
