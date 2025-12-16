import ProductList from "@/components/product/ProductList";

type ProductsPageProps = {
  searchParams: Promise<{ category: string }>;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const category = (await searchParams).category;

  return (
    <div>
      <ProductList params="ProductsPage" category={category} />
    </div>
  );
};

export default ProductsPage;
