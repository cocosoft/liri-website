import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    group: z.string().default('参考'),
    order: z.number().default(99),
    source: z.string().optional(),
  }),
});

export const collections = { docs };
