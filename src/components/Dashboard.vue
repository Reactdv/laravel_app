<template>
    <div class="py-5 px-3 shadow-lg">
        <header class="bg-blue-500 p-3 text-white text-xl capitalize font-bold">
            Order management dashboard
        </header>
        <main class="p-3">
            <header class="flex flex-row items-center gap-7">
                <button
                    @click="activeTable = Orders"
                    autofocus
                    class="p-2 font-bold rounded-lg transition-all duration-300 ease-in-out cursor-pointer outline-none hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                >
                    Orders
                </button>
                <button
                    @click="activeTable = Inventories"
                    class="p-2 font-bold rounded-lg transition-all duration-300 ease-in-out cursor-pointer outline-none hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                >
                    Inventories
                </button>
                <button
                    @click="activeTable = Employees"
                    class="p-2 font-bold rounded-lg transition-all duration-300 ease-in-out cursor-pointer outline-none hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                >
                    Employees
                </button>
            </header>
            <component :is="activeTable"></component>
        </main>
    </div>
</template>

<script setup lang="ts">
import Orders from "./Orders.vue";
import Inventories from "./Inventories.vue";
import Employees from "./Employees.vue";
import {  ref } from "vue";

type ActiveTable =
 typeof Orders | typeof Inventories | typeof Employees ;


const activeTable = ref<ActiveTable>(Orders as typeof Orders);
</script>

<style scoped></style>
