import { readFileSync } from 'node:fs';
import { imageMeta } from 'image-meta';

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
    // Only emit theme CSS for the Nuxt UI components the app actually uses
    // instead of the whole library (206 KB -> 117 KB of CSS).
    experimental: {
      componentDetection: true,
    },
  },

  // Production only: in dev, /_nuxt/ serves unhashed Vite modules. On
  // Cloudflare Pages, Nitro writes these rules into the generated `_headers`.
  $production: {
    routeRules: {
      '/**': {
        headers: {
          'x-content-type-options': 'nosniff',
          'referrer-policy': 'strict-origin-when-cross-origin',
          'x-frame-options': 'SAMEORIGIN',
          'cross-origin-opener-policy': 'same-origin',
          'permissions-policy': 'camera=(), microphone=(), geolocation=()',
        },
      },
      // Content-hashed build output never changes under the same URL.
      '/_nuxt/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      },
      // These keep their URL when the source file is replaced, so they get
      // a week of freshness plus background revalidation instead.
      '/_ipx/**': {
        headers: {
          'cache-control':
            'public, max-age=604800, stale-while-revalidate=2592000',
        },
      },
      '/imgs/**': {
        headers: {
          'cache-control':
            'public, max-age=604800, stale-while-revalidate=2592000',
        },
      },
      '/fonts/**': {
        headers: {
          'cache-control':
            'public, max-age=604800, stale-while-revalidate=2592000',
        },
      },
    },
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
    '@nuxt/content',
    '@nuxtjs/seo',
  ],

  // @nuxtjs/seo bundles: site-config, sitemap, robots, schema-org,
  // og-image, seo-utils, and link-checker. Configure each below.

  sitemap: {
    autoLastmod: true,
    // Image discovery double-escapes the `&` in /_ipx/ URLs
    // (`w_768&amp;amp;f_webp`), which publishes broken image locations.
    discoverImages: false,
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
      // The site ships a single light theme (ui.colorMode is off), so don't
      // advertise dark support: browsers would paint dark scrollbars and
      // form controls against the light page.
      colorScheme: 'light',
      themeColor: '#f3f1ef',
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

  hooks: {
    // Record each project screenshot's pixel size so pages can reserve its
    // space: they are full-page captures up to 14,000px tall, and an unsized
    // one pushes everything below it down as it loads.
    'content:file:afterParse'({ collection, content }) {
      if (
        collection.name !== 'projects' ||
        typeof content.screenshot !== 'string'
      )
        return;
      const file = new URL(
        `./public/imgs/projects-screenshots/${content.screenshot}`,
        import.meta.url,
      );
      const { width, height } = imageMeta(readFileSync(file));
      content.screenshotWidth = width;
      content.screenshotHeight = height;
    },
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
