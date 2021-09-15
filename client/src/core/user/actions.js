

export const userActions = {
    USERS_SUCCESS: "USERS_SUCCESS",
    USERS_PENDING: "USERS_PENDING",
    USER_FAILED: "USER_FAILED",
    USER_SIGN_IN: "USER_SIGN_IN",
    RESET_USER_VALUES: "RESET_USER_VALUES",
    LOG_OUT: "LOG_OUT",
    SET_USER_LOGGED: "SET_USER_LOGGED",
  
    usersSuccess: (data) => ({
      type: userActions.USERS_SUCCESS,
      payload: {
        data,
      },
    }),
  
    usersPending: () => ({
      type: userActions.USERS_PENDING,
    }),
  
    usersFailed: (error) => ({
      type: userActions.USER_FAILED,
      payload: { error },
    }),
  
    userSignIn: (username, password ) => ({
      type: userActions.USER_SIGN_IN,
      payload: { username, password },
    }),
  
  };
  
  export const usersRequestActions = {
    failed: userActions.usersFailed,
    success: userActions.usersSuccess,
    pending: userActions.usersPending,
  };