<template>
  <NuxtLink
    :to="`/projects/${stemToSlug(props.project.stem)}`"
    class="group flex flex-col"
  >
    <div class="relative overflow-hidden">
      <HomeProjectsSectionUiProjectThumbnail
        :name="props.project.name"
        :screenshot="props.project.screenshot"
        :logo="props.project.logo"
        :url="props.project.url"
        :priority="props.priority"
      />
    </div>
    <div
      class="p-3 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-6 md:gap-8 group-hover:bg-inverted group-hover:text-inverted border-2 flex-1 justify-between border-default transition-colors"
    >
      <div class="flex items-start justify-between">
        <component
          :is="`h${props.headingLevel}`"
          class="line-clamp-2 text-lg font-bold sm:text-xl md:text-2xl"
        >
          {{ props.project.name }}
        </component>
        <span class="text-primary ml-2 text-sm whitespace-nowrap sm:text-base">
          {{ props.project.year }}
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="text-primary w-fit px-2 py-1 text-sm sm:text-base">
          {{ props.project.type }}
        </div>
        <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
          <li v-for="skill in props.project.stack" :key="skill">
            <UIcon
              :name="getSkillIcon(skill)"
              class="text-default group-hover:text-inverted size-5 sm:size-6"
            />
            <span class="sr-only">{{ skill }}</span>
          </li>
        </ul>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProjectsCollectionItem } from '@nuxt/content';

type ProjectCardData = Pick<
  ProjectsCollectionItem,
  (typeof PROJECT_CARD_FIELDS)[number]
>;

const props = defineProps({
  project: {
    type: Object as PropType<ProjectCardData>,
    required: true,
  },
  /** First-row cards on /projects are LCP candidates: load them eagerly. */
  priority: Boolean,
  /** 3 under a home-page section `h2`, 2 under a list page's `h1`. */
  headingLevel: {
    type: Number as PropType<2 | 3>,
    default: 3,
  },
});

const { data: skills } = await useSkills();

// Stack entries that aren't listed skills, mapped to the same full-colour
// `logos` set the skill icons use, so a card never mixes icon styles.
const STACK_ICON_FALLBACKS: Record<string, string> = {
  unocss: 'logos:unocss',
  html5: 'logos:html-5',
  css3: 'logos:css-3',
  csharp: 'logos:c-sharp',
};

// "TailwindCSS" in a project's stack is the "Tailwind CSS" skill.
const normalize = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, '');

function getSkillIcon(name: string): string {
  const key = normalize(name);
  return (
    skills.value?.hard.find((skill) => normalize(skill.name) === key)?.icon ??
    STACK_ICON_FALLBACKS[key] ??
    `simple-icons:${key}`
  );
}
</script>
