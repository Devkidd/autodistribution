export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  logo: string;
}

export interface ProductWithPrice extends Product {
  price: number;
  currency: string | "EUR";
}

export interface ProductAvailability {
  productId: string;
  available: boolean;
  stock: number;
}
