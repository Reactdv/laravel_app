<template>
    <nav class="flex flex-row gap-16 justify-start items-center bg-blue-500 p-5">
        <RouterLink
            class="text-white text-lg capitalize hover:text-sky-300 transition-all duration-300 focus:text-sky-300"
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
import { RouterLink, RouterView } from "vue-router";
const navLinks: string[] = ["home", "dashboard", "login", "register"];
</script>
