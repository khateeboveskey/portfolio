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
    {
      name: 'description',
      content: 'Crafting digital experiences with passion and precision.',
    },
    {
      name: 'keywords',
      content:
        'web development, software engineering, portfolio, projects, Abdulrahman Al-Khateeb',
    },
  ],
  titleTemplate: '%s | Khateeb',
});
</script>
