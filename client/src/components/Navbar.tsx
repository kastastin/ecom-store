import Link from "next/link";
import Image from "next/image";
import { Bell, Home } from "lucide-react";

import Searchbar from "@/components/Searchbar";
import CartIcon from "@/components/cart/CartIcon";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={36}
          height={36}
          className="size-6 md:size-9"
        />
        <p className="text-md hidden font-medium tracking-wide md:block">
          MicroStore
        </p>
      </Link>

      <div className="flex items-center gap-6">
        <Searchbar />
        <Link href="/">
          <Home className="size-4 text-gray-600" />
        </Link>
        <Bell className="size-4 cursor-not-allowed text-gray-600" />
        <CartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
