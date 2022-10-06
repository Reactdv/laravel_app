<template>
    <div
        class="bg-white w-1/2 mx-auto absolute top-24 left-1/2 rounded-lg shadow-2xl -translate-x-1/2"
    >
        <header class="w-full p-7 rounded-t-lg bg-sky-500"></header>
        <form
            @submit.prevent="handleAddOrder"
            class="rounded-lg w-full px-20 py-10 flex flex-col gap-4 p-5"
        >
            <label for="">Address</label>
            <input
                v-model.trim.lazy="order.address"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Address"
            />
            <label for="">City</label>
            <input
                v-model.trim.lazy="order.city"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                placeholder="City"
                type="text"
            />
            <div
                class="flex flex-row items-center my-5 justify-between bg-blue-50"
            >
                <div class="flex flex-col items-start justify-start gap-2">
                    <label for="order_id">Order Date</label>
                    <input
                        v-model.trim.lazy="order.ordered_date"
                        type="date"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-full"
                    />
                </div>
                <div class="flex flex-col items-start justify-start gap-2">
                    <label for="order_id">Required Date</label>
                    <input
                        v-model.trim.lazy="order.required_date"
                        type="date"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-full"
                    />
                </div>
                <div class="flex flex-col justify-start items-start gap-2">
                    <label for="order_id">Shipped Date</label>
                    <input
                        type="date"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-full"
                        v-model.trim.lazy="order.shipped_date"
                    />
                </div>
            </div>
            <div class="flex flex-row items-center justify-between bg-blue-50">
                <div class="flex flex-row items-center gap-2">
                    <label for="order_id">Order id</label>
                    <input
                        type="number"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-[50px]"
                        v-model.trim.lazy="order.order_id"
                    />
                </div>
                <div class="flex flex-row items-center gap-2">
                    <label for="order_id">Customer id</label>
                    <input
                        type="number"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-[50px]"
                        v-model.trim.lazy="order.customer_id"
                    />
                </div>
                <div class="flex flex-row items-center gap-2">
                    <label for="order_id">Employee id</label>
                    <input
                        type="number"
                        class="border-2 border-blue-500 outline-none p-1 rounded-lg w-[50px]"
                        v-model.trim.lazy="order.employee_id"
                    />
                </div>
            </div>
            <button
                ref="reff"
                autofocus
                type="submit"
                class="focus:bg-green-500 p-2 cursor-pointer bg-blue-500 rounded-lg text-lg font-semibold text-white"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useOrderStore } from "../store/orderStore";
import Order from "../types/order";

const api = useOrderStore();

const { postOrder } = api;

const emits = defineEmits(["toggle"]);

const order = reactive<Order>({
    id: "",
    order_id: "",
    customer_id: "",
    employee_id: "",
    ordered_date: "",
    required_date: "",
    shipped_date: "",
    address: "",
    city: "",
});

const handleAddOrder = () => {
    postOrder(order);

    emits("toggle");
};
</script>

<style scoped></style>
