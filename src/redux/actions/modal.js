import { modalTypes } from "../types";

export function openModal(data) {
  return function (dispatch) {
    dispatch({
      type: modalTypes.OPEN_MODAL,
      payload: { ...data },
    });
  };
}

export function closeModal() {
  return function (dispatch) {
    dispatch({
      type: modalTypes.CLOSE_MODAL,
    });
  };
}
