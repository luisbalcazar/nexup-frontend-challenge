import React, { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';
import { ColumnFiltersState } from '../models/ColumFilter';

export const ProductManager: React.FC = () => {

   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
      {
        id: 'category',
        value: '',
      }
    ])

  return (
    <div>
      <CategoryFilter columnFilters={columnFilters} setColumnFilters={setColumnFilters as React.Dispatch<unknown>} />
      <ProductList columnFilters={columnFilters} setColumnFilters={setColumnFilters as React.Dispatch<unknown>}/>
    </div>
  );
};
