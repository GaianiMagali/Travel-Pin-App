import { pinActions } from "./actions";
import { pin_initial_state } from "./pin";

export const pinReducer = (state = pin_initial_state,{ payload, type }) => {
  switch (type) {
    case  pinActions.PIN_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: payload.data,
        error: null,
      };

    case  pinActions.PIN_PENDING:
      return {
        ...state,
        isPending: true,
      };

    case  pinActions.PIN_FAILED:
      return {
        ...state,
        isPending: false,
        data: null,
        error: payload.error,
      };

    default:
      return state;
  }
};