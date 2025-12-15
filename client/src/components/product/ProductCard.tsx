"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import { ProductType } from "@/types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[color]}
            alt={product.name}
            fill
            className="object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <h2 className="font-medium">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>

        <div className="flex items-start gap-8 text-xs">
          {/* Sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              id="size"
              name="size"
              onChange={(e) => setSize(e.target.value)}
              className="rounded-md px-2 py-1 ring ring-gray-300"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((productColor) => (
                <div
                  key={productColor}
                  onClick={() => setColor(productColor)}
                  className={`cursor-pointer rounded-full border p-[1.2px] ${
                    productColor === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className="size-3.5 rounded-full"
                    style={{ backgroundColor: productColor }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price + cart */}
        <div className="mt-auto flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={() => console.log("add to cart")}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <ShoppingCart className="size-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
