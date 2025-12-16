import Image from "next/image";
import { Trash2 } from "lucide-react";

import { CartItemType } from "@/types";

const cartItems: CartItemType[] = [
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
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
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
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
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
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const CartItems = () => {
  return (
    <>
      <h2 className="font-semibold">Cart Items</h2>

      {cartItems.map((item) => (
        <div
          key={item.id + item.selectedColor + item.selectedSize}
          className="flex items-center justify-between"
        >
          {/* Image + details */}
          <div className="flex gap-8">
            <div className="relative size-32 overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={item.images[item.selectedColor]}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  Quantity: {item.quantity}
                </p>
                <p className="text-xs text-gray-500">
                  Size: {item.selectedSize}
                </p>
                <p className="text-xs text-gray-500">
                  Color: {item.selectedColor}
                </p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Delete btn */}
          <button
            onClick={() => console.log(`Remove ${item.name}`)}
            className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-400 transition-all duration-300 hover:bg-red-200"
          >
            <Trash2 className="size-3" />
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItems;
