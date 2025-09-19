<template>
	<div class="border-accent-foreground mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16">
		<div 
			class="even:bg-accent-foreground even:text-accent-background grid place-items-center p-3 sm:p-4 md:p-5" 
			v-for="(si, index) in snapInfoGroup" 
			:key="`stat-${index}`" 
			ref="snapRefs"
		>
			<NumberFlow 
				:spin-timing="NUMBER_FLOW_ANIMATION"
				class="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" 
				prefix="+" 
				:value="visible[index] ? Number(si.content) : 0" 
			/>
			<span class="text-center text-sm tracking-wider uppercase sm:text-base md:text-lg lg:text-xl">
				{{ si.title }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects } from 'assets/mydata.json';
import NumberFlow from '@number-flow/vue';
import { useIntersectionObserver } from '~/composables/useIntersectionObserver';
import { calculateExperienceYears } from '~/utils';
import { NUMBER_FLOW_ANIMATION } from '~/constants';
import type { StatsInfo } from '~/types';

/**
 * Statistics data for the portfolio
 */
const snapInfoGroup = computed((): StatsInfo[] => [
	{
		title: 'Projects',
		content: projects.length,
	},
	{
		title: 'Years Experience',
		content: calculateExperienceYears(projects),
	},
	{
		title: 'Student Trained',
		content: 100,
	},
]);

const snapRefs = ref<HTMLDivElement[]>([]);
const { visible } = useIntersectionObserver(snapRefs);
</script>
