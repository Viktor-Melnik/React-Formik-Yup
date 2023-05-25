import { productsTypes } from "../types";

export function fillProducts(data) {
  return {
    type: productsTypes.FILL_PRODUCTS,
    payload: { data },
  };
}
export function fillProductsError(message) {
  return {
    type: productsTypes.FILL_PRODUCTS_ERROR,
    payload: { message },
  };
}
export function fillProductsLoaded() {
  return {
    type: productsTypes.FILL_PRODUCTS_LOADED,
  };
}

export function getProductsAsync() {
  return async function (dispatch) {
    try {
      const response = await fetch("./products.json");
      const data = await response.json();
      dispatch(fillProducts(data));
      dispatch(fillProductsLoaded());
    } catch (error) {
      dispatch(fillProductsError(error.message));
    }
  };
}
