import { favoritesTypes } from "../types";

export function addFavorite(id) {
  return function (dispatch) {
    dispatch({
      type: favoritesTypes.ADD_FAVORITE,
      payload: { id },
    });
  };
}

export function removeFavorite(id) {
  return function (dispatch) {
    dispatch({
      type: favoritesTypes.REMOVE_FAVORITE,
      payload: { id },
    });
  };
}