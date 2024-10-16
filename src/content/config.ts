import { authorSchema } from '@/schema/author';
import { blogSchema } from '@/schema/blog';
import { courseSchema } from '@/schema/course';
import { questionSchema } from '@/schema/question';
import { systemDesignSchema } from '@/schema/system-design';
import { defineCollection } from 'astro:content';

const authorCollection = defineCollection({
	type: 'content',
	schema: authorSchema,
});

const coursesCollection = defineCollection({
	type: 'content',
	schema: courseSchema,
});

const systemDesignCollection = defineCollection({
	type: 'content',
	schema: systemDesignSchema,
});

const questionsCollection = defineCollection({
	type: 'content',
	schema: questionSchema,
});

const blogCollection = defineCollection({
	type: 'content',
	schema: blogSchema,
});

export const collections = {
	authors: authorCollection,
	courses: coursesCollection,
	'system-design': systemDesignCollection,
	questions: questionsCollection,
	blog: blogCollection,
};
