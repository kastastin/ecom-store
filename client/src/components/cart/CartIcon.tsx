"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="size-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 flex size-4 items-center justify-center rounded-full bg-amber-400 text-xs font-medium text-gray-600">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
