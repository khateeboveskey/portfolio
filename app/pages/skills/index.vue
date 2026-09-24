<template>
  <div class="px-4 pb-16 md:px-8 md:pb-24 lg:px-16 xl:px-32">
    <UiSectionHeader as="h1" subtitle="Tools, technologies, and traits">
      Skills
    </UiSectionHeader>

    <section aria-labelledby="hard-skills" class="mb-10 md:mb-16">
      <h2 id="hard-skills" class="text-xl font-bold md:text-2xl">
        Hard Skills
      </h2>
      <ul
        v-if="data?.hard?.length"
        class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-6 lg:grid-cols-4"
      >
        <li v-for="skill in data.hard" :key="skill.name">
          <NuxtLink
            :to="`/skills/${slugify(skill.name)}`"
            class="group flex items-center gap-3 border-2 border-default p-3 transition-colors hover:bg-inverted hover:text-inverted"
          >
            <UIcon :name="skill.icon" class="size-6 shrink-0" />
            <span class="font-medium">{{ skill.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section aria-labelledby="soft-skills">
      <h2 id="soft-skills" class="text-xl font-bold md:text-2xl">
        Soft Skills
      </h2>
      <ul v-if="data?.soft?.length" class="mt-4 flex flex-wrap gap-2 md:mt-6">
        <li
          v-for="s in data.soft"
          :key="s"
          class="border border-default px-3 py-1 text-sm"
        >
          {{ s }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data } = await useSkills();

const title = 'Skills';
const description =
  'Hard and soft skills of A.Rahman Al-Khateeb — Vue, Nuxt, TypeScript, Laravel, Tailwind, Pinia, and more, plus communication, teaching, and team collaboration.';

useSeoMeta({
  title,
  ogTitle: 'Skills — Khateeb',
  description,
  ogDescription: description,
  ogType: 'profile',
  twitterTitle: 'Skills — Khateeb',
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'Skills',
  subtitle: 'Tools, technologies & traits',
  badge: 'Profile',
});

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    name: 'Skills',
    description,
  }),
  defineItemList({
    itemListElement:
      data.value?.hard?.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/skills/${slugify(s.name)}`,
        name: s.name,
      })) ?? [],
  }),
]);
</script>
