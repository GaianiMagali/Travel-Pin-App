import { call, fork, takeEvery, take } from "redux-saga/effects";
import { signIn } from "../api";
import { setUserLogged } from "../session";
import { userActions } from "./actions";

export function* loginUser({ payload }) {
    const { history, username, password } = payload;
    yield call(signIn, { username, password });
    //   history.push("/panel");
}

//Watchers
export function* watchLoginUser() {
    yield takeEvery(userActions.USER_SIGN_IN, loginUser);
}

export function* watchLoginUserSuccess() {
    while (true) {
        const { payload } = yield take(userActions.USERS_SUCCESS);
        setUserLogged(payload.data);
    }
}

//Root
export const userSaga = [
    fork(watchLoginUser),
    fork(watchLoginUserSuccess)
];