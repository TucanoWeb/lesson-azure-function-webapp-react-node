import client from "./client";

const dataBase = "Products";
const container = "Actives";

export const productsStore = {
  getProducts: async () => {
    const response = await client.database(dataBase).container(container).items.readAll().fetchAll();
    console.log(response.resources);
    return response.resources;
  },
};
