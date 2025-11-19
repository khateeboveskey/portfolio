<template>
	<div>
		<span v-if="props.text" class="border-accent text-accent selection:text-accent-foreground border-2 px-4 py-2 text-base sm:px-6 sm:py-2.5 sm:text-lg">
			{{ props.text }}
		</span>
		<a class="border-accent hover:opacity-80 bg-accent text-accent-background border-2 px-6 py-2 text-base sm:px-8 sm:py-2.5 sm:text-lg" href="mailto:khateeboveskey@gmail.com">
			Let's talk
		</a>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	text?: string;
}>();
</script>
