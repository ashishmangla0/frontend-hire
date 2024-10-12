import { cn } from '@/utils/classnames';
import { cva } from 'class-variance-authority';
import { Badge } from './ui/badge';
import type { Category } from '@/schema/course';

type CourseCategoryProps = {
	category: Category;
};

const categoryVariants = cva('', {
	variants: {
		variant: {
			svelte:
				'bg-[hsl(15deg,100%,20%)] text-[hsl(15deg,100%,80%)] hover:bg-[hsl(15deg,100%,30%)]',
			react:
				'bg-[hsl(193deg,95%,20%)] text-[hsl(193deg,95%,80%)] hover:bg-[hsl(193deg,95%,30%)]',
			next: 'bg-[hsl(0deg,0%,20%)] text-[hsl(0deg,0%,80%)] hover:bg-[hsl(0deg,0%,30%)]',
		},
	},
});

export function CourseCategoryBadge({ category }: CourseCategoryProps) {
	if (!category) {
		return null;
	}

	return (
		<Badge className={cn(categoryVariants({ variant: category }))}>
			{category}
		</Badge>
	);
}
