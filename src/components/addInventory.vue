<template>
    <div
        class="bg-white w-2/4 mx-auto absolute top-24 left-1/2 rounded-lg shadow-2xl -translate-x-1/2"
    >
        <header class="w-full p-7 rounded-t-lg bg-sky-500"></header>
        <form
            @submit.prevent="handleAddInventory"
            class="rounded-lg px-20 py-16 w-full flex flex-col gap-4 p-5"
        >
            <label for=""> Product Name</label>
            <input
                v-model.trim.lazy="products.product_name"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                placeholder="Product Name"
                type="text"
            />
            <label for=""> Product Price</label>
            <input
                v-model.trim.lazy="products.product_price"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Product price"
            />
            <label for=""> Product Stocks</label>
            <input
                v-model.trim.lazy="products.product_stocks"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Product Stock"
            />
            <label for="">Product Id</label>
            <input
                v-model.trim.lazy="products.product_id"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Product Id"
            />
            <label for="">Product image</label>
            <input
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="file"
                placeholder="Product Image"
                @change="imageToBase64"
            />

            <label for="">Product Description</label>
            <textarea
                v-model.trim.lazy="products.product_description"
                class="outline-none border-2 border-blue-500 rounded-lg p-2"
                type="text"
                rows="10"
                cols="10"
            />

            <button
                ref="reff"
                autofocus
                type="submit"
                class="focus:bg-green-500 p-2 cursor-pointer bg-blue-500 rounded-lg text-lg font-semibold text-white"
            >
                Submit
            </button>
            <!-- {{products.product_img}} -->
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onActivated, onMounted, onUpdated } from "vue";
import { useInventoryStore } from "../store/inventoryStore";
import Inventory from "../types/inventory";
import { base } from "./base64";

const inventoryStore = useInventoryStore();

const { postInventory } = inventoryStore;
// const { inventories} = toRefs(inventoryStore);

const emits = defineEmits(["close"]);

const products = reactive<Inventory>({
    id: "",
    product_id: "",
    product_img: "",
    product_name: "",
    product_price: "",
    product_description: "",
    product_stocks: "",
});
const handleAddInventory = () => {
    postInventory(products);
    console.log(products.product_img);
    // console.log(
    //     products.product_img.substring(products.product_img.indexOf(",") + 1)
    // );
    emits("close");
};

const imageToBase64 = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files[0];
    console.log(file);
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => (products.product_img = reader.result.toString());
    reader.onerror = (err) => console.log(err);
};
</script>

<style scoped></style>
