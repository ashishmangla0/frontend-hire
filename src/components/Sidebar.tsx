import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface SidebarProps {
	children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost' size='icon' className='mb-4 lg:hidden'>
					<HamburgerMenuIcon className='h-6 w-6' />
					<span className='sr-only'>Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left'>
				<SheetHeader>
					<VisuallyHidden>
						<SheetTitle>Chapters</SheetTitle>
						<SheetDescription>The chapters of this course</SheetDescription>
					</VisuallyHidden>
				</SheetHeader>

				<div className='mt-4'>{children}</div>
			</SheetContent>
		</Sheet>
	);
}
