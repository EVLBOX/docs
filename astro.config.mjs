// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.evlbox.com',
	output: 'static',
	integrations: [
		starlight({
			title: 'EVLBOX Docs',
			logo: {
				src: './src/assets/evlbox-logo.svg',
				replacesTitle: false,
			},
			defaultLocale: 'en',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/evlbox/docs' },
			],
			editLink: {
				baseUrl: 'https://github.com/evlbox/docs/edit/main/',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'EVLBOX Docs',
					},
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'getting-started' },
						{ label: 'Connecting to Your Server', slug: 'getting-started/connecting-to-your-server' },
						{ label: 'Using the Game Panel', slug: 'getting-started/using-the-game-panel' },
						{ label: 'SFTP Access', slug: 'getting-started/sftp-access' },
					],
				},
				{
					label: 'Game Servers',
					items: [
						{ label: 'Overview', slug: 'game-servers' },
						{ label: 'Minecraft', slug: 'game-servers/minecraft' },
						{ label: 'Palworld', slug: 'game-servers/palworld' },
						{ label: 'Valheim', slug: 'game-servers/valheim' },
						{ label: 'Rust', slug: 'game-servers/rust' },
						{ label: 'ARK', slug: 'game-servers/ark' },
					],
				},
				{
					label: 'VPS Hosting',
					items: [
						{ label: 'Overview', slug: 'vps' },
						{ label: 'Getting Started', slug: 'vps/getting-started' },
					],
				},
				{
					label: 'Billing & Account',
					items: [
						{ label: 'Overview', slug: 'billing' },
						{ label: 'Managing Your Account', slug: 'billing/managing-your-account' },
					],
				},
			],
		}),
		sitemap(),
	],
});
