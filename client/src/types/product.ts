import type { LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
  slug: string;
};
