import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch products error:", error);
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  if (!id) return null;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}
