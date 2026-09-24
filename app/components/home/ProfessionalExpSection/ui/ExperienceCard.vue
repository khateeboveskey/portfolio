<template>
  <NuxtLink
    :to="props.to ?? props.companyUrl"
    :target="props.to ? undefined : '_blank'"
    class="hover:bg-inverted hover:text-inverted group flex flex-col items-start justify-between gap-4 border-2 p-4 py-6 transition-colors sm:px-6 sm:py-8 md:px-8 md:py-10 lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:py-12"
  >
    <div class="flex flex-row gap-3 sm:gap-4 md:gap-5">
      <!-- Number -->
      <span
        aria-hidden="true"
        class="bg-inverted text-inverted group-hover:bg-primary grid size-10 shrink-0 place-items-center text-base font-semibold transition-colors sm:size-12 sm:text-lg md:size-14 md:text-xl"
      >
        {{ props.order }}
      </span>
      <!-- Job Titles -->
      <div>
        <component
          :is="`h${props.headingLevel}`"
          class="text-lg font-bold sm:text-xl md:text-2xl"
        >
          {{ props.jobTitle }}
        </component>
        <p class="text-sm sm:text-base">{{ props.company }}</p>
        <p v-if="props.period" class="mt-1 text-sm opacity-70">
          {{ props.period }}
        </p>
      </div>
    </div>
    <!-- Year -->
    <div
      class="flex w-full flex-row justify-between gap-2 text-base font-medium sm:gap-3 sm:text-lg lg:w-auto lg:shrink-0 lg:gap-4"
    >
      <span class="tracking-wider uppercase">{{ props.category }}</span>
      <span class="text-primary group-hover:text-brand-400">
        {{ props.year }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface ExperienceCardProps {
  jobTitle: string;
  company: string;
  category: string;
  companyUrl?: string;
  year: string | number;
  order: number;
  to?: string;
  /** Full date range, shown on the experience page (e.g. "Mar 2025 – Present"). */
  period?: string;
  /** 3 under a home-page section `h2`, 2 under a list page's `h1`. */
  headingLevel?: 2 | 3;
}

const props = withDefaults(defineProps<ExperienceCardProps>(), {
  companyUrl: undefined,
  to: undefined,
  period: undefined,
  headingLevel: 3,
});
</script>
