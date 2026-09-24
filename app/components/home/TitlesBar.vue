<template>
  <div
    class="z-20 -mt-20 md:-mt-16 grid h-[calc(100vh/5)] w-screen place-items-center overflow-hidden sm:overflow-visible"
  >
    <div
      class="bg-inverted text-inverted w-[calc(100vw+100px)] -translate-x-10 -rotate-3 overflow-hidden py-4 text-base uppercase sm:py-6 sm:text-lg md:py-8 md:text-xl"
    >
      <div
        class="whitespace-nowrap"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
        style="transition-duration: 0ms"
      >
        <!-- The list repeats to fill the strip; only the first pass is exposed
        to assistive tech. -->
        <span
          v-for="(title, index) in duplicatedTitles"
          :key="index"
          :aria-hidden="index >= titles.length ? 'true' : undefined"
        >
          {{ title }}
          <AppLogo
            class="mx-4 inline-block h-4 -translate-y-0.5 sm:mx-6 sm:h-5 md:mx-10 md:h-6"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const titles = ['Web Developer', 'UI/UX Designer', 'Content Creator', 'Author'];
const scrollPosition = ref(0);
const duplicatedTitles = computed(() => [...titles, ...titles, ...titles]);

// One style write per frame at most, from a passive listener, so scrolling
// never waits on this handler.
let frame = 0;
const updatePosition = () => {
  frame = 0;
  const position = -window.scrollY * 0.5;
  scrollPosition.value = position <= -1000 ? 0 : position;
};
const handleScroll = () => {
  if (!frame) frame = requestAnimationFrame(updatePosition);
};

onMounted(() => {
  // Scroll-linked motion is decorative; skip it for reduced-motion users.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  updatePosition();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  cancelAnimationFrame(frame);
});
</script>
