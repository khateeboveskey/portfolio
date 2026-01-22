<template>
  <div
    class="mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16"
  >
    <div
      v-for="(si, index) in snapInfoGroup"
      :key="index"
      ref="snapRefs"
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
          :value="visible[index] ? Number(si.content) : 0"
        />
        <template #fallback>
          <span
            class="mb-3 inline-block text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            +0
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

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('year', 'DESC').all(),
);

const experienceYears = computed(() => {
  if (!projects.value || projects.value.length === 0) return 0;
  // Assuming ordered by path, which corresponds to original ID order
  return (
    new Date().getFullYear() -
    (projects.value[projects.value.length - 1]?.year ??
      new Date().getFullYear())
  );
});

const snapInfoGroup = computed(() => [
  {
    title: 'Projects',
    content: projects.value?.length ?? 0,
  },
  {
    title: 'Years Experience',
    content: experienceYears.value,
  },
  {
    title: 'Student Trained',
    content: '130',
  },
]);

const snapRefs = ref<HTMLDivElement[]>([]);
const visible = ref<boolean[]>(snapInfoGroup.value.map(() => false));

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = snapRefs.value.indexOf(entry.target as HTMLDivElement);
        if (entry.isIntersecting && index !== -1) {
          visible.value[index] = true;
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 1 }, // Trigger when 10% of the element is visible
  );

  snapRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
