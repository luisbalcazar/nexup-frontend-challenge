import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';

export const ProductManager: React.FC = () => {

  return (
    <div>
      <CategoryFilter />
      <ProductList />
    </div>
  );
};
