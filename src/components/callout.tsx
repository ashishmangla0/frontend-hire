import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
	ExclamationTriangleIcon,
	InfoCircledIcon,
	RocketIcon,
} from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const calloutVariants = cva(
	'relative w-full rounded-lg border px-4 py-3 mb-4 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3 [&>svg]:text-foreground [&>svg~*]:pl-7',
	{
		variants: {
			variant: {
				note: 'bg-blue-100 border-blue-200 text-blue-900 [&>svg]:text-blue-900 dark:[&>svg]:text-blue-200 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-200',
				tip: 'bg-green-100 border-green-200 text-green-900 [&>svg]:text-green-900 dark:[&>svg]:text-green-200 dark:bg-green-950 dark:border-green-900 dark:text-green-200',
				warn: 'bg-yellow-100 border-yellow-200 text-yellow-900 [&>svg]:text-yellow-900 dark:[&>svg]:text-yellow-200 dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-200',
				error:
					'bg-red-100 border-red-200 text-red-900 [&>svg]:text-red-900 dark:[&>svg]:text-red-200 dark:bg-red-950 dark:border-red-900 dark:text-red-200',
			},
		},
		defaultVariants: {
			variant: 'note',
		},
	},
);

type CalloutProps = React.PropsWithChildren<{
	type?: 'note' | 'tip' | 'warn' | 'error';
	title?: string;
}> &
	VariantProps<typeof calloutVariants>;

const typeMap = {
	note: {
		title: 'Note',
		icon: InfoCircledIcon,
	},
	tip: {
		title: 'Tip',
		icon: RocketIcon,
	},
	warn: {
		title: 'Warning',
		icon: ExclamationTriangleIcon,
	},
	error: {
		title: 'Error',
		icon: ExclamationTriangleIcon,
	},
};

export function Callout({ children, title, type = 'note' }: CalloutProps) {
	const Icon = typeMap[type].icon;

	return (
		<div className='not-prose'>
			<Alert className={calloutVariants({ variant: type })}>
				<Icon className='size-4' />
				<AlertTitle>{title || typeMap[type].title}</AlertTitle>
				<AlertDescription>{children}</AlertDescription>
			</Alert>
		</div>
	);
}

export default Callout;
