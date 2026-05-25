<template>
  <div class="font-app flex flex-col min-h-screen">
    <AppHeader />

    <!-- Allow the main content area to grow and fill available space -->
    <main data-testid="default-layout-main" class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
