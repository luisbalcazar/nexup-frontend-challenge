import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from '../models/Product'
import { getAllProducts } from '../services/ProductAPI'

interface ProductState {
  products: Product[],
  loading: boolean,
  error: string | null
}

const initialState: ProductState = { 
  products: [],
  loading: false,
  error: null
}

export const getProducts = createAsyncThunk(
  'products/getAll',
  async () => getAllProducts()
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
        state.products = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Error desconocido'
      })
  },
})

export const { clearProducts } = productsSlice.actions
export default productsSlice.reducer