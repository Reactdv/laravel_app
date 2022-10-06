import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import Order from "../types/order";

export const useOrderStore = defineStore("orderStore", () => {
    const orders = reactive({
        data: [
            {
                id: 1,
                order_id: 1,
                customer_id: 50,
                employee_id: 9,
                ordered_date: "jun 23 2022",
                required_date: "jun 25 2022",
                shipped_date: "jun 30 2022",
                address: " 131 ny cmpd bagbaguin",
                city: "caloocan",
            } as Order,
        ],
    });

    const getOrders = async (): Promise<any> => {
        axios
            .get("http://127.0.0.1:8000/api/admin/orders/")
            .then((res) => {
                orders.data = res.data;
                console.log(orders.data);
            })
            .catch((err) => console.error(err));
    };
    const postOrder = async (order: Order): Promise<any> => {
        axios
            .post("http://127.0.0.1:8000/api/admin/orders/", {
                order_id: order.order_id,
                customer_id: order.customer_id,
                employee_id: order.employee_id,
                ordered_date: order.ordered_date,
                required_date: order.required_date,
                shipped_date: order.shipped_date,
                address: order.address,
                city: order.city,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    const deleteOrder = async (id: number | string): Promise<any> => {
        try {
            const { data } = await axios.delete(
                `http://127.0.0.1:8000/api/admin/orders/${id}`
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    const updateOrder = async (id: number | string): Promise<any> => {
        try {
            const { data } = await axios.patch(
                `http://127.0.0.1:8000/api/admin/orders/${id}`
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    return { orders, getOrders, deleteOrder, postOrder, updateOrder };
});
