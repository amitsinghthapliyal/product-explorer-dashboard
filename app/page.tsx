import ProductGrid from "@/components/ProductGrid";
import { fetchProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen">
      <ProductGrid products={products} />
    </main>
  );
}
