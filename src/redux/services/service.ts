import axiosInterceptor from '../../utils/axiosInterceptor';
import { METHODS, replaceUrl, SERVICE_ROUTES } from '../constants';
export interface AddProductPayload {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export const getProductsService = async () => {
  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.GET_ALL_PRODUCTS,
    method: METHODS.GET,
  });

  return response.data;
};
export const getProductsByIdService = async (productId: number) => {
  const response = await axiosInterceptor({
    url: replaceUrl(SERVICE_ROUTES.GET_SINGLE_PRODUCT, {
      id: productId,
    }),
    method: METHODS.GET,
  });

  return response.data;
};
export const addProductService = async (data: AddProductPayload[]) => {
  const response = await axiosInterceptor({
    url: SERVICE_ROUTES.ADD_NEW_PRODUCT,
    method: METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });

  return response.data;
};
export const updateProductService = async (
  productId: number,
  data: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  },
) => {
  const response = await axiosInterceptor({
    url: `${SERVICE_ROUTES.UPDATE_PRODUCT}/${productId}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });

  return response.data;
};
export const deleteProductService = async (productId: number) => {
  const response = await axiosInterceptor({
    url: replaceUrl(SERVICE_ROUTES.DELETE_PRODUCT, {
      id: productId,
    }),
    method: METHODS.DELETE,
  });

  return response.data;
};
