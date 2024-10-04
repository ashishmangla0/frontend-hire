const BUILD_MODE = process.env.BUILD_ENV || 'production';

const SITE_URL = (() => {
	let siteUrl = process.env.SITE_URL || process.env.VERCEL_URL || '';

	if (siteUrl && !siteUrl.startsWith('http')) siteUrl = `https://${siteUrl}`;

	if (!siteUrl) {
		switch (BUILD_MODE) {
			case 'production':
				return 'https://frontendhire.com';
			case 'development':
				return 'http://localhost:3000';
			default:
				return 'https://frontendhire.com';
		}
	}

	return siteUrl;
})();

const SITE_METADATA = {
	title: 'Frontend Hire',
	description:
		'We are solving Frontend Interviews and Hiring. Our platform helps developers build essential frontend skills, preparing them for technical interviews and real-world development.',
	siteUrl: SITE_URL,
	keywords:
		'frontend, web development, javascript, typescript, react, astro, svelte, next.js, questions, courses',
	socials: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/company/frontend-hire/',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/frontendhire',
		},
		{
			name: 'GitHub',
			url: 'https://github.com/Frontend-Hire',
		},
		{
			name: 'Discord',
			url: 'https://discord.gg/DWAVqksVtx',
		},
		{ name: 'Instagram', url: 'https://www.instagram.com/frontendhire/' },
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/@FrontendHire',
		},
	],
};

export type Route = {
	name: string;
	url: string;
	isExternal?: boolean;
	showOnMainNav?: boolean;
	subRoutes?: Route[];
};

const ROUTES: Route[] = [
	{
		name: 'Courses',
		url: '/courses',
		showOnMainNav: true,
	},
	{
		name: 'Authors',
		url: '/authors',
	},
];

export { SITE_METADATA, SITE_URL, ROUTES };
