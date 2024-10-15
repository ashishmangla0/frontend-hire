import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function HeaderMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Practice</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[200px] gap-2 p-2'>
							<ListItem href='/questions'>Questions</ListItem>
							<ListItem href='/interviews'>Interviews</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Learn</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[200px] gap-2 p-2'>
							<ListItem href='/courses'>Courses</ListItem>
							<ListItem href='/system-design'>System-Design</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

type ListItemProps = {
	href: string;
};

function ListItem({ href, children }: React.PropsWithChildren<ListItemProps>) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					href={href}
					className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
				>
					{children}
				</a>
			</NavigationMenuLink>
		</li>
	);
}
