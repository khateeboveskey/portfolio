<template>
  <UContainer class="py-12">
    <div class="mb-8">
      <NuxtLink to="/" class="text-sm text-muted hover:underline"
        >&larr; Back to home</NuxtLink
      >
      <h1 class="mt-2 text-3xl font-bold sm:text-4xl">Skills</h1>
      <p class="mt-2 text-muted">Tools, technologies, and traits.</p>
    </div>

    <section class="mb-10">
      <h2 class="text-xl font-bold">Hard Skills</h2>
      <ul
        v-if="data?.hard?.length"
        class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        <li v-for="skill in data.hard" :key="skill.name">
          <NuxtLink
            :to="`/skills/${slugify(skill.name)}`"
            class="group flex items-center gap-3 border-2 border-default p-3 transition hover:bg-inverted hover:text-inverted"
          >
            <i :class="skill.icon" class="text-2xl" />
            <span class="font-medium">{{ skill.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl font-bold">Soft Skills</h2>
      <ul v-if="data?.soft?.length" class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="s in data.soft"
          :key="s"
          class="border border-default px-3 py-1 text-sm"
        >
          {{ s }}
        </li>
      </ul>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('skills', () =>
  queryCollection('skills').first(),
);

const title = 'Skills';
const description =
  'Hard and soft skills of A.Rahman Al-Khateeb — Vue, Nuxt, TypeScript, Laravel, Tailwind, Pinia, and more, plus communication, teaching, and team collaboration.';

useSeoMeta({
  title,
  ogTitle: 'Skills — Khateeb',
  description,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: '/skills',
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
