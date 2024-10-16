import React from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ROUTES } from '@/constants/site-config';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function HeaderMenu() {
	return (
		<>
			<DesktopHeaderMenu />
			<MobileHeaderMenu />
		</>
	);
}

function MobileHeaderMenu() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className='md:hidden'>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant='ghost' size='icon'>
						<HamburgerMenuIcon />
						<span className='sr-only'>Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<SheetHeader>
						<SheetTitle className='sr-only'>Menu</SheetTitle>
						<SheetDescription className='sr-only'>
							Choose a chapter
						</SheetDescription>
					</SheetHeader>
					<nav className='flex flex-col space-y-4'>
						{ROUTES.filter((route) => route.showOnMainNav).map((route) =>
							route.subRoutes ? (
								<div key={route.name} className='space-y-4'>
									<h2 className='text-lg font-semibold'>{route.name}</h2>
									<ul className='ml-4 space-y-2'>
										{route.subRoutes.map((subRoute) =>
											subRoute.url ? (
												<li key={subRoute.name}>
													<a
														href={subRoute.url}
														className='text-muted-foreground underline-offset-2 hover:underline'
														onClick={() => setIsOpen(false)}
													>
														{subRoute.name}
													</a>
												</li>
											) : null,
										)}
									</ul>
								</div>
							) : (
								<a
									key={route.name}
									href={route.url}
									className='block py-2 text-lg'
									onClick={() => setIsOpen(false)}
								>
									{route.name}
								</a>
							),
						)}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}

function DesktopHeaderMenu() {
	return (
		<NavigationMenu className='hidden md:block'>
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
