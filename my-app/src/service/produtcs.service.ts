import api from "../api/api";
import { IProductsResponse } from "../types/produts.types";

export const productsService = {
  getProducts: async (): Promise<IProductsResponse[]> => {
    const response = await api.get("/get-products");
    console.log(response.data);
    return response.data;
  },
};
