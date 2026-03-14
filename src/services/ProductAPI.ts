import { getProductList } from "../api/products"
import { Product } from "../models/Product";
import { productSSchema } from "../models/schemas";

export const getAllProducts = async (): Promise<Product[]> => { //Aunque no creo necesario el async, la idea es simular que llamamos a una API REST
    try {
        const response = await productSSchema.safeParse(getProductList());
        console.log(response)

        if (response.success) return response.data
        return []
    } catch (error) {
        console.log(error)
        return []
    }
}