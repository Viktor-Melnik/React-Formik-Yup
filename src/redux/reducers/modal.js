import { modalTypes } from "../types";

const initialState = {
  isModalOpen: false,
  data: {
    header: "",
    text: "",
    actions: [],
    closeButton: true,
  },
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        data: {
          ...state.data,
          header: action.payload.header,
          text: action.payload.text,
          actions: action.payload.actions,
          closeButton: action.payload.closeButton,
        },
      };
    case modalTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        data: {
          ...state.data,
          header: "",
          text: "",
          actions: [],
          closeButton: true,
        },
      };
    default:
      return state;
  }
}
