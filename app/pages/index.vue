<template>
  <div>
    <HomeHeroSection />
    <HomeTitlesBar />
    <HomeAboutSection />
    <HomeProfessionalExpSection />
    <HomeSkillsSection />
    <HomeProjectsSection />
    <HomeSocialProofSection />
    <HomeArticlesSection />
    <HomeContactSection />
    <HomeResumeSection />
  </div>
</template>

<script setup lang="ts">
const { yearsLabel } = await useExperienceYears();

const title = "Khateeb's Portfolio — Fullstack Developer & Technical Trainer";
const description = computed(
  () =>
    `A.Rahman S. Al-Khateeb (Khateeb) — Fullstack Developer & Technical Trainer with ${yearsLabel.value}+ years of experience. Vue, Nuxt, TypeScript, Laravel. Browse projects, articles, skills, and experience.`,
);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: '/',
  twitterTitle: title,
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'A.Rahman S. Al-Khateeb',
  subtitle: 'Fullstack Developer & Technical Trainer',
  badge: 'Portfolio',
});

useSchemaOrg([
  defineWebSite({
    name: "Khateeb's Portfolio",
    description: description.value,
    inLanguage: 'en-US',
  }),
  defineWebPage({
    name: title,
    description: description.value,
    primaryImageOfPage: '/imgs/me.png',
  }),
]);
</script>
