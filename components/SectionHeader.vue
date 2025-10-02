<template>
	<div class="container mx-auto mt-24 mb-8 space-y-1 px-4 text-center md:mt-44 md:mb-16 md:space-y-3">
		<MyLogo class="mx-auto mb-4 w-8 md:w-10" />
		<h2 class="text-2xl leading-tight font-black md:text-3xl lg:text-4xl dark:text-gray-100">
			<slot />
		</h2>
		<span v-if="props.subtitle" class="text-sm font-medium tracking-widest uppercase md:text-base dark:text-gray-300">
			{{ props.subtitle }}
		</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	subtitle: String,
});
</script>
