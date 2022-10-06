<template>
     <button
        @click="isToggled = true"
        class="bg-blue-500 my-5 hover:bg-blue-700 rounded-lg p-2 text-xl text-white"
    >
        Add Employee
    </button>
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
            <tr v-for="employee in employees.data" :key="employee.id">
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.employee_id }}
                </td>
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.last_name }}
                </td>
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.first_name }}
                </td>
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.role }}
                </td>
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.date_employed }}
                </td>
                <td class="px-3 border-2 border-blue-500">
                    {{ employee.phone }}
                </td>
            </tr>
        </tbody>
    </table>
   
    <teleport to="body">
        <div v-show="isToggled">
            <AddEmployee @closeModal="closeModal" />
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted } from "vue";
import Employee from "../types/employee";
import AddEmployee from "./addEmployee.vue";
import { useEmployeeStore } from "../store/employeeStore";

const employeeStore = useEmployeeStore();
const { employees } = toRefs(employeeStore);
const { getEmployees } = employeeStore;

const isToggled = ref<boolean>(false as boolean);
console.log(employees.value.data);

const closeModal = (): boolean => (isToggled.value = false);

const tableTitles: string[] = [
    "employee id",
    "last name",
    "first name",
    "role",
    "date employed",
    "phone number",
];


onMounted(() => {
    getEmployees();
});
</script>

<style scoped></style>
