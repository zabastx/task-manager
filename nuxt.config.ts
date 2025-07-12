// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils', '@nuxt/ui', '@nuxtjs/supabase', '@nuxt/eslint'],
  devtools: { enabled: true },
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
  build: {
    analyze: true,
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  eslint: {
    config: {
      stylistic: true
    },
  },
  icon: {
    customCollections: [{ dir: './assets/icon', prefix: 'custom' }],
  },
  supabase: {
    redirect: false,
  },
})
