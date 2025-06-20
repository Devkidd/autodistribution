import Image from "next/image";
import { getProductById } from "../utils/product.utils";

export const ProductDetails = async ({ productId }: { productId: string }) => {
  const { product } = await getProductById(productId);
  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-[100px_2fr] gap-8 p-8">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={product?.image}
          alt={product?.name}
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product?.name}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {product?.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {product?.category}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {product?.brand}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-[100px_2fr] gap-8 p-8">
      <div className="aspect-square overflow-hidden rounded-lg">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="space-y-6">
        <div>
          <span className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></span>
          <span className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></span>
        </div>
        <div>
          <span className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></span>
          <span className="w-40 h-10 bg-gray-200 animate-pulse rounded-md"></span>
        </div>
      </div>
    </div>
  );
};
