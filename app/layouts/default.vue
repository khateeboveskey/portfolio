<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'author', content: 'Abdulrahman Al-Khateeb' },
    { name: 'description', content: 'Crafting digital experiences with passion and precision.' },
    { name: 'keywords', content: 'web development, software engineering, portfolio, projects, Abdulrahman Al-Khateeb' }
  ],
  titleTemplate: '%s | Khateeb',
  link: [
    { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' },
  ]
});
</script>