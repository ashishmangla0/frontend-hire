const buildMode = process.env.BUILD_ENV || 'production';

const siteUrl = (() => {
	let siteUrl = process.env.SITE_URL || process.env.VERCEL_URL || '';

	if (siteUrl && !siteUrl.startsWith('http')) siteUrl = `https://${siteUrl}`;

	if (!siteUrl) {
		switch (buildMode) {
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

const siteMetadata = {
	title: 'Frontend Hire',
	description:
		'We are solving Frontend Interviews and Hiring. Our platform helps developers build essential frontend skills, preparing them for technical interviews and real-world development.',
	siteUrl,
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

export { siteMetadata, siteUrl };
