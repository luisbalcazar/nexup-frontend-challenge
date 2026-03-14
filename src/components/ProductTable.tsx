import React from 'react'
import { Product } from '../models/Product'
import { ColumnDef, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

interface IProductTableProps {
    products: Product[]
}

const columns: ColumnDef<Product>[] = [
  {
    header: 'Nombre',
    accessorKey: 'name'
  },
  {
    header: 'Categoria',
    accessorKey: 'category'
  },
  {
    header: 'Precio',
    accessorKey: 'price'
  },
  {
    header: 'Estado',
    accessorKey: 'status'
  },
]

export const ProductTable = ({products} : IProductTableProps) => {
    const table = useReactTable<Product>({
        data: products,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
  return (
     <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 text-white">
            <thead>
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
                    <td key={cell.id}>
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
