import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/productSlice';
import { AppDispatch, RootState } from '../store/store';
import { Loading } from './Loading';
import { ProductTable } from './ProductTable';
import { Error } from './Error';

export const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
      dispatch(getProducts())
    }, [])

  if (loading) return (<Loading />)
  if (error) return (<Error />)

  return (
  <>
    <ProductTable  products={products}/>
  </>);
};
