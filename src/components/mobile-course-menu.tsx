import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import type { CourseNavItem } from '@/types/course';
import { cn } from '@/utils/classnames';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type Props = {
	chapters: CourseNavItem[];
	currentChapterSlug: string;
};
export default function MobileCourseMenu({
	chapters,
	currentChapterSlug,
}: Props) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>
					<HamburgerMenuIcon className='mr-2 size-6' />
					<span>Course Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left'>
				<SheetHeader>
					<SheetTitle className='text-left text-xl'>Chapters</SheetTitle>
					<SheetDescription className='sr-only'>
						Choose a chapter
					</SheetDescription>
				</SheetHeader>

				<nav className='space-y-4'>
					<ul className='mt-6 space-y-2'>
						{chapters.map((chapter) => (
							<li key={chapter.slug}>
								<a
									className={cn(
										'text-muted-foreground underline-offset-2 hover:underline',
										currentChapterSlug === chapter.slug
											? 'text-foreground'
											: '',
									)}
									href={`/courses/${chapter.slug}`}
								>
									{chapter.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
