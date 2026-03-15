import { Product } from "../../models/Product";
import { ProductCategory } from "../../models/ProductCategory";
import { ProductStatus } from "../../models/ProductStatus";

export const products : Product[] = [
  { id: 1, name: "Manzana Roja", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 100.12 },
  { id: 2, name: "Pechuga de Pollo", status: ProductStatus.Active, category: ProductCategory.Meat, price: 8000.12 },
  { id: 3, name: "Zanahoria", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 488.12  },
  { id: 4, name: "Bife de Chorizo", status: ProductStatus.Active, category: ProductCategory.Meat, price: 12000.12  },
  { id: 5, name: "Banana", status: ProductStatus.Inactive, category: ProductCategory.Fruit, price: 877.12 },
  { id: 6, name: "Brócoli", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 488.12  },
  { id: 7, name: "Pera Williams", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 241.12  },
  { id: 8, name: "Lomo de Cerdo", status: ProductStatus.Inactive, category: ProductCategory.Meat, price: 14000.12  },
  { id: 9, name: "Espinaca", status: ProductStatus.Active, category: ProductCategory.Vegetables, price: 617.12  },
  { id: 10, name: "Durazno", status: ProductStatus.Active, category: ProductCategory.Fruit, price: 120.12  }
]