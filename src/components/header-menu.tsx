import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ROUTES } from '@/constants/site-config';

export default function HeaderMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{ROUTES.filter((route) => route.showOnMainNav).map((route) =>
					route.subRoutes ? (
						<NavigationMenuItem key={route.name}>
							<NavigationMenuTrigger>{route.name}</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[200px] gap-2 p-2'>
									{route.subRoutes.map((subRoute) =>
										subRoute.url ? (
											<ListItem key={subRoute.name} href={subRoute.url}>
												{subRoute.name}
											</ListItem>
										) : null,
									)}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					) : (
						<ListItem key={route.name} href={route.url}>
							{route.name}
						</ListItem>
					),
				)}
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
