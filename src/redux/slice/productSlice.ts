import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsThunk,
  getProductsByIdThunk,
  deleteProductThunk,
} from '../thunk/thunk';

interface ProductState {
  products: any[];
  singleProduct: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  singleProduct: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getProductsThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // GET PRODUCT BY ID
      .addCase(getProductsByIdThunk.pending, state => {
        state.loading = true;
      })

      .addCase(getProductsByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })

      .addCase(getProductsByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteProductThunk.pending, state => {
        state.loading = true;
      })

      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.products = state.products.filter(
          item => item.id !== action.payload.productId,
        );

        if (state.singleProduct?.id === action.payload.productId) {
          state.singleProduct = null;
        }
      })

      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
