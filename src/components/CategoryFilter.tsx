import { Description, Field, Label, Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import React, { useState } from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {}

export const CategoryFilter: React.FC<CategoryFilterProps> = () => {

  const [selected, setSelected] = useState<ProductCategory | ''>('');

  return (
    <>
      <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Category Filter</Label>
        <Description className="text-sm/6 text-white/50">Please, select one of the options availables to filter the Product List.</Description>
        <div className="relative">
          <Select
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
            value={selected}
            onChange={(e) => setSelected(e.target.value as ProductCategory)}
          >
            <option value="" selected>Todos</option>
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
    </div>
    </>);
};
