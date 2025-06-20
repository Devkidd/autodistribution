import clsx from "clsx";
import { getAvailability } from "../utils/product.utils";

export const ProductAvailability = async ({
  productId,
}: {
  productId: string;
}) => {
  const { availability } = await getAvailability(productId);
  return (
    <div className="flex justify-end pt-6">
      <p
        className={clsx(
          "text-xl text-gray-500",
          availability?.available ? "text-green-500" : "text-red-500"
        )}
      >
        {availability?.available
          ? `Disponible en stock : ${availability.stock}`
          : "Produit non disponible"}
      </p>
    </div>
  );
};

export const ProductAvailabilitySkeleton = () => {
  return (
    <div className="flex justify-end pt-6">
      <div className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></div>
    </div>
  );
};
