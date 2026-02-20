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
				replacesTitle: true,
			},
			defaultLocale: 'en',
			disable404Route: false,
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/evlbox/docs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/rWF4hJhbaM' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/evlbox.com' },
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
					label: 'Quick Links',
					items: [
						{ label: 'Game Panel (Nitro)', link: 'https://nitro.evlbox.com', attrs: { target: '_blank' } },
						{ label: 'VPS Panel (VirtFusion)', link: 'https://vf.evlbox.com', attrs: { target: '_blank' } },
						{ label: 'Help & Support', link: 'https://evlbox.com/help', attrs: { target: '_blank' } },
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: 'getting-started' },
						{
							label: 'Nitro Panel',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'getting-started/nitro-panel' },
								{ label: 'Adding Ports', slug: 'getting-started/nitro-panel/port-configuration' },
								{ label: 'Creating Backups', slug: 'getting-started/nitro-panel/creating-backups' },
								{ label: 'Setup a Subdomain', slug: 'getting-started/nitro-panel/using-subdomains' },
								{ label: 'Share Access (Subusers)', slug: 'getting-started/nitro-panel/subusers' },
							],
						},
						{
							label: 'Managed Nitro',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'getting-started/managed-nitro' },
								{ label: 'Supported Games', slug: 'getting-started/managed-nitro/supported-games' },
							],
						},
						{ label: 'Server Infrastructure', slug: 'getting-started/server-infrastructure' },
					],
				},
				{
					label: 'Game Servers',
					items: [
						{ label: 'Overview', slug: 'game-servers' },
						{
							label: 'Minecraft',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/minecraft' },
								{ label: 'How to Connect', slug: 'game-servers/minecraft/how-to-connect' },
								{ label: 'Install Modpacks', slug: 'game-servers/minecraft/modpacks' },
								{ label: 'Change Server Version', slug: 'game-servers/minecraft/change-server-version' },
								{ label: 'Optimize Performance', slug: 'game-servers/minecraft/optimize-your-minecraft-server-maximum-performance' },
							],
						},
						{
							label: 'Palworld',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/palworld' },
								{ label: 'Connect to Server', slug: 'game-servers/palworld/connect-to-server' },
								{ label: 'Server Name & Password', slug: 'game-servers/palworld/server-name-and-password' },
								{ label: 'Server Settings', slug: 'game-servers/palworld/server-settings' },
								{ label: 'Admin Commands', slug: 'game-servers/palworld/admin-commands' },
								{ label: 'Delete & Archive Saves', slug: 'game-servers/palworld/delete-and-archive-saves' },
								{ label: 'Change Server Specs', slug: 'game-servers/palworld/change-server-specs' },
								{ label: 'Migrate Save Data', slug: 'game-servers/palworld/migrate-save-data' },
								{ label: 'Restore Saves', slug: 'game-servers/palworld/restore-saves' },
								{ label: 'Automatic Updates', slug: 'game-servers/palworld/update-server' },
								{ label: 'Scheduled Starts', slug: 'game-servers/palworld/scheduled-start' },
								{ label: 'RCON Commands', slug: 'game-servers/palworld/rcon-commands' },
								{ label: 'Xbox Server', slug: 'game-servers/palworld/xbox-server' },
							],
						},
						{
							label: 'Enshrouded',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/enshrouded' },
								{ label: 'How to Connect', slug: 'game-servers/enshrouded/how-to-connect' },
								{ label: 'Quest Progression', slug: 'game-servers/enshrouded/quest-progression' },
							],
						},
						{
							label: 'Foundry',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/foundry' },
								{ label: 'How to Connect', slug: 'game-servers/foundry/how-to-connect-to-foundry' },
								{ label: 'Add Mods', slug: 'game-servers/foundry/how-to-add-mods' },
								{ label: 'Mod Syncing Collections', slug: 'game-servers/foundry/create-collection-for-mod-syncing' },
								{ label: 'Manage Backups', slug: 'game-servers/foundry/manage-automated-backups' },
								{ label: 'Transfer Singleplayer Save', slug: 'game-servers/foundry/transfer-singleplayer-save' },
							],
						},
						{
							label: 'Satisfactory',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/satisfactory' },
								{ label: 'First Time Setup', slug: 'game-servers/satisfactory/first-time-setup' },
								{ label: 'How to Join', slug: 'game-servers/satisfactory/how-to-join' },
								{ label: 'Manage Saves', slug: 'game-servers/satisfactory/manage-saves' },
								{ label: 'Mod Setup', slug: 'game-servers/satisfactory/modsetup' },
								{ label: 'Satisfactory 1.0', slug: 'game-servers/satisfactory/satisfactory-1' },
								{ label: 'Switch to Experimental', slug: 'game-servers/satisfactory/switch-to-experimental' },
								{ label: 'Unclaim Server', slug: 'game-servers/satisfactory/unclaim-server' },
								{ label: 'Upload Singleplayer Save', slug: 'game-servers/satisfactory/upload-singleplayer-save' },
							],
						},
						{
							label: 'Project Zomboid',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/project-zomboid' },
								{ label: 'How to Connect', slug: 'game-servers/project-zomboid/how-to-connect' },
								{ label: 'Set Server Password', slug: 'game-servers/project-zomboid/set-server-password' },
								{ label: 'Admin Permissions', slug: 'game-servers/project-zomboid/admin-permissions' },
								{ label: 'Admin Panel', slug: 'game-servers/project-zomboid/admin-panel' },
								{ label: 'Install Mods', slug: 'game-servers/project-zomboid/mod-installation' },
								{ label: 'Troubleshooting Mods', slug: 'game-servers/project-zomboid/troubleshooting-mods' },
								{ label: 'Upload Singleplayer World', slug: 'game-servers/project-zomboid/singleplayer-copy' },
							],
						},
						{
							label: 'Factorio',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/factorio' },
								{ label: 'Connect to Server', slug: 'game-servers/factorio/connect-to-server' },
								{ label: 'Admin Access', slug: 'game-servers/factorio/admin' },
								{ label: 'Install Mods', slug: 'game-servers/factorio/intall-mods' },
								{ label: 'Upload Save', slug: 'game-servers/factorio/upload-save' },
							],
						},
						{
							label: 'Sons of the Forest',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/sons-of-the-forest' },
								{ label: 'Connect to Server', slug: 'game-servers/sons-of-the-forest/connect-to-server' },
								{ label: 'Manage Admins', slug: 'game-servers/sons-of-the-forest/manage-admins' },
								{ label: 'Upload Saves', slug: 'game-servers/sons-of-the-forest/upload-saves' },
							],
						},
						{
							label: 'Hytale',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/hytale' },
								{ label: 'Download & Install', slug: 'game-servers/hytale/download-install-hytale-server' },
							],
						},
						{
							label: 'Tower Unite',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'game-servers/towerunite' },
								{ label: 'Setup Condo Server', slug: 'game-servers/towerunite/how-to-setup-condo' },
								{ label: 'Known Issues', slug: 'game-servers/towerunite/known-issues' },
							],
						},
					],
				},
				{
					label: 'VPS Hosting',
					items: [
						{ label: 'Overview', slug: 'vps' },
						{ label: 'Reinstall OS', slug: 'vps/os-reinstall' },
						{ label: 'Reset Root Password', slug: 'vps/root-password-reset' },
						{ label: 'SSH Keys', slug: 'vps/ssh-keys' },
						{ label: 'Snapshot Backups', slug: 'vps/snapshot-backups' },
						{ label: 'MFA Setup', slug: 'vps/mfa-setup' },
					],
				},
				{
					label: 'Billing & Account',
					items: [
						{ label: 'Overview', slug: 'billing' },
					],
				},
			],
		}),
		sitemap(),
	],
});
