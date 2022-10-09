<template>
	<nav
		class="nav flex flex-row gap-16 justify-start items-center bg-blue-500 p-5"
	>
		<RouterLink
			class="links transform scale-0 opacity-0 text-white text-lg capitalize hover:text-sky-300 transition-all duration-300 focus:text-sky-300"
			to="/"
		>
			home
		</RouterLink>
		<RouterLink
			class="links transform scale-0 opacity-0 text-white text-lg capitalize hover:text-sky-300 transition-all duration-300 focus:text-sky-300"
			v-for="(link, index) in navLinks"
			:key="index"
			:to="`/${link}`"
		>
			{{ link }}
		</RouterLink>
	</nav>
	<router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

import { RouterLink, RouterView } from "vue-router";
const navLinks: string[] = [ "dashboard", "login", "register"];

onMounted(() => {
	const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.8 } });
	tl.from(".nav", { y: "-100%", ease: "bounce" }).to(".links", {
		opacity: 1,
		scale: 1,
		stagger: 0.5,
	});
});
</script>
