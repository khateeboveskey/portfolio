<template>
  <header
    class="flex flex-row items-center justify-between px-4 py-4 md:px-32 md:py-8"
  >
    <AppLogo with-name />

    <!-- Hamburger Menu Button -->
    <button class="md:hidden" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Navigation Menu -->
    <nav
      :class="{ hidden: !isMenuOpen }"
      class="bg-accent-background fixed top-16 left-0 z-10 w-full p-4 pt-0 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:p-0"
    >
      <ul class="flex flex-col gap-4 text-lg md:flex-row md:gap-10">
        <li>
          <AppHeaderNavLink to="/">Home</AppHeaderNavLink>
        </li>
        <li>
          <AppHeaderNavLink to="#about">About</AppHeaderNavLink>
        </li>
        <li>
          <AppHeaderNavLink to="#projects">Projects</AppHeaderNavLink>
        </li>
        <li>
          <AppHeaderNavLink to="#contact">Contact</AppHeaderNavLink>
        </li>
      </ul>
    </nav>

    <!-- CTA Button -->
    <span class="hidden md:block">
      <ul class="flex gap-3 text-lg">
        <li>
          <UiCTAButton />
        </li>
      </ul>
    </span>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
