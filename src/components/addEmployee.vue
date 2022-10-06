<template>
    <div
        class="bg-white w-2/4 mx-auto absolute top-24 left-1/2 rounded-lg shadow-2xl -translate-x-1/2"
    >
        <header class="w-full p-7 rounded-t-lg bg-sky-500"></header>
        <form
            @submit.prevent="handleAddEmployee"
            class="rounded-lg px-20 py-16 w-full flex flex-col gap-4 p-5"
        >
            <label for="">Last Name</label>
            <input
                v-model.trim.lazy="employee.last_name"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                placeholder="Last Name"
                type="text"
            />
            <label for=""> First Name</label>
            <input
                v-model.trim.lazy="employee.first_name"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="First Name"
            />
            <label for=""> Role</label>
            <input
                v-model.trim.lazy="employee.role"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Role"
            />
            <label for=""> Phone number</label>
            <input
                v-model.trim.lazy="employee.phone"
                class="p-2 rounded-lg border-2 border-blue-500 outline-none"
                type="text"
                placeholder="Phone Number"
            />
            <div class="flex flex-row justify-start gap-5 items-center">
                <div class="flex flex-row items-center gap-3">
                    <label for="">Date Employed</label>
                    <input
                        v-model.trim.lazy="employee.date_employed"
                        class="outline-none border-2 border-blue-500 rounded-lg p-2"
                        type="date"
                    />
                </div>
                <div class="flex flex-row items-center gap-4">
                    <label for=""> Employee Id</label>
                    <input
                        placeholder="Id"
                        class="outline-none border-2 border-blue-500 rounded-lg p-2 w-[80px]"
                        type="number"
                        v-model.trim.lazy="employee.employee_id"
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
import { useEmployeeStore } from "../store/employeeStore";
import Employee from "../types/employee";

const employeeStore = useEmployeeStore();
const { postEmployee } = employeeStore;

const emits = defineEmits(["closeModal"]);

const employee = reactive<Employee>({
    id: "",
    employee_id: "",
    last_name: "",
    first_name: "",
    role: "",
    date_employed: "",
    phone: "",
});

const handleAddEmployee = () => {
    postEmployee(employee);
    emits("closeModal");
};
</script>

<style scoped></style>
