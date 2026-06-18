//============ Async Routes ============================
export const ASYNC_ROUTES = {
  GET_ALL_PRODUCTS: 'getAllProducts',
  ADD_NEW_PRODUCT: 'addNewProduct',
  GET_SINGLE_PRODUCT: 'getSingleProduct',
  UPDATE_PRODUCT: 'updateProduct',
  DELETE_PRODUCT: 'deleteProduct',
} as const;

//==================== Thunk Status =====================
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
} as const;

//==================== Types =====================
export type AsyncRoutesType = (typeof ASYNC_ROUTES)[keyof typeof ASYNC_ROUTES];

export type ThunkStatusType = (typeof THUNK_STATUS)[keyof typeof THUNK_STATUS];
