import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.date(),
    category: z.string().optional(),
    cover: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false).optional(),
    tags: z.array(z.string()).default([]).optional(),
  }),
});

export const collections = { posts };