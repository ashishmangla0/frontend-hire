const SITE_URL = (() => {
	let siteUrl = import.meta.env.SITE;

	if (siteUrl && !siteUrl.startsWith('http')) siteUrl = `https://${siteUrl}`;

	if (!siteUrl) {
		switch (import.meta.env.MODE) {
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
	author: 'Frontend Hire and Contributors',
	description:
		'We are solving Frontend Interviews and Hiring. Our platform helps developers build essential frontend skills, preparing them for technical interviews and real-world development.',
	siteUrl: SITE_URL,
	socialImage: `${SITE_URL}/social-image.png`,
	keywords:
		'frontend, web development, javascript, typescript, react, astro, svelte, next.js, questions, courses',
	twitterHandle: '@frontendhire',
	socials: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/company/frontend-hire/',
			icon: `<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 24 24'
						aria-hidden='true'
						class='h-6 w-6'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z'
						></path>
					</svg>`,
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/frontendhire',
			icon: `<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 24 24'
						aria-hidden='true'
						class='h-6 w-6'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
						></path>
					</svg>`,
		},
		{
			name: 'GitHub',
			url: 'https://github.com/Frontend-Hire',
			icon: `<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 24 24'
						aria-hidden='true'
						class='h-6 w-6'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z'
						></path>
					</svg>`,
		},
		{
			name: 'Discord',
			url: 'https://discord.gg/DWAVqksVtx',
			icon: `<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 24 24'
						aria-hidden='true'
						class='h-6 w-6'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z'
						></path>
					</svg>`,
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/frontendhire/',
			icon: `<svg
						xmlns='http://www.w3.org/2000/svg'
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						class='h-6 w-6'
						height='1em'
						width='1em'
						aria-hidden='true'
						viewBox='0 0 256 256'
					>
						<path
							d='M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z'
						></path>
					</svg>`,
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/@FrontendHire',
			icon: `<svg
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 256 256'
						aria-hidden='true'
						class='h-6 w-6'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z'
						></path>
					</svg>`,
		},
	],
};

type RouteBase = {
	name: string;
	isExternal?: boolean;
	showOnMainNav?: boolean;
};

type RouteWithUrl = RouteBase & {
	url: string;
	subRoutes?: never;
};

type RouteWithSubRoutes = RouteBase & {
	url?: never;
	subRoutes: Route[];
};

export type Route = RouteWithUrl | RouteWithSubRoutes;

const ROUTES: Route[] = [
	{
		name: 'Practice',
		showOnMainNav: true,
		subRoutes: [
			{
				name: 'Questions',
				url: '/questions',
			},
			{
				name: 'Interviews',
				url: '/interviews',
			},
		],
	},
	{
		name: 'Learn',
		showOnMainNav: true,
		subRoutes: [
			{
				name: 'Courses',
				url: '/courses',
			},
			{
				name: 'System Design',
				url: '/system-design',
			},
		],
	},
	{
		name: 'Company',
		subRoutes: [
			{
				name: 'About',
				url: '/about',
			},
			{
				name: 'Blog',
				url: '/blog',
			},
		],
	},
];

export { SITE_METADATA, SITE_URL, ROUTES };
