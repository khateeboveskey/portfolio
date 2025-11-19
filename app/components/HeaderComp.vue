<template>
	<header class="flex flex-row items-center justify-between px-4 py-4 md:px-32 md:py-8">
		<a href="/" class="group flex flex-row items-center gap-2 *:transition-transform">
			<MyLogo class="h-6 group-hover:rotate-60" />
			<h1 class="text-2xl font-black md:text-3xl">Khateeb</h1>
		</a>

		<!-- Hamburger Menu Button -->
		<button @click="toggleMenu" class="md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Navigation Menu -->
		<nav :class="{ hidden: !isMenuOpen }" class="bg-accent-background fixed top-16 left-0 z-10 w-full p-4 pt-0 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:p-0">
			<ul class="flex flex-col gap-4 text-lg md:flex-row md:gap-10">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="#about">About</NavLink>
				</li>
				<li>
					<NavLink to="#projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/">Contact</NavLink>
				</li>
			</ul>
		</nav>

		<!-- CTA Button -->
		<span class="hidden md:block">
			<ul class="flex gap-3 text-lg">
				<li>
					<CTAButton />
				</li>
			</ul>
		</span>
	</header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>
