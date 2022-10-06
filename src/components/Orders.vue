<template>
    <div>
        <table class="w-full table-fixed my-7 border-2 border-blue-500">
            <thead>
                <tr>
                    <th
                        class="capitalize bg-blue-500 text-white"
                        v-for="(tableTitle, index) in tableTitles"
                    >
                        {{ tableTitle }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders.data">
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.order_id }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.customer_id }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.employee_id }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.ordered_date }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.required_date }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.shipped_date }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.address }}
                    </td>
                    <td class="px-3 border-2 border-blue-500">
                        {{ order.city }}
                    </td>
                </tr>
            </tbody>
        </table>
        <button
            @click="isModalToggled = true"
            class="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 text-xl text-white"
        >
            Add order
        </button>
        <teleport to="body">
            <div v-show="isModalToggled">
                <AddOrder @toggle="toggle" />
            </div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import OrderData from "../types/order";
import AddOrder from "./addOrder.vue";
import { ref, reactive, toRefs, onMounted, computed, onUpdated } from "vue";
import { useOrderStore } from "../store/orderStore";

const orderApi = useOrderStore();
const { orders } = toRefs(orderApi);
const { getOrders } = orderApi;

onMounted(() => {
    getOrders();
});

const isModalToggled = ref<boolean>(false);

const toggle = (): boolean => (isModalToggled.value = false);

const tableTitles: string[] = [
    "order id",
    "customer id",
    "employee id",
    "ordered date",
    "required date",
    "shipped date",
    "address",
    "city",
];
</script>

<style scoped></style>
