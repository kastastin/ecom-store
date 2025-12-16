import Link from "next/link";

import { ProductType } from "@/types";
import ProductCard from "@/components/product/ProductCard";
import ProductFilter from "@/components/product/ProductFilter";
import ProductCategories from "@/components/product/ProductCategories";

const products: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lightweight training tee designed for daily workouts and enhanced comfort during movement.",
    description:
      "This athletic T-shirt provides breathable fabric for high-intensity sessions and active routines. Durable stitching ensures long-lasting performance through repeated training cycles and challenging exercises. Soft materials deliver consistent comfort while maintaining flexibility during everyday fitness activities.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1gray.png",
      purple: "/products/1purple.png",
      green: "/products/1green.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Insulated zip jacket designed for cold-weather training, offering warmth and reliable comfort.",
    description:
      "This performance jacket delivers dependable insulation for outdoor workouts in colder climates. Lightweight materials provide consistent warmth without restricting movement during fast-paced activities outdoors. Durable construction ensures long-lasting comfort throughout daily training sessions and extended wear.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2gray.png", green: "/products/2green.png" },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Soft pullover crafted for everyday comfort, providing warmth and flexibility during movement.",
    description:
      "This essential pullover blends lightweight warmth with a relaxed fit for daily wear. Soft fabrics ensure lasting comfort through casual activities and dynamic routines. Durable construction supports long-term use while maintaining flexibility across varied conditions and everyday environments.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3green.png",
      blue: "/products/3blue.png",
      black: "/products/3black.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lightweight training shirt built for active performance, offering breathability and comfort during movement.",
    description:
      "This performance T-shirt enhances airflow for high-intensity workouts and versatile routines. Stretchy materials allow natural motion while maintaining dependable comfort through repeated sessions. Durable design ensures lasting quality across various training environments and everyday athletic activities.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4white.png", pink: "/products/4pink.png" },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Water-resistant fleece jacket built for outdoor training, offering warmth and reliable daily comfort.",
    description:
      "This StormFleece jacket provides dependable warmth while repelling light moisture during outdoor sessions. Soft materials ensure consistent comfort throughout active routines and colder environments. Durable construction supports long-term use across varied conditions and demanding training activities.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5red.png",
      orange: "/products/5orange.png",
      black: "/products/5black.png",
    },
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Lifestyle sneakers delivering soft cushioning and smooth transitions for everyday comfort and movement.",
    description:
      "These Air Max shoes offer responsive cushioning for daily wear and versatile activities. Breathable materials maintain lasting comfort through extended use and dynamic routines. Durable construction supports reliable performance across varied environments and consistent everyday movement.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6gray.png", white: "/products/6white.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse ",
    shortDescription:
      "High-energy running shoes designed for comfort, providing responsive cushioning during every stride.",
    description:
      "These performance shoes deliver energized cushioning for smooth transitions throughout daily runs. Breathable uppers keep feet comfortable during extended training sessions and varied conditions. Durable design ensures consistent support for athletes seeking reliable comfort across continuous performance activities.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7gray.png", pink: "/products/7pink.png" },
  },
  {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription:
      "Timeless denim jeans crafted for everyday wear, offering durability and comfort through movement.",
    description:
      "These classic denim jeans provide dependable durability for daily use and casual outfits. Soft yet sturdy fabric ensures long-lasting comfort across varied activities and environments. Tailored construction supports natural movement while delivering a timeless style for everyday wear.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8blue.png", green: "/products/8green.png" },
  },
];

type ProductListProps = {
  category: string;
  params: "HomePage" | "ProductsPage";
};

const ProductList = ({ category, params }: ProductListProps) => {
  return (
    <div className="w-full">
      <ProductCategories />

      {params === "ProductsPage" && <ProductFilter />}

      <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="mt-4 flex justify-end text-sm text-gray-500 underline"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
