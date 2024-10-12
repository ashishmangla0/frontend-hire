import { z } from 'astro:content';

const QuestionSkill = z.enum([
	'web',
	'css',
	'javascript',
	'react',
	'next',
	'dsa',
]);

export const QuestionType = z.enum(['coding', 'theory']);
export const CodingEnvironmentType = z.enum(['browser', 'local']);
export const Difficulty = z.enum(['easy', 'medium', 'hard', 'master']);

const File = z.object({
	code: z.string(),
	hidden: z.boolean().optional(),
	active: z.boolean().optional(),
	readOnly: z.boolean().optional(),
});

const Template = z.enum(['static', 'react', 'vanilla']);

// Define the base question schema
const baseQuestionSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	difficulty: Difficulty,
	publishedOn: z.date(),
	isFree: z.boolean().optional(),
	skills: z.array(QuestionSkill),
});

// Define the browser coding question schema
const browserCodingQuestionSchema = baseQuestionSchema.extend({
	type: z.literal(QuestionType.Enum.coding),
	environment: z.literal(CodingEnvironmentType.Enum.browser),
	recommendedLayout: z.enum(['col-3', 'col-2']),
	template: Template,
	externalCDNs: z.array(z.string()).optional(),
	showPreview: z.boolean().optional(),
	showConsole: z.boolean().optional(),
	files: z.array(File).optional(),
	dependencies: z.record(z.string()).optional(),
});

// Define the local coding question schema
const localCodingQuestionSchema = baseQuestionSchema.extend({
	type: z.literal(QuestionType.Enum.coding),
	environment: z.literal(CodingEnvironmentType.Enum.local),
});

// Define the theory question schema
const theoryQuestionSchema = baseQuestionSchema.extend({
	type: z.literal(QuestionType.Enum.theory),
});

// Combine all question types into one schema
export const questionSchema = z.discriminatedUnion('type', [
	browserCodingQuestionSchema,
	localCodingQuestionSchema,
	theoryQuestionSchema,
]);
