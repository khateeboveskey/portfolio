<template>
	<a
		:href="props.to"
		:class="borderHoverEffectClasses"
		class="relative inline-block w-full border-b pb-2.5 transition-all md:border-0 md:border-transparent md:pb-0 md:hover:border-transparent">
		<slot />
	</a>
</template>

<script setup lang="ts">
const props = defineProps({
	to: String,
});

const borderHoverEffectClasses =
	'md:after:absolute md:after:-bottom-3 md:after:left-0 md:after:h-0.5 md:after:w-full md:after:origin-right md:after:scale-x-0 md:after:bg-neutral-600 md:after:transition-transform md:hover:after:origin-left md:hover:after:scale-x-100 md:after:duration-300';
</script>
