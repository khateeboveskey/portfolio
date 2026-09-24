<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- No Nuxt UI App wrapper: the site uses no toasts, tooltips, or
    overlays, and its providers added ~40 KB (brotli) of runtime to every page
    plus an empty "Notifications" region. Re-add it before using any of them. -->
    <NuxtLayout class="bg-default text-default overflow-x-hidden">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const description =
  'A.Rahman Al-Khateeb (Khateeb) — Fullstack Developer & Technical Trainer. Vue, Nuxt, TypeScript, and Laravel projects, articles, and experience.';

const siteName = "Khateeb's Portfolio";

useHead({
  // Titles that already carry the site name (e.g. the home page) are used
  // as-is instead of getting a second "| Khateeb's Portfolio" suffix.
  titleTemplate: (title) => {
    if (!title || title === siteName)
      return `${siteName} — Fullstack Developer`;
    return title.includes(siteName) ? title : `${title} | ${siteName}`;
  },
  meta: [
    { name: 'generator', content: 'Nuxt' },
    { name: 'application-name', content: siteName },
    { name: 'apple-mobile-web-app-title', content: 'Khateeb' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
  ],
});

useSeoMeta({
  description,
  robots:
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
});

defineOgImage('Default');
</script>
