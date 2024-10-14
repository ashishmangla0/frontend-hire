import { CATEGORIES } from '@/constants/category';
import { reference, z, type SchemaContext } from 'astro:content';

export const courseSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		category: z.enum(CATEGORIES),
		description: z.string(),
		cover: image(),
		author: reference('authors'),
		publishDate: z.date(),
		isDraft: z.boolean().default(false),
		chapters: z.array(reference('course-chapters')),
	});

export const courseChapterSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	courseId: reference('courses'),
	lastModifiedDate: z.date().optional(),
});
