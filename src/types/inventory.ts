interface Inventory {
    id: number | string
    product_id: number | string
    product_img: string
    product_name: string;
    product_price: string;
    product_description: string;
    product_stocks: string | number ;
}

export default Inventory;
