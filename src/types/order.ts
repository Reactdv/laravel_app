
   interface Order {
    id: number | string;
    order_id: number | string;
    customer_id: number | string;
    employee_id: number | string;
    ordered_date: string;
    required_date: string;
    shipped_date: string;
    address: string;
    city: string;
}



export default Order