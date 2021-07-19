import { api } from "./api";

export async function getProducts() {
  try {
    const {data, status} = await api.get(`/products`);

    return {data, status};

  } catch (error) {
    console.log(error);

  }
}
