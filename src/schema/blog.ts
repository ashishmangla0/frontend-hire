import { reference, z, type SchemaContext } from 'astro:content';

export const blogSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		isDraft: z.boolean().default(false),
		author: reference('authors'),
		cover: image(),
		tags: z.array(z.string()).optional(),
		canonicalUrl: z.string().optional(),
	});
