// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  lucide: {
    namePrefix: "Icon",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-lucide-icons",
    "nuxt-marquee",
    "nuxt-svgo",
  ],
});
