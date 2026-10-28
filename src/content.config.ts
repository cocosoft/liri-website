import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsSchema = z.object({
  title: z.string(),
  description: z.string().optional().default(''),
  group: z.string().default('参考'),
  order: z.number().default(99),
  source: z.string().optional(),
});

/** 中文文档：scripts/sync-docs.mjs 从 Liri 仓库 app/docs 同步生成，勿手改 */
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: docsSchema,
});

/** 英文文档：中文文档的译文，slug 与字段需与中文版一一对应 */
const docsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-en' }),
  schema: docsSchema,
});

export const collections = { docs, docsEn };
