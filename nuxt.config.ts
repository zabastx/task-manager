// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/test-utils',
		'@nuxt/ui',
		'@nuxtjs/supabase',
		'@nuxt/eslint',
		'@nuxtjs/seo'
	],
	app: {
		head: {
			title: 'Task Manager',
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '96x96',
					href: '/favicon-96x96.png',
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg',
				},
				{
					rel: 'shortcut icon',
					href: '/favicon.ico',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest',
				},
			],
			meta: [
				{
					name: 'apple-mobile-web-app-title',
					content: 'Task Manager',
				},
			],
		},
	},
	css: ['~/assets/css/main.css'],
	site: {
		indexable: false,
	},
	build: {
		analyze: true,
	},
	compatibilityDate: '2025-05-15',
	nitro: {
		preset: 'bun',
		experimental: {
			websocket: true,
			openAPI: true
		},
		compressPublicAssets: {
			brotli: true,
			gzip: true
		}
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab'
			}
		},
	},
	icon: {
		customCollections: [{ dir: './app/assets/icon', prefix: 'custom' }],
	},
	robots: {
		blockAiBots: true,
		blockNonSeoBots: true,
		robotsTxt: true
	},
	supabase: {
		redirect: false,
	},
})
