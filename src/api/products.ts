import { Product } from '../models/Product';
import { products } from './data/productList';

// Change the return type if necessary
export const getProductList = (): Product[] => {
  return products;
};
