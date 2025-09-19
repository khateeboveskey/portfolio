<template>
	<header class="container mx-auto mt-24 mb-8 space-y-1 px-4 text-center md:mt-44 md:mb-16 md:space-y-3">
		<UiMyLogo class="mx-auto mb-4 w-8 md:w-10" aria-hidden="true" />
		<h2 class="text-2xl leading-tight font-black md:text-3xl lg:text-4xl">
			<slot />
		</h2>
		<p v-if="subtitle" class="text-sm font-medium tracking-widest uppercase md:text-base text-gray-600">
			{{ subtitle }}
		</p>
	</header>
</template>

<script setup lang="ts">
import type { SectionHeaderProps } from '~/types';

/**
 * Section Header Component
 * 
 * Provides a consistent header layout with logo, title, and optional subtitle
 * 
 * @param subtitle - Optional subtitle text to display below the main title
 */
defineProps<SectionHeaderProps>();
</script>
