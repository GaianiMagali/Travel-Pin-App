import { userActions } from "./actions";
import { user_initial_state } from "./user";

export const userReducer = (state = user_initial_state, { payload, type }) => {
  switch (type) {
    case userActions.USERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: payload.data,
        error: null,
      };

    case userActions.USERS_PENDING:
      return {
        ...state,
        isPending: true,
      };

    case userActions.USER_FAILED:
      return {
        ...state,
        isPending: false,
        data: null,
        error: payload.error,
      };
    // case userActions.RESET_USER_VALUES:
    //   return {
    //     ...state,
    //     isPending: false,
    //     data: null,
    //     error: null,
    //   };
    // case userActions.SET_USER_LOGGED:
    //   return {
    //     ...state,
    //     isPending: false,
    //     data: payload.data,
    //     error: null,
    //   };

    default:
      return state;
  }
};