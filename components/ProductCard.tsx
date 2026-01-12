"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/FavoritesContext";
import { Heart } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <article className="border rounded-lg p-4 flex flex-col dark:border-gray-700">
      <div className="relative h-40 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>

      <p className="text-xs text-gray-500 mt-1">{product.category}</p>
      <p className="font-bold mt-2">${product.price}</p>

      <div className="mt-auto flex justify-between items-center pt-4">
        <Link
          href={`/products/${product.id}`}
          className="text-sm text-blue-600"
        >
          View Details
        </Link>

        <button
          onClick={() => toggleFavorite(product.id)}
          aria-label="Toggle favorite"
          className="transition hover:scale-110"
        >
          <Heart
            size={20}
            className={favorite ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </button>
      </div>
    </article>
  );
}
