import Image from "next/image";

import ProductList from "@/components/product/ProductList";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative aspect-3/1 size-full">
        <Image
          src="/featured.png"
          alt="Featured Product"
          loading="eager"
          fill
        />
      </div>

      <ProductList />
    </div>
  );
};

export default HomePage;
