import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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
