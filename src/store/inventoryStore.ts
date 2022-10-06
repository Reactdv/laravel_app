import { defineStore } from "pinia";
import { reactive } from "vue";
import Inventory from "../types/inventory";
import axios from "axios";

export const useInventoryStore = defineStore("inventoryStore", () => {
    const products = reactive({
        data: [
            {
                id: "",
                product_id: "",
                product_img: "",
                product_name: "",
                product_price: "",
                product_description: "",
                product_stocks: "",
            } as Inventory,
        ],
    });

    const getInventories = () => {
        axios
            .get("http://127.0.0.1:8000/api/admin/inventories/")
            .then((res) => (products.data = res.data))
            .catch((err) => console.log(err));
    };
    const postInventory = (products: Inventory) => {
        axios
            .post("http://127.0.0.1:8000/api/admin/inventories/", {
                product_id: products.product_id,
                product_img: products.product_img,
                // product_img: products.product_img.substring(
                //     products.product_img.indexOf(",") + 1
                // ),
                product_name: products.product_name,
                product_price: products.product_price,
                product_description: products.product_description,
                product_stocks: products.product_stocks,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    return { products, getInventories, postInventory };
});
