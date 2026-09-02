// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  site: {
    url: 'https://khateeb.me',
    name: "Khateeb's Portfolio",
    description:
      'A.Rahman Al-Khateeb (Khateeb) — Fullstack Developer & Technical Trainer. Vue, Nuxt, TypeScript, and Laravel projects, articles, and experience.',
    defaultLocale: 'en',
    indexable: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
        },
      ],
      meta: [{ name: 'format-detection', content: 'telephone=no' }],
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

  nitro: {
    externals: {
      inline: ['unhead'],
    },
    prerender: {
      routes: ['/', '/sitemap.xml', '/robots.txt'],
      crawlLinks: true,
      autoSubfolderIndex: false,
      // Cap parallelism so each satori OG-image render gets enough CPU to
      // finish well under the render timeout instead of starving under load.
      concurrency: 3,
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
    '@nuxtjs/seo',
  ],

  // @nuxtjs/seo bundles: site-config, sitemap, robots, schema-org,
  // og-image, seo-utils, and link-checker. Configure each below.

  sitemap: {
    autoLastmod: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
    },
  },

  robots: {
    sitemap: '/sitemap.xml',
  },

  ogImage: {
    defaults: {
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
      width: 1200,
      height: 630,
    },
    // Default is 15s; satori renders can exceed it during a full prerender
    // sweep and 408, failing the build. Give them headroom.
    security: {
      renderTimeout: 60_000,
    },
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'A.Rahman S. Al-Khateeb',
      alternateName: 'Khateeb',
      url: 'https://khateeb.me',
      image: 'https://khateeb.me/imgs/me.png',
      jobTitle: 'Fullstack Developer',
      email: 'khateeboveskey@gmail.com',
      nationality: 'Yemeni',
      sameAs: [
        'https://github.com/khateeboveskey',
        'https://www.linkedin.com/in/khateeb404',
        'https://twitter.com/khateeb404',
        'https://www.instagram.com/khateeb404',
        'https://www.facebook.com/khateeboveskey',
        'https://www.youtube.com/@khateebedia',
      ],
    },
  },

  seo: {
    meta: {
      author: 'A.Rahman S. Al-Khateeb',
      colorScheme: 'light dark',
      themeColor: [
        { content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { content: '#000000', media: '(prefers-color-scheme: dark)' },
      ],
      twitterCard: 'summary_large_image',
      twitterCreator: '@khateeb404',
      twitterSite: '@khateeb404',
      ogSiteName: "Khateeb's Portfolio",
      ogLocale: 'en_US',
      ogType: 'website',
    },
  },

  linkChecker: {
    enabled: false,
  },

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
