import { fetchProductById } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative h-80 md:h-[420px] border rounded-lg p-4 dark:border-gray-700">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>

          <p className="text-sm text-gray-500 mt-2">
            Category: {product.category}
          </p>

          <p className="text-xl font-semibold mt-4">${product.price}</p>

          <p className="mt-6 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
