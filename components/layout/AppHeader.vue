<template>
	<header class="flex flex-row items-center justify-between px-4 py-4 md:px-32 md:py-8">
		<UiMyLogo with-name />

		<!-- Hamburger Menu Button -->
		<button 
			@click="toggleMenu" 
			class="md:hidden"
			:aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
			:aria-expanded="isMenuOpen"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Navigation Menu -->
		<nav 
			:class="{ hidden: !isMenuOpen }" 
			class="bg-accent-background fixed top-16 left-0 z-10 w-full p-4 pt-0 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:p-0"
			role="navigation"
			aria-label="Main navigation"
		>
			<ul class="flex flex-col gap-4 text-lg md:flex-row md:gap-10">
				<li v-for="item in NAVIGATION_ITEMS" :key="item.to">
					<UiNavLink :to="item.to" @click="closeMenu">{{ item.label }}</UiNavLink>
				</li>
			</ul>
		</nav>

		<!-- CTA Button -->
		<div class="hidden md:block">
			<UiCTAButton />
		</div>
	</header>
</template>

<script setup lang="ts">
import { useMobileMenu } from '~/composables/useMobileMenu';
import { NAVIGATION_ITEMS } from '~/constants';

const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
</script>
