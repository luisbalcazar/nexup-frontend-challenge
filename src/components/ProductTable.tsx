import React from 'react'
import { Product } from '../models/Product'
import { ColumnDef, useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table';
import { ColumnFiltersState } from '../models/ColumFilter';
import { formatCurrency } from '../utils';

interface IProductTableProps {
    products: Product[],
    columnFilters: ColumnFiltersState
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}

const columns: ColumnDef<Product>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name',
  },
  {
    header: 'Categoria',
    accessorKey: 'category',
  },
  {
    header: 'Precio',
    accessorKey: 'price',
    cell: (item) => formatCurrency(item.getValue<number>())
  },
  {
    header: 'Estado',
    accessorKey: 'status',
    cell: (info) => info.getValue() === 'Active' ? 'Disponible' : 'Sin Stock',
  },
]

export const ProductTable = ({products, columnFilters, setColumnFilters} : IProductTableProps) => {

    console.log(columnFilters)
    
    const table = useReactTable<Product>({
        data: products,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
          columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
    })
    
  return (
     <div className="overflow-x-auto rounded-lg shadow m-5">
        <table className="min-w-full divide-y divide-gray-200 text-white">
            <thead className='bg-gray-500'>
              {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                  ))}
                  </tr>
              ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className='w-12 text-center'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
     </div>
  )
}
