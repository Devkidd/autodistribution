import Image from "next/image";
import {
  getAvailability,
  getPriceProduct,
  getProductById,
} from "../../utils/product.utils";
import clsx from "clsx";
import { Suspense } from "react";
import {
  ProductAvailability,
  ProductAvailabilitySkeleton,
} from "../../components/ProductAvailability";
import {
  ProductPrice,
  ProductPriceSkeleton,
} from "../../components/ProductPrice";
import {
  ProductDetails,
  ProductDetailsSkeleton,
} from "../../components/ProductDetails";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { product } = await getProductById(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="gap-8 p-8">
            <Suspense fallback={<ProductDetailsSkeleton />}>
              <ProductDetails productId={product.id} />
            </Suspense>
            <Suspense fallback={<ProductPriceSkeleton />}>
              <ProductPrice productId={product.id} />
            </Suspense>
            <Suspense fallback={<ProductAvailabilitySkeleton />}>
              <ProductAvailability productId={product.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
