interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products..."
      className="border px-3 py-2 rounded w-full sm:w-64 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Search products"
    />
  );
}
