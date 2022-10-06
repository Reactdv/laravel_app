import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import Employee from "../types/employee";

export const useEmployeeStore = defineStore("employeeStore", () => {
    const employees = reactive({
        data: [
            {
                id: 1,
                employee_id: 2,
                last_name: "lara",
                first_name: "dadaswqqq",
                role: "qwqeq",
                date_employed: "eqeqe",
                phone: "qeqeq",
            } as Employee
        ],
    });

    const getEmployees = async (): Promise<any> => {
        axios
            .get("http://127.0.0.1:8000/api/admin/employees/")
            .then((res) => {
                employees.data = res.data;
                // console.log(employees.data);
            })
            .catch((err) => console.error(err));
    };

    const postEmployee = async (employee: Employee) => {
        axios
            .post("http://127.0.0.1:8000/api/admin/employees/", {
                employee_id: employee.employee_id,
                last_name: employee.last_name,
                first_name: employee.first_name,
                role: employee.role,
                date_employed: employee.date_employed,
                phone: employee.phone,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    return { employees, getEmployees, postEmployee };
});
