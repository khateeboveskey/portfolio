<template>
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden aspect-video"
  >
    <NuxtImg
      v-if="logo"
      :src="`/imgs/projects-logos/${logo}`"
      :alt="`${name} logo`"
      quality="80"
      format="webp"
      class="mb-3 h-10 w-auto object-contain drop-shadow-md sm:h-12"
    />

    <!-- Browser frame -->
    <div
      class="w-full overflow-hidden rounded-t-lg bg-white shadow-2xl ring-1 ring-black/10"
    >
      <div
        class="flex items-center gap-1.5 border-b border-black/10 bg-neutral-100 px-3 py-2"
      >
        <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span class="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div
          class="ml-2 h-4 flex-1 truncate rounded bg-white/70 px-2 text-[10px] leading-4 text-black/60 ring-1 ring-black/5"
        >
          {{ url }}
        </div>
      </div>
      <NuxtImg
        :src="`/imgs/projects-screenshots/${screenshot}`"
        :alt="`${name} screenshot`"
        quality="60"
        format="webp"
        class="block h-auto w-full object-cover object-top"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  screenshot: string;
  logo?: string;
  url?: string;
}>();
</script>
