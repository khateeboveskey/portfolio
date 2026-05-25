<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <NuxtLink to="/experience" class="text-sm text-muted hover:underline"
      >← Back to Experience</NuxtLink
    >
    <template v-if="item">
      <h1 class="text-4xl font-bold mt-4">{{ item.position }}</h1>
      <p class="text-xl text-muted mt-2">
        {{ item.company }}
        <a
          v-if="item.website"
          :href="item.website"
          target="_blank"
          class="text-primary hover:underline ml-2 text-base"
          >↗</a
        >
      </p>
      <p class="text-sm text-muted mt-1">
        {{ item.startDate }} – {{ item.endDate }} · {{ item.category }}
      </p>

      <p v-if="item.description" class="mt-6 text-lg">
        {{ item.description }}
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-3">Achievements</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="(a, i) in item.achievements" :key="i">{{ a }}</li>
      </ul>

      <div v-if="item.body" class="mt-8 prose max-w-none whitespace-pre-line">
        {{ item.body }}
      </div>
    </template>
    <p v-else class="mt-8 text-muted">Experience entry not found.</p>
  </div>
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

const pagePath = computed(() => `/experience/${slug.value}`);

const title = computed(() =>
  item.value ? `${item.value.position} — ${item.value.company}` : 'Experience',
);
const description = computed(() => {
  if (!item.value)
    return 'Professional experience entry by A.Rahman Al-Khateeb.';
  if (item.value.description?.trim()) return item.value.description;
  const head = `${item.value.position} at ${item.value.company} (${item.value.startDate} – ${item.value.endDate}) — ${item.value.category}.`;
  const first = item.value.achievements?.[0];
  return first ? `${head} ${first}` : head;
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: pagePath,
  twitterTitle: title,
  twitterDescription: description,
});

defineOgImage('Page', {
  title: () => item.value?.position ?? 'Experience',
  subtitle: () =>
    item.value
      ? `${item.value.company} · ${item.value.startDate} – ${item.value.endDate}`
      : 'Experience',
  badge: () => item.value?.category ?? 'Experience',
});

useSchemaOrg([
  defineWebPage({
    name: title,
    description,
  }),
]);
</script>
