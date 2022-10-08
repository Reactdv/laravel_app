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
			:key="product._id"
			class="flex flex-col sm:flex-row justify-between items-start gap-5"
		>
			<div
				class="flex md:flex-row justify-between items-center flex-col gap-5"
			>
				<img
					:src="urlFor(product.img)"
					alt="product"
					class="w-full sm:w-[200px] basis-1/4 h-full sm:h-[200px] rounded-md cursor-pointer transition-all duration-700 ease-in-out hover:scale-110"
				/>

				<div
					class="flex flex-col justify-center max-w-[600px] w-sm ml-5 items-start gap-2"
				>
					<h1 class="font-bold text-2xl">
						{{ product.name }}
					</h1>
					<h1 class="text-amber-300 text-lg font-bold">
						₱ {{ product.price }}<small>.99</small>
					</h1>
					<p>{{ product.desc }}</p>
				</div>
			</div>
			<div
				class="min-w-[300px] max-w-[200px] flex flex-row justify-start items-start gap-3 font-bold"
			>
				<h3 class="tsext-gray-400 font-medium">
					Product id:{{ product._id }}
				</h3>
				<h3>|</h3>
				<h3 class="text-red-500 font-semibold">
					Stock:{{ product.stocks }}
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
import { ref, reactive, onUpdated, onMounted, computed } from "vue";
import AddInventory from "./addInventory.vue";
import { sanity, urlFor } from "../sanity-client";

const isToggled = ref<boolean>(false as boolean);
const closeModal = (): boolean => (isToggled.value = false);


interface ProductFromSanity {
	desc: string;
	img: any;
	name: string;
	price: number | string;
	stocks: string | number;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

interface Data {
	data: ProductFromSanity[];
}
const products = reactive<Data>({
	data: [] as ProductFromSanity[],
});

const loadProducts = async () => {
	const query = '*[_type == "product" ]';
	const data = await sanity.fetch(query);
	// console.log(data);
	return data;
};

onMounted(async () => {
	// getInventories();
	await loadProducts().then((data) => (products.data = data));
	console.log(products.data);
});

// onUpdated(async () => {
// 	// getInventories();
// 	await loadProducts().then((data) => (products.data = data));
// 	console.log(products.data);
// });
</script>

<style scoped></style>
