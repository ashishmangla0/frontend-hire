import { z } from 'astro:content';

const QuestionSkill = z.enum([
	'web',
	'css',
	'javascript',
	'react',
	'next',
	'dsa',
]);
const QuestionType = z.enum(['coding', 'theory']);
const CodingEnvironmentType = z.enum(['browser', 'local']);
const Difficulty = z.enum(['easy', 'medium', 'hard', 'master']);

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
	template: z.string(), // Assuming SandpackPredefinedTemplate is a string
	externalCDNs: z.array(z.string()).optional(),
	showPreview: z.boolean().optional(),
	showConsole: z.boolean().optional(),
	files: z.record(z.string()), // Simplified representation of SandpackFiles
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
