<template>
  <header
    class="bg-default sticky top-0 z-40 flex flex-row items-center justify-between px-4 py-4 md:px-32 md:py-8"
  >
    <AppLogo with-name />

    <!-- Hamburger Button (hidden while drawer is open; drawer has its own close) -->
    <button
      v-show="!isMenuOpen"
      :aria-expanded="isMenuOpen"
      aria-label="Open navigation menu"
      aria-controls="mobile-nav"
      type="button"
      class="focus-visible:outline-primary relative z-50 flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
      @click="toggleMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <nav aria-label="Primary" class="hidden md:block">
      <ul class="flex flex-row gap-10 text-lg">
        <li v-for="link in navLinks" :key="link.to">
          <AppHeaderNavLink :to="link.to">{{ link.label }}</AppHeaderNavLink>
        </li>
      </ul>
    </nav>

    <!-- Desktop CTA -->
    <span class="hidden md:block">
      <UiCTAButton />
    </span>

    <!-- Mobile Drawer (teleported so it overlays everything) -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="backdrop">
          <div
            v-if="isMenuOpen"
            class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            @click="closeMenu"
          />
        </Transition>

        <Transition name="drawer">
          <nav
            v-if="isMenuOpen"
            id="mobile-nav"
            ref="drawerRef"
            aria-label="Mobile"
            tabindex="-1"
            class="bg-default fixed inset-y-0 right-0 z-40 flex w-[min(20rem,85vw)] flex-col gap-8 overflow-y-auto px-6 pt-24 pb-8 shadow-2xl outline-none md:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              class="focus-visible:outline-primary absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2"
              @click="closeMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul class="flex flex-col gap-2 text-lg">
              <li v-for="link in navLinks" :key="link.to">
                <AppHeaderNavLink :to="link.to" @click="closeMenu">
                  {{ link.label }}
                </AppHeaderNavLink>
              </li>
            </ul>

            <div class="mt-auto" @click="closeMenu">
              <UiCTAButton />
            </div>
          </nav>
        </Transition>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const drawerRef = ref<HTMLElement | null>(null);
const route = useRoute();

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
] as const;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Close on route change
watch(() => route.fullPath, closeMenu);

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu();
};

watch(isMenuOpen, (open) => {
  if (!import.meta.client) return;
  if (open) {
    document.addEventListener('keydown', onKeydown);
    document.body.style.overflow = 'hidden';
    nextTick(() => drawerRef.value?.focus());
  } else {
    document.removeEventListener('keydown', onKeydown);
    document.body.style.overflow = '';
  }
});

onBeforeUnmount(() => {
  if (!import.meta.client) return;
  document.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 280ms cubic-bezier(0.32, 0.72, 0, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 220ms ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
