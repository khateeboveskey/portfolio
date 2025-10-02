// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-svgo',
    'nuxt-lucide-icons',
    'nuxt-marquee',
  ],

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'one-dark-pro',
        }
      }
    },
  },

  lucide: {
    namePrefix: 'Icon'
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
})