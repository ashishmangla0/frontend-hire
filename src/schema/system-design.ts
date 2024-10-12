import { reference, z } from 'astro:content';

export const systemDesignSchema = z.object({
	title: z.string(),
	description: z.string(),
	author: reference('authors'),
	publishDate: z.date(),
	isDraft: z.boolean().default(false),
	chapters: z.array(reference('system-design-chapters')),
});

export const systemDesignChapterSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	systemDesignId: reference('system-design'),
	lastModifiedDate: z.date().optional(),
});
