<template>
  <div>
    <LayoutAppHeader />
    <slot />
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
import { EXTERNAL_RESOURCES } from '~/constants';

useHead({
  meta: [
    { name: 'author', content: 'Abdulrahman Al-Khateeb' },
    { name: 'description', content: 'Crafting digital experiences with passion and precision.' },
    { name: 'keywords', content: 'web development, software engineering, portfolio, projects, Abdulrahman Al-Khateeb' }
  ],
  titleTemplate: '%s | Khateeb',
  link: [
    EXTERNAL_RESOURCES.DEVICONS
  ]
});
</script>