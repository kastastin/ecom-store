"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";

import { ProductCategory } from "@/types";

const categories: ProductCategory[] = [
  {
    name: "All",
    icon: ShoppingBasket,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: Shirt,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: Footprints,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: Glasses,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: Briefcase,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: Venus,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: Shirt,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: Hand,
    slug: "gloves",
  },
];

const ProductCategories = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") ?? "all";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {categories.map(({ name, slug, icon: Icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => handleChange(slug)}
          className={`flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 hover:bg-white ${slug === selectedCategory ? "bg-white" : "text-gray-500"}`} // TODO: consider using cn util
        >
          <Icon className="size-4" />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductCategories;
