import clsx from "clsx";
import { ProductWithPrice } from "../types/products";
import { useRouter } from "next/navigation";
import { createProductSlug } from "../utils/product.utils";
import Image from "next/image";

export const AutocompleteLine = ({
  product,
  searchValue,
}: {
  product: ProductWithPrice;
  searchValue: string;
}) => {
  const router = useRouter();
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <strong key={index} className="font-bold text-blue-600">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="p-3 cursor-pointer border-b border-gray-200 last:border-b-0 hover:bg-gray-100"
      onClick={() => router.push(`/produit/${product.id}`)}
    >
      <div className="flex items-center gap-3">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className={clsx("font-medium text-gray-900")}>
            {highlightMatch(product.name, searchValue)}
          </h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              {product.brand}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">
            {product.price}
            {product.currency === "EUR" && "€"}
          </p>
        </div>
      </div>
    </div>
  );
};
