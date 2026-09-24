<template>
  <section class="px-4 pb-16 md:px-8 md:pb-24 lg:px-16 xl:px-32">
    <UiSectionHeader as="h1" subtitle="What I've Done">
      Experience
    </UiSectionHeader>
    <p v-if="!items?.length" class="text-center">No experience entries yet.</p>
    <ul class="space-y-6 sm:space-y-8 md:space-y-11">
      <li v-for="(item, index) in items" :key="item.stem">
        <HomeProfessionalExpSectionUiExperienceCard
          :job-title="item.position"
          :company="item.company"
          :company-url="item.website"
          :order="index + 1"
          :year="experienceEndLabel(item.endDate)"
          :category="item.category"
          :period="formatExperiencePeriod(item.startDate, item.endDate)"
          :to="`/experience/${stemToSlug(item.stem)}`"
          :heading-level="2"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData('experience-list', async () =>
  sortExperienceByEndDate(
    await queryCollection('experience')
      .select(...EXPERIENCE_CARD_FIELDS)
      .all(),
  ),
);

const title = 'Experience';
const description =
  "A.Rahman Al-Khateeb's professional experience — frontend, full-stack, and training roles across SaaS, charity tech, and educational organizations.";

useSeoMeta({
  title,
  ogTitle: 'Experience — Khateeb',
  description,
  ogDescription: description,
  ogType: 'profile',
  twitterTitle: 'Experience — Khateeb',
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'Experience',
  subtitle: 'Frontend, full-stack & training roles',
  badge: 'Career',
});

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    name: 'Experience',
    description,
  }),
  defineItemList({
    itemListElement:
      items.value?.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/experience/${stemToSlug(item.stem)}`,
        name: `${item.position} — ${item.company}`,
      })) ?? [],
  }),
]);
</script>
