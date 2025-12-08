import { ReactNode } from "react";

export type ProductType = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductCategory = {
  name: string;
  icon: ReactNode;
  slug: string;
};
