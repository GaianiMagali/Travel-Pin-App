
export const pinActions = {
    PIN_SUCCESS: "PIN_SUCCESS",
    PIN_PENDING: "PIN_PENDING",
    PIN_FAILED: "PIN_FAILED",
    CREATE_PIN: "CREATE_PIN",
    LOAD_PINS: "LOAD_PINS",

    pinSuccess: (data) => ({
        type: pinActions.PIN_SUCCESS,
        payload: {
            data,
        },
    }),

    pinPending: () => ({
        type: pinActions.PIN_PENDING,
    }),

    pinFailed: (error) => ({
        type: pinActions.PIN_FAILED,
        payload: { error },
    }),

    createPin: (username, title, desc, rating, lat, long) => ({
        type: pinActions.CREATE_PIN,
        payload: { username, title, desc, rating, lat, long }
    }),

    loadPins: () => ({
        type: pinActions.LOAD_PINS,
    }),
};

export const pinRequestActions = {
    failed: pinActions.pinFailed,
    success: pinActions.pinSuccess,
    pending: pinActions.pinPending,
};