export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 md:h-[420px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
        <div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mt-4" />
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mt-6" />
          <div className="space-y-3 mt-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
