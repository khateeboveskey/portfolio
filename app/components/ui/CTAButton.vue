<template>
  <div class="flex">
    <div
      v-if="props.text"
      class="border-1 border-primary px-4 flex items-center text-primary"
    >
      {{ props.text }}
    </div>
    <UButton size="xl" as="a" to="mailto:khateeboveskey@gmail.com">
      Let's talk
    </UButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string;
}>();
</script>
