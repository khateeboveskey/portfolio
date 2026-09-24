<template>
  <div class="font-app flex flex-col min-h-screen">
    <a
      href="#main"
      class="bg-inverted text-inverted sr-only z-50 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:px-4 focus:py-2"
    >
      Skip to content
    </a>

    <AppHeader />

    <!-- Allow the main content area to grow and fill available space -->
    <main id="main" data-testid="default-layout-main" class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
