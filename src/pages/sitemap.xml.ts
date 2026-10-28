import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const site = (import.meta.env.SITE || 'https://openliri.com').replace(/\/$/, '');
  const docs = await getCollection('docs');

  const entries = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/docs', priority: '0.8', changefreq: 'weekly' },
    ...docs.map((doc) => ({ path: `/docs/${doc.id}`, priority: '0.6', changefreq: 'monthly' })),
  ];

  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${site}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
