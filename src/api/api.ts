import axios from "axios";
import Method from "../types/axiosMethod";

const useApi = async (method: Method, id?: number | string) => {
    try {
        if (method === "get") {
            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/admin/orders/"
            );
            console.log(data);
            return data;
        }
        if (method === "post") {
            const { data } = await axios.post(
                "http://127.0.0.1:8000/api/admin/orders/"
            );
            console.log(data);
            return data;
        }
        if (method === "delete") {
            const { data } = await axios.delete(
                `http://127.0.0.1:8000/api/admin/orders/${id}`
            );
            console.log(data);
            return data;
        }
        if (method === "put") {
            const { data } = await axios.put(
                "http://127.0.0.1:8000/api/admin/orders/"
            );
            console.log(data);
            return data;
        }
    } catch (err) {
        console.log(err);
    }
};

export default useApi;
