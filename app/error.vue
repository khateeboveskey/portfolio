<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

useHead({
  title: 'Error' + (props.error?.statusCode ? ` ${props.error.statusCode}` : ''),
})
</script>

<template>
  <NuxtLayout class="font-sans bg-accent-background min-h-screen w-full">
    <div class="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div class="text-center max-w-2xl mx-auto py-8 px-4">
        <h1 class="text-[clamp(7rem,15vw,12rem)] font-extrabold tracking-wider leading-tight mb-4">
          {{ error?.statusCode || '404' }}
        </h1>
        <p class="text-[clamp(1.25rem,4vw,2rem)] mb-8 opacity-90">
          {{ error?.message || 'Page not found' }}
        </p>
        <NuxtLink class="inline-block text-white bg-accent hover:opacity-90 transition-opacity duration-300 px-6 py-3 md:text-lg" to="/">
          Return to Homepage
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>
