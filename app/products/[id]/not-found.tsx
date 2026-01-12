import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-2xl font-bold mb-2">Product not found</h2>
      <p className="text-gray-500 mb-6">
        The product you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to products
      </Link>
    </div>
  );
}
