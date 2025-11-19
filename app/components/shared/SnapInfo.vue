<template>
	<span class="flex flex-col">
		<span class="text-accent uppercase">{{ props.title }}</span>
		<span class="text-xl md:text-2xl font-semibold"><slot /></span>
	</span>
</template>

<script setup lang="ts">
const props = defineProps({
	title: String,
});
</script>
