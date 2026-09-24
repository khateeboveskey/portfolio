<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  title:
    'Error' + (props.error?.statusCode ? ` ${props.error.statusCode}` : ''),
});
</script>

<template>
  <NuxtLayout class="min-h-screen w-full">
    <div
      class="flex min-h-[60vh] items-center justify-center px-4 py-16 md:px-8"
    >
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="mb-4 text-[clamp(7rem,15vw,12rem)] leading-tight font-extrabold tracking-wider"
        >
          {{ error?.statusCode || '404' }}
        </h1>
        <p class="mb-8 text-[clamp(1.25rem,4vw,2rem)] opacity-90">
          {{ error?.message || 'Page not found' }}
        </p>
        <UiArrowLink to="/" back>Return to homepage</UiArrowLink>
      </div>
    </div>
  </NuxtLayout>
</template>
