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
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-marquee',
    'nuxt-svgo',
  ],
});
