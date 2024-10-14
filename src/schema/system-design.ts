import { reference, z } from 'astro:content';

export const systemDesignSchema = z.object({
	title: z.string(),
	description: z.string(),
	author: reference('authors'),
	publishDate: z.date(),
	isDraft: z.boolean().default(false),
	chapters: z.array(z.object({ title: z.string(), slug: z.string() })),
});
