export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse border rounded-lg p-4">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 mt-4 rounded" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 mt-2 w-1/2 rounded" />
    </div>
  );
}
