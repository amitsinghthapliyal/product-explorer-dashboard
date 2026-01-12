"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-6">{error.message}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to products
      </Link>
    </div>
  );
}
