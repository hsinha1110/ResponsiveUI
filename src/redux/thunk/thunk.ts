import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addProductService,
  deleteProductService,
  getProductsByIdService,
  getProductsService,
  updateProductService,
} from '../services/service';
import {
  ASYNC_ROUTES,
  METHODS,
  replaceUrl,
  SERVICE_ROUTES,
} from '../constants';
import axiosInterceptor from '../../utils/axiosInterceptor';

export const getProductsThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductsService();

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
export const getProductsByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_SINGLE_PRODUCT,
  async (productId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInterceptor({
        url: replaceUrl(SERVICE_ROUTES.GET_SINGLE_PRODUCT, {
          id: productId,
        }),
        method: METHODS.GET,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);

export const addProductThunk = createAsyncThunk(
  ASYNC_ROUTES.ADD_NEW_PRODUCT,
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await addProductService(payload);

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
export const updateProductThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_PRODUCT,
  async (
    {
      productId,
      data,
    }: {
      productId: number;
      data: {
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      };
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await updateProductService(productId, data);

      return response;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);

export const deleteProductThunk = createAsyncThunk(
  ASYNC_ROUTES.DELETE_PRODUCT,
  async (productId: number, { rejectWithValue }) => {
    try {
      const response = await deleteProductService(productId);

      return {
        productId,
        response,
      };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  },
);
