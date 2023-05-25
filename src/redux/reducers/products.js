import { productsTypes } from "../types";

const initialState = {
  products: [],
  error: "",
  loaded: false,
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productsTypes.FILL_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case productsTypes.FILL_PRODUCTS_LOADED:
      return {
        ...state,
        loaded: !state.loaded,
      };
    case productsTypes.FILL_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}