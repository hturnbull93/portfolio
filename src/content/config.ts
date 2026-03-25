import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    repoLink: z.string().optional(),
    deployLink: z.string().optional(),
    tech: z.string(),
    img: z.string(),
    description: z.string(),
    label: z.string(),
  }),
});

export const collections = { projects };
