import { authorSchema } from '@/schema/author';
import { courseChapterSchema, courseSchema } from '@/schema/course';
import {
	systemDesignChapterSchema,
	systemDesignSchema,
} from '@/schema/system-design';
import { defineCollection, reference, z } from 'astro:content';

const authorCollection = defineCollection({
	type: 'content',
	schema: authorSchema,
});

// WHY DO I HAVE TO SEPARATE THESE TWO?
// https://github.com/withastro/roadmap/discussions/801
const coursesCollection = defineCollection({
	type: 'content',
	schema: courseSchema,
});

const courseChapterCollection = defineCollection({
	type: 'content',
	schema: courseChapterSchema,
});

// WHY DO I HAVE TO SEPARATE THESE TWO?
// https://github.com/withastro/roadmap/discussions/801
const systemDesignCollection = defineCollection({
	type: 'content',
	schema: systemDesignSchema,
});

const systemDesignChapterCollection = defineCollection({
	type: 'content',
	schema: systemDesignChapterSchema,
});

const reactCodingQuestionsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		environment: z.enum(['browser', 'local']),
		difficulty: z.enum(['easy', 'medium', 'hard']),
	}),
});

const questionsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		skill: z.enum(['react', 'next']),
		type: z.enum(['coding', 'theory']),
		questions: z.array(reference('questions-react-coding')),
	}),
});
export const collections = {
	authors: authorCollection,
	courses: coursesCollection,
	'course-chapters': courseChapterCollection,
	'system-design': systemDesignCollection,
	'system-design-chapters': systemDesignChapterCollection,
	questions: questionsCollection,
	'questions-react-coding': reactCodingQuestionsCollection,
};
