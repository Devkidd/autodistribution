"use client";

import { getProducts } from "../actions/autocomplete.action";
import { useCallback, useState } from "react";
import { ProductWithPrice } from "../types/products";
import { Search } from "lucide-react";
import clsx from "clsx";
import { AutocompleteLine } from "./AutocompleteLine";

export const Autocomplete = () => {
  const [products, setProducts] = useState<ProductWithPrice[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false);

  const handleChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof e.target.value !== "string") return;
      const value = e.target.value;
      setSearchValue(value);
      if (value.length > 2) {
        setIsSuggestionOpen(true);
        setIsLoading(true);
        const { productsWithPrice, isLoading } = await getProducts(value);
        setProducts(productsWithPrice);
        setIsLoading(isLoading);
        setIsLoading(false);
      } else {
        setIsSuggestionOpen(false);
        setProducts([]);
      }
    },
    [searchValue]
  );

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Rechercher votre produit
      </h1>
      <form>
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="Ex: Filtre à eau, filtre à air, etc."
            onChange={handleChange}
            className={clsx(
              "w-full border border-gray-300 rounded-md p-2 focus:outline-none",
              isSuggestionOpen && "rounded-b-none"
            )}
          />

          {searchValue.length > 2 && products.length === 0 && !isLoading && (
            <div className="flex items-center justify-center z-50 absolute top-full left-0 right-0 bg-white border-x border-b border-gray-300 rounded-b-md shadow-lg z-10 h-20 max-h-60 overflow-y-auto">
              <p className="text-gray-600 text-center text-xl font-bold">
                Aucun produit trouvé
              </p>
            </div>
          )}

          {isLoading && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 p-3">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">
                  Recherche en cours...
                </span>
              </div>
            </div>
          )}

          {products.length > 0 && (
            <div className=" z-50 absolute top-full left-0 right-0 bg-white border-x border-b border-gray-300 rounded-b-md shadow-lg z-10 max-h-60 overflow-y-auto">
              {products.map((product) => (
                <AutocompleteLine
                  key={product.id}
                  product={product}
                  searchValue={searchValue}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
