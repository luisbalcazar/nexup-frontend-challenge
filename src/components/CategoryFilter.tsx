import { Description, Field, Input, Label, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import React from 'react';
import { ProductCategory } from '../models/ProductCategory';
import { ColumnFiltersState } from '../models/ColumFilter';

interface CategoryFilterProps {
  columnFilters?: ColumnFiltersState
  setColumnFilters: React.Dispatch<unknown>
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({setColumnFilters} : CategoryFilterProps) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumnFilters([{
      id: 'category',
      value: e.target.value
    }])
  }

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setColumnFilters([{
      id: 'name',
      value: e.currentTarget.value
    }])
  }

  return (
    <>
      <div className="w-full ">
        <div className='md:grid lg:grid m-5 grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-4 items-start'>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Filtro de Categoria</Label>
            <Description className="text-sm/6 text-white/50">Por favor, selecciona una de las opciones disponibles.</Description>
            
            <div className="relative">
              <Select
                className={clsx(
                  'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                  'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                  '*:text-black'
                )}
                onChange={handleOnChange}
              >
                <option value="">Todos</option>
                {Object.values(ProductCategory).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
              <ChevronDownIcon
                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                aria-hidden="true"
              />
            </div>
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">Filtro de Nombre</Label>
            <Description className="text-sm/6 text-white/50">Por favor, escribe el Producto que desea buscar.</Description>
            
            <div className="relative">
              <Input
                className={clsx(
                  'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                  'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                )}
                maxLength={20}
                onKeyUp={handleOnKeyUp}
              />
            </div>
          </Field>
        </div>
    </div>
    </>);
};
