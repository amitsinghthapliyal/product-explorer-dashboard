import { Product } from "@/types/product";

interface Props {
  products: Product[];
  onChange: (value: string) => void;
}

export default function CategoryFilter({ products, onChange }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700"
      aria-label="Filter by category"
    >
      <option value="all">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
