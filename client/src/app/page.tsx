import Image from "next/image";

import ProductList from "@/components/product/ProductList";

type HomePageProps = {
  searchParams: Promise<{ category: string }>;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  const category = (await searchParams).category;

  return (
    <div className="flex w-full flex-col">
      <div className="relative mb-4 aspect-3/1 size-full">
        <Image
          src="/featured.png"
          alt="Featured Product"
          loading="eager"
          fill
        />
      </div>

      <ProductList params='HomePage' category={category} />
    </div>
  );
};

export default HomePage;
