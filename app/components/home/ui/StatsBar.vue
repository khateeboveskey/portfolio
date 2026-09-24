<template>
  <div
    class="mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16"
  >
    <div
      v-for="(si, index) in snapInfoGroup"
      :key="index"
      ref="snapRefs"
      :data-index="index"
      class="even:bg-inverted even:text-inverted grid place-items-center p-3 sm:p-4 md:p-5"
    >
      <ClientOnly>
        <NumberFlow
          :spin-timing="{
            duration: 1500,
            easing: 'ease-in-out',
          }"
          class="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          prefix="+"
          locales="en-US"
          :format="NUMBER_FORMAT"
          :value="visible[index] ? si.content : 0"
        />
        <!-- The prerendered HTML carries the real figures for crawlers, no-JS
        visitors, and screen readers; the count-up only runs client-side. -->
        <template #fallback>
          <span
            class="mb-3 inline-block text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            +{{ numberFormatter.format(si.content) }}
          </span>
        </template>
      </ClientOnly>
      <span
        class="text-center text-sm tracking-wider uppercase sm:text-base md:text-lg lg:text-xl"
      >
        {{ si.title }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberFlow from '@number-flow/vue';

const NUMBER_FORMAT = { maximumFractionDigits: 1 } as const;
const numberFormatter = new Intl.NumberFormat('en-US', NUMBER_FORMAT);

const { data: projectCount } = await useAsyncData('projects:count', () =>
  queryCollection('projects').count(),
);

const { years: experienceYears } = await useExperienceYears();

const snapInfoGroup = computed(() => [
  {
    title: 'Projects',
    content: projectCount.value ?? 0,
  },
  {
    title: 'Years Experience',
    content: experienceYears.value,
  },
  {
    title: 'Students Trained',
    content: 130,
  },
]);

const snapRefs = ref<HTMLDivElement[]>([]);
const visible = ref<boolean[]>(snapInfoGroup.value.map(() => false));

let observer: IntersectionObserver;

const indexOf = (el: Element) => Number((el as HTMLElement).dataset.index);

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value[indexOf(entry.target)] = true;
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 1 }, // Trigger once the whole figure is on screen
  );

  snapRefs.value.forEach((el) => {
    if (!el) return;
    // Figures already on screen keep the prerendered value instead of
    // flashing back to 0; the rest count up when scrolled into view.
    const { top, bottom } = el.getBoundingClientRect();
    if (top >= 0 && bottom <= window.innerHeight) {
      visible.value[indexOf(el)] = true;
    } else {
      observer.observe(el);
    }
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
