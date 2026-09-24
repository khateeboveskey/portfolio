<template>
  <article class="px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:px-16 xl:px-32">
    <div class="max-w-4xl">
      <UiArrowLink to="/experience" back>Back to experience</UiArrowLink>

      <template v-if="item">
        <header class="mt-6 border-b-2 border-default pb-6">
          <p
            class="text-primary text-sm font-medium tracking-wider uppercase md:text-base"
          >
            {{ item.category }} &middot;
            {{ formatExperiencePeriod(item.startDate, item.endDate) }}
          </p>
          <h1 class="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {{ item.position }}
          </h1>
          <p class="mt-4 text-xl">{{ item.company }}</p>
        </header>

        <p v-if="item.description" class="mt-6 text-lg">
          {{ item.description }}
        </p>

        <h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Achievements</h2>
        <ul class="list-disc space-y-2 pl-6">
          <li v-for="(a, i) in item.achievements" :key="i">{{ a }}</li>
        </ul>

        <div v-if="item.body" class="mt-8 whitespace-pre-line">
          {{ item.body }}
        </div>

        <UiExternalLinkButton
          v-if="item.website"
          :href="item.website"
          class="mt-8"
        >
          Visit {{ item.company }}
        </UiExternalLinkButton>
      </template>

      <p v-else class="mt-8">Experience entry not found.</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: item } = await useAsyncData(
  () => `experience-${slug.value}`,
  async () => {
    const all = await queryCollection('experience').all();
    return all.find((x) => stemToSlug(x.stem) === slug.value) ?? null;
  },
);

const title = computed(() =>
  item.value ? `${item.value.position} — ${item.value.company}` : 'Experience',
);
const description = computed(() => {
  if (!item.value)
    return 'Professional experience entry by A.Rahman Al-Khateeb.';
  if (item.value.description?.trim()) return item.value.description;
  const head = `${item.value.position} at ${item.value.company} (${formatExperiencePeriod(item.value.startDate, item.value.endDate)}) — ${item.value.category}.`;
  const first = item.value.achievements?.[0];
  return first ? `${head} ${first}` : head;
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'profile',
  twitterTitle: title,
  twitterDescription: description,
});

defineOgImage('Page', {
  title: () => item.value?.position ?? 'Experience',
  subtitle: () =>
    item.value
      ? `${item.value.company} · ${formatExperiencePeriod(item.value.startDate, item.value.endDate)}`
      : 'Experience',
  badge: () => item.value?.category ?? 'Experience',
});

useSchemaOrg([
  defineWebPage({
    name: title,
    description,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Experience', item: '/experience' },
      { name: title },
    ],
  }),
]);
</script>
