<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="font-sans bg-accent-background dark:bg-gray-900 overflow-x-hidden min-h-screen">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead({
  meta: [
    { name: 'author', content: 'Abdulrahman Al-Khateeb' },
    { name: 'description', content: 'Crafting digital experiences with passion and precision.' },
    { name: 'keywords', content: 'web development, software engineering, portfolio, projects, Abdulrahman Al-Khateeb' }
  ],
  titleTemplate: '%s | Khateeb',
  link: [
    { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' },
  ],
  htmlAttrs: {
    dir: computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
  }
});
</script>