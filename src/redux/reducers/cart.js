import { cartTypes } from "../types";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../../utils/localStorage/localStorage.js";

const initialState = {
  productsInCart: getLocalStorage("Cart"),
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartTypes.ADD_TO_CART: {
      if (!state.productsInCart.includes(action.payload.id)) {
        const newCart = [...state.productsInCart, action.payload.id];
        setLocalStorage("Cart", newCart);
        return {
          productsInCart: [...newCart],
        };
      }
      break;
    }
    case cartTypes.REMOVE_FROM_CART:
      if (state.productsInCart.includes(action.payload.id)) {
        const newCart = state.productsInCart.filter(
          (product) => product !== action.payload.id
        );
        setLocalStorage("Cart", newCart);
        return {
          productsInCart: [...newCart],
        };
      }
      break;
    case cartTypes.EMPTY_CART:
      removeLocalStorage(action.payload.key);
      return {
        productsInCart: [],
      };
    default:
      return state;
  }
}
