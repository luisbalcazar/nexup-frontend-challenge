import { Product } from "../../models/Product";
import { ProductCategory } from "../../models/ProductCategory";
import { ProductStatus } from "../../models/ProductStatus";

export const products : Product[] = [
  { id: 1, name: "Manzana Roja", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 1.50 },
  { id: 2, name: "Pechuga de Pollo", status: ProductStatus.Active, category: ProductCategory.Meat, price: 5.99 },
  { id: 3, name: "Zanahoria", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 0.89 },
  { id: 4, name: "Bife de Chorizo", status: ProductStatus.Active, category: ProductCategory.Meat, price: 12.75 },
  { id: 5, name: "Banana", status: ProductStatus.Inactive, category: ProductCategory.Fruit, price: 0.99 },
  { id: 6, name: "Brócoli", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 1.20 },
  { id: 7, name: "Pera Williams", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 2.30 },
  { id: 8, name: "Lomo de Cerdo", status: ProductStatus.Inactive, category: ProductCategory.Meat, price: 8.45 },
  { id: 9, name: "Espinaca", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 1.10 },
  { id: 10, name: "Durazno", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 3.60 }
]