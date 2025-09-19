<template>
	<div class="inline-flex items-center">
		<span 
			v-if="text" 
			class="border-accent text-accent selection:text-accent-foreground border-2 px-4 py-2 text-base sm:px-6 sm:py-2.5 sm:text-lg"
		>
			{{ text }}
		</span>
		<a 
			:href="`mailto:${CONTACT_EMAIL}`"
			class="border-accent hover:opacity-80 bg-accent text-accent-background border-2 px-6 py-2 text-base sm:px-8 sm:py-2.5 sm:text-lg transition-opacity"
			aria-label="Send an email to start a conversation"
		>
			Let's talk
		</a>
	</div>
</template>

<script setup lang="ts">
import { CONTACT_EMAIL } from '~/constants';
import type { CTAButtonProps } from '~/types';

/**
 * CTA (Call To Action) Button Component
 * 
 * @param text - Optional text to display before the button
 */
defineProps<CTAButtonProps>();
</script>
