"use server";

import { ProductWithPrice } from "../types/products";
import { getPriceProducts } from "../utils/product.utils";

export async function getProducts(
  value: string
): Promise<{ productsWithPrice: ProductWithPrice[]; isLoading: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let isLoading = true;
  let response;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/mocks/all-products.json`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    response = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    response = [];
  }
  isLoading = false;

  const products = response.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );

  const { productsWithPrice } = await getPriceProducts(products);

  return { productsWithPrice, isLoading };
}
