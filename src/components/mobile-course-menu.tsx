import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/utils/classnames';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

type Props = {
	chapters: { title: string; slug: string }[];
	currentChapterSlug: string;
};
export default function MobileCourseMenu({
	chapters,
	currentChapterSlug,
}: Props) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon'>
					<HamburgerMenuIcon className='h-6 w-6' />
					<span className='sr-only'>Toggle menu</span>
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
