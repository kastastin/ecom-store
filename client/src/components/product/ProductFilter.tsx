"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ProductFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="my-6 flex items-center justify-end gap-2 text-sm text-gray-500">
      <span>Sort by:</span>
      <select
        id="sort"
        name="sort"
        onChange={(e) => handleFilter(e.target.value)}
        className="rounded-sm p-1 shadow-md ring-1 ring-gray-200"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
