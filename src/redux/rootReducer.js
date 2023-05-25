// Core

import { combineReducers } from "redux";

// Reducers

import { productsReducer as products } from "./reducers/products";
import { cartReducer as cart } from "./reducers/cart";
import { favoritesReducer as favorites } from "./reducers/favorites";
import { modalReducer as modal } from "./reducers/modal";

export const rootReducer = combineReducers({
  products,
  cart,
  favorites,
  modal,
});
