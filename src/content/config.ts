import { z, defineCollection, reference } from 'astro:content';

const authorCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			pronouns: z.string().optional(),
			headline: z.string().optional(),
			picture: image().optional(),
			socials: z
				.array(
					z.object({
						name: z.string(),
						url: z.string(),
					}),
				)
				.optional(),
		}),
});

const Category = z.enum(['React', 'Svelte', 'Next.js']);

const courseCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			category: Category.optional(),
			description: z.string(),
			cover: image(),
			authors: z.array(reference('authors')),
			publishDate: z.date(),
			isDraft: z.boolean().optional(),
			chapters: z.array(reference('chapters')),
		}),
});

const chapterCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		courseId: reference('courses'),
		lastModifiedDate: z.date().optional(),
	}),
});

export const collections = {
	authors: authorCollection,
	courses: courseCollection,
	chapters: chapterCollection,
};
