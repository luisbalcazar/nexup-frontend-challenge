import z from "zod";
import { ProductStatus } from "./ProductStatus";
import { ProductCategory } from "./ProductCategory";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.nativeEnum(ProductStatus), //nativeEnum esta obsoleto para zod pero es lo correcto para los enums
  category: z.nativeEnum(ProductCategory),
  price: z.number(),
});

export const productSSchema = z.array(productSchema);