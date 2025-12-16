import { ProductType } from "@/types";

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartStepType = {
  id: number;
  title: string;
};
