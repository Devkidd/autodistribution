import {
  Product,
  ProductAvailability,
  ProductWithPrice,
} from "../types/products";

export const getPriceProducts = async (
  productsList: Product[]
): Promise<{ productsWithPrice: ProductWithPrice[]; isLoading: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let isLoading = true;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mocks/product-prices.json`
  ).then((res) => res.json());
  isLoading = false;

  const productsWithPrice = productsList.map((product) => {
    const price = response.find((price) => price.productId === product.id);
    return {
      ...product,
      price: price?.price || 0,
      currency: price?.currency || "EUR",
    };
  });

  return { productsWithPrice, isLoading };
};

export const getPriceProduct = async (
  productId: string
): Promise<{ price: ProductWithPrice; isLoading: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let isLoading = true;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mocks/product-prices.json`
  ).then((res) => res.json());
  isLoading = false;
  return {
    price: response.find((price) => price.productId === productId),
    isLoading,
  };
};

export const createProductSlug = (product: Product) => {
  return product.name.toLowerCase().replace(/ /g, "-");
};

export const getProductById = async (
  id: string
): Promise<{ product: Product; isLoading: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let isLoading = true;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mocks/all-products.json`
  ).then((res) => res.json());

  isLoading = false;
  return { product: response.find((product) => product.id === id), isLoading };
};

export const getAvailability = async (
  id: string
): Promise<{ availability: ProductAvailability; isLoading: boolean }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let isLoading = true;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mocks/product-availability.json`
  ).then((res) => res.json());

  isLoading = false;
  return {
    availability: response.find(
      (availability) => availability.productId === id
    ),
    isLoading,
  };
};
