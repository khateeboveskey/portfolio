<template>
  <NuxtLink
    :to="props.to"
    class="group hover:bg-inverted hover:text-inverted inline-flex min-h-11 items-center gap-3 border-2 border-default px-6 py-3 text-sm font-bold tracking-widest uppercase transition-colors"
  >
    <slot />
    <span
      aria-hidden="true"
      class="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
      >&rarr;</span
    >
  </NuxtLink>
</template>

<script setup lang="ts">
// "Show all …" call to action under home sections: the site's bordered,
// invert-on-hover button language (cards, ExternalLinkButton).
const props = defineProps<{ to: string }>();
</script>
