<template>
  <div
    :class="props.as === 'h1' ? 'mt-12 md:mt-20' : 'mt-24 md:mt-44'"
    class="container mx-auto mb-8 space-y-1 px-4 text-center md:mb-16 md:space-y-3"
  >
    <AppLogo class="mx-auto mb-4 w-8 md:w-10" />
    <component
      :is="props.as"
      class="text-2xl leading-tight font-black md:text-3xl lg:text-4xl"
    >
      <slot />
    </component>
    <span
      v-if="props.subtitle"
      class="text-sm font-medium tracking-widest uppercase md:text-base text-dimmed"
    >
      {{ props.subtitle }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    subtitle?: string;
    /** `h1` when the header titles a whole page (list pages), `h2` for home sections. */
    as?: 'h1' | 'h2';
  }>(),
  { subtitle: undefined, as: 'h2' },
);
</script>
