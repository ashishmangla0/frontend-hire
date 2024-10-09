import { cn } from '@/utils/classnames';
import type { MarkdownHeading } from 'astro';
import React from 'react';

const TableOfContents = ({ headings }: { headings: MarkdownHeading[] }) => {
	const [activeId, setActiveId] = React.useState('');

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: '0px 0px -80% 0px' },
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.slug);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			headings.forEach((heading) => {
				const element = document.getElementById(heading.slug);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, [headings]);

	return (
		<nav className='space-y-4'>
			<h2 className='font-bold'>On this page</h2>
			<ul className='space-y-2 text-sm'>
				{headings.map((heading) => (
					<li key={heading.slug}>
						<a
							className={cn(
								'text-muted-foreground underline-offset-2 hover:underline',
								activeId === heading.slug ? 'text-foreground' : '',
							)}
							href={`#${heading.slug}`}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
