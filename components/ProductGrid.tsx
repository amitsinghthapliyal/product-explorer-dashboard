"use client";

import { Product } from "@/types/product";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";
import { useFavorites } from "@/hooks/FavoritesContext";

interface Props {
  products: Product[];
}

const ITEMS_PER_PAGE = 8;

export default function ProductGrid({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites } = useFavorites();

  const processedProducts = useMemo(() => {
    let result = products;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (showFavorites) {
      result = result.filter((p) => favorites.includes(p.id));
    }

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort, showFavorites, favorites]);

  const totalPages = Math.max(
    1,
    Math.ceil(processedProducts.length / ITEMS_PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedProducts = processedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="p-4 max-w-7xl mx-auto">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <div className="flex flex-wrap gap-3">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter products={products} onChange={setCategory} />
          <SortSelect value={sort} onChange={setSort} />

          <button
            type="button"
            onClick={() => setShowFavorites((prev) => !prev)}
            aria-pressed={showFavorites}
            aria-label={
              showFavorites ? "Show all products" : "Show favorite products"
            }
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
    border border-gray-300 dark:border-gray-700 
    bg-white dark:bg-gray-800 
    text-gray-700 dark:text-gray-300 
    hover:bg-gray-50 dark:hover:bg-gray-700 
    hover:border-gray-400 dark:hover:border-gray-600 
    active:scale-95 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            {showFavorites ? (
              <>All Products</>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Favorites
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid */}
      {paginatedProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-3 py-1 border rounded dark:border-gray-700
                  ${
                    currentPage === pageNumber
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : ""
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
