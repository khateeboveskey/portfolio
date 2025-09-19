<template>
	<footer class="bg-accent-foreground text-accent-background py-12 pb-20">
		<div class="container mx-auto px-4 md:px-8">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
				<!-- Brand Section -->
				<div class="flex flex-col justify-between space-y-4">
					<UiMyLogo with-name />
					<p class="text-sm text-neutral-300">
						Crafting digital experiences with passion and precision.
					</p>
					<p class="text-sm text-neutral-400">
						© {{ CURRENT_YEAR }} Khateeb. All rights reserved.
					</p>
				</div>

				<!-- About Section -->
				<div class="space-y-4">
					<h2 class="text-lg font-semibold">About Me</h2>
					<p class="text-sm leading-relaxed text-neutral-300 md:text-base">
						{{ truncateText(objective, 120) }}
					</p>
				</div>

				<!-- Social Links -->
				<div class="space-y-4">
					<h2 class="text-lg font-semibold">Connect With Me</h2>
					<ul class="flex flex-wrap gap-4" role="list">
						<li v-for="(value, key) in accounts" :key="key">
							<a 
								v-bind="createExternalLink(value)"
								:aria-label="`Follow on ${key}`" 
								class="border-accent-background/20 hover:border-accent-background hover:bg-accent-background/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all"
							>
								<i :class="`fa-brands fa-${key} text-accent-background text-lg`" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { accounts, objective } from 'assets/mydata.json';
import { truncateText, createExternalLink } from '~/utils';
import { CURRENT_YEAR, EXTERNAL_RESOURCES } from '~/constants';

// Load Font Awesome CSS
useHead({
	link: [EXTERNAL_RESOURCES.FONT_AWESOME]
});
</script>
