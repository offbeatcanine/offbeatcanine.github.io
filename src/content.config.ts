import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/reviews' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number(),
    body: z.string(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { reviews };
