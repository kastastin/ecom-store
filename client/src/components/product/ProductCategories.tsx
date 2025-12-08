"use client";

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
    icon: <ShoppingBasket className="size-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="size-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="size-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="size-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="size-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="size-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="size-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="size-4" />,
    slug: "gloves",
  },
];

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 hover:bg-gray-200"
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
