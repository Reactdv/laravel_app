<template>
    <div class="flex flex-col gap-12 p-5">
        <button
            @click="isToggled = true"
            class="w-max bg-blue-500 hover:bg-blue-700 rounded-lg p-2 text-xl text-white"
        >
            Add Inventory
        </button>
        <!-- <input type="file" id="fileInput" @change="imageToBase64" /> -->
        <div
            v-for="product in products.data"
            :key="product.id"
            class="flex flex-col sm:flex-row gap-5"
        >
            <div class="flex md:flex-row flex-col gap-5">
                <img
                    :src="product.product_img"
                    alt="product"
                    class="w-full sm:w-[200px] h-full sm:h-[200px] rounded-md cursor-pointer transition-all duration-700 ease-in-out hover:scale-110"
                />
                <div class="flex flex-col justify-start items-start gap-2">
                    <h1 class="font-bold text-2xl">
                        {{ product.product_name }}
                    </h1>
                    <h1 class="text-amber-300 text-lg font-bold">
                        ₱ {{ product.product_price }}<small>.99</small>
                    </h1>
                    <p>{{ product.product_description }}</p>
                </div>
            </div>
            <div
                class="min-w-[300px] flex flex-row justify-start items-start gap-3 font-bold"
            >
                <h3 class="text-gray-400 font-medium">
                    Product id:{{ product.product_id }}
                </h3>
                <h3>|</h3>
                <h3 class="text-red-500 font-semibold">
                    Stock:{{ product.product_stocks }}
                </h3>
            </div>
        </div>
    </div>
    <teleport to="body">
        <div v-show="isToggled">
            <AddInventory @close="closeModal" />
        </div>
    </teleport>
</template>

<script setup lang="ts">
import Product from "../types/product";
import shoes from "../assets/shoes.jpg";
import { base } from "./base64";
import { ref, toRefs, onMounted } from "vue";
import AddInventory from "./addInventory.vue";
import { useInventoryStore } from "../store/inventoryStore";

const inventoryStore = useInventoryStore();
const { products } = toRefs(inventoryStore);
const { getInventories } = inventoryStore;

const isToggled = ref<boolean>(false as boolean);

const closeModal = (): boolean => (isToggled.value = false);

onMounted(() => {
    getInventories();
});
</script>

<style scoped></style>
