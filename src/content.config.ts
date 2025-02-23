import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/reviews' }),
  schema: z.object({
    date: z.date(),
    title: z.string(),
    author: z.string(),
    rating: z.number(),
    photo: z.optional(z.string()),
  }),
});

export const collections = { reviews };
