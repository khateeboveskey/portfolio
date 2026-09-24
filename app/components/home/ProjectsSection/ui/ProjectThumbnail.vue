<template>
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden aspect-video"
  >
    <NuxtImg
      v-if="logo"
      :src="`/imgs/projects-logos/${logo}`"
      alt=""
      quality="80"
      format="webp"
      height="48"
      loading="lazy"
      class="mb-3 h-10 w-auto object-contain drop-shadow-md sm:h-12"
    />

    <!-- Browser frame -->
    <div
      class="w-full overflow-hidden rounded-t-lg bg-white shadow-2xl ring-1 ring-black/10"
    >
      <div
        class="flex items-center gap-1.5 border-b border-black/10 bg-neutral-100 px-3 py-2"
        aria-hidden="true"
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
      <!-- The frame only ever shows the top of the page, so the image is
      cropped to 16:9 from the top at card size instead of shipping the
      full-length screenshot (up to 5760×7200) into a ~400px card. -->
      <NuxtImg
        :src="`/imgs/projects-screenshots/${screenshot}`"
        :alt="`${name} screenshot`"
        width="640"
        height="360"
        fit="cover"
        :modifiers="{ position: 'top' }"
        sizes="xs:100vw sm:100vw md:50vw lg:33vw xl:33vw"
        quality="60"
        format="webp"
        :loading="priority ? 'eager' : 'lazy'"
        :fetchpriority="priority ? 'high' : undefined"
        decoding="async"
        class="block h-auto w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  screenshot: string;
  logo?: string;
  url?: string | null;
  /** Above-the-fold cards load eagerly with high priority (LCP candidates). */
  priority?: boolean;
}>();
</script>
