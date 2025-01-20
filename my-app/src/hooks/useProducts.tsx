import { productsService } from "../service/produtcs.service";

const useProducts = () => {
  const getProducts = async () => {
    const response = await productsService.getProducts();
    return response;
  };

  return { getProducts };
};

export default useProducts;
