import { getPriceProduct } from "../utils/product.utils";

export const ProductPrice = async ({ productId }: { productId: string }) => {
  const { price } = await getPriceProduct(productId);
  return (
    <div className="flex justify-end pt-6">
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-blue-600">
          {price?.price}
          {price?.currency === "EUR" && "€"} HT
        </span>
      </div>
    </div>
  );
};

export const ProductPriceSkeleton = () => {
  return (
    <div className="flex justify-end pt-6">
      <div className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></div>
    </div>
  );
};
