import { favoritesTypes } from "../types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage/localStorage.js";

const initialState = {
  productsInFavorites: getLocalStorage("Favorites"),
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case favoritesTypes.ADD_FAVORITE: {
      if (!state.productsInFavorites.includes(action.payload.id)) {
        const newFavorites = [...state.productsInFavorites, action.payload.id];
        setLocalStorage("Favorites", newFavorites);
        return {
          productsInFavorites: [...newFavorites],
        };
      }
      break;
    }
    case favoritesTypes.REMOVE_FAVORITE: {
      if (state.productsInFavorites.includes(action.payload.id)) {
        const newFavorites = state.productsInFavorites.filter(
          (product) => product !== action.payload.id
        );
        setLocalStorage("Favorites", newFavorites);
        return {
          productsInFavorites: [...newFavorites],
        };
      }
      break;
    }
    default:
      return state;
  }
}
