<template>
  <footer class="bg-inverted text-inverted py-12 pb-20">
    <div class="px-4 md:px-8 lg:px-16 xl:px-32">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Brand Section -->
        <div class="flex flex-col justify-between space-y-4">
          <AppLogo with-name />
          <p class="text-sm text-inverted/80">
            Crafting digital experiences with passion and precision.
          </p>
          <nav aria-label="Footer">
            <ul class="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <li v-for="link in pageLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="inline-block py-1 hover:underline"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <p class="text-sm text-inverted/50">
            © {{ new Date().getFullYear() }} Khateeb. All rights reserved.
          </p>
        </div>

        <!-- About Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">About Me</h2>
          <p class="text-sm leading-relaxed text-inverted/80 md:text-base">
            {{ objectiveLead }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Connect With Me</h2>
          <AppSocialLinks />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const pageLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/blog', label: 'Blog' },
] as const;

const { data: info } = await usePersonalInfo();

const { withYears } = await useExperienceYears();

const objective = computed(() => withYears(info.value?.objective ?? ''));

// First sentence only. The period must be followed by whitespace or the end of
// the text, so decimals like "1.5+ years" no longer cut the sentence short.
const objectiveLead = computed(() => {
  const text = objective.value.trim();
  return text.match(/^[\s\S]*?[.!?](?=\s|$)/)?.[0] ?? text;
});
</script>
