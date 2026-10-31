import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE, HTML_LANG, LOCALES, localizePath } from '../i18n';

export const GET: APIRoute = async () => {
  const site = (import.meta.env.SITE || 'https://openliri.com').replace(/\/$/, '');
  const docs = await getCollection('docs');

  /** 各语言都存在的页面，path 为中文（默认语言）路径 */
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/evolution', priority: '0.9', changefreq: 'weekly' },
    { path: '/status', priority: '0.8', changefreq: 'weekly' },
    { path: '/sponsor', priority: '0.6', changefreq: 'monthly' },
    { path: '/docs', priority: '0.8', changefreq: 'weekly' },
    ...docs.map((doc) => ({ path: `/docs/${doc.id}`, priority: '0.6', changefreq: 'monthly' })),
  ];

  const urls = pages
    .flatMap((page) =>
      LOCALES.map((lang) => {
        const alternates = [
          ...LOCALES.map(
            (l) =>
              `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${site}${localizePath(page.path, l)}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${site}${localizePath(page.path, DEFAULT_LOCALE)}"/>`,
        ].join('\n');
        return `  <url>
    <loc>${site}${localizePath(page.path, lang)}</loc>
${alternates}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      }),
    )
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
