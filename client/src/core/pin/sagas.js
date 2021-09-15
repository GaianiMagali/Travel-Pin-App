import { call, fork, takeEvery } from "redux-saga/effects";
import { fetchPinItems, createPin } from "../api";
import { pinActions } from "./actions";

export function* loadPins() {
    yield call(fetchPinItems);
}

export function* pinCreate({ payload }) {
    const { username, title, desc, rating, lat, long } = payload;
    yield call(createPin, { username, title, desc, rating, lat, long });
}

//Watchers
export function* watchLoadPins() {
    yield takeEvery(pinActions.LOAD_PINS, loadPins);
}

export function* watchCreatePin() {
    yield takeEvery(pinActions.CREATE_PIN, pinCreate);
}


//Root
export const pinSaga = [
    fork(watchLoadPins),
    fork(watchCreatePin),
];