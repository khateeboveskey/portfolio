<template>
  <div>
    <div class="print:hidden">
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
    <Resume class="hidden print:block" />
  </div>
</template>

<script setup lang="ts">
const { data } = await usePersonalInfo();

useHead({
  meta: [
    { name: 'author', content: data.value?.personalInfo.name },
    {
      name: 'description',
      content: data.value?.objective || 'Portfolio of Abdulrahman Al-Khateeb',
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
