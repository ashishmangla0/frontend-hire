import { z, defineCollection, reference } from 'astro:content';

const authorCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			pronouns: z.string().optional(),
			headline: z.string().optional(),
			picture: image().optional(),
			order: z.number().optional(),
			joiningDate: z.date(),
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

const CATEGORY = z.enum(['react', 'svelte', 'next']);

export type Category = z.infer<typeof CATEGORY>;

// WHY DO I HAVE TO SEPARATE THESE TWO?
// https://github.com/withastro/roadmap/discussions/801
const courseMetaCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			category: CATEGORY,
			description: z.string(),
			cover: image(),
			author: reference('authors'),
			publishDate: z.date(),
			isDraft: z.boolean().default(false),
			chapters: z.array(reference('courseChapters')),
		}),
});

const courseChapterCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		courseId: reference('coursesMeta'),
		lastModifiedDate: z.date().optional(),
	}),
});

export const collections = {
	authors: authorCollection,
	courseMeta: courseMetaCollection,
	courseChapter: courseChapterCollection,
};
