<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout class="bg-default text-default overflow-x-hidden">
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup lang="ts">
const description =
  'A.Rahman Al-Khateeb (Khateeb) — Fullstack Developer & Technical Trainer. Vue, Nuxt, TypeScript, and Laravel projects, articles, and experience.';

useHead({
  titleTemplate: (title) =>
    title && title !== "Khateeb's Portfolio"
      ? `${title} | Khateeb's Portfolio`
      : "Khateeb's Portfolio — Fullstack Developer",
  meta: [
    { name: 'generator', content: 'Nuxt' },
    { name: 'application-name', content: "Khateeb's Portfolio" },
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
