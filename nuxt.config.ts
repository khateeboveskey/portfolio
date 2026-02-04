// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
        },
      ],
    },
  },
  fonts: {
    families: [
      {
        name: 'Funnel Display Variable',
        src: '/fonts/FunnelDisplay-VariableFont_wght.woff2',
      },
    ],
  },
  ui: {
    colorMode: false,
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'khateeboveskey',
      repo: 'portfolio',
      branch: 'main',
    },
  },
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true,
      // Recommended for Cloudflare Pages route matching
      autoSubfolderIndex: false,
    },
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-marquee',
    '@nuxt/content',
    'nuxt-studio',
  ],
});
