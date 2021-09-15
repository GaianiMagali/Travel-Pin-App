import { all } from "redux-saga/effects";
import { pinSaga } from "./pin/sagas";
import { userSaga } from "./user/sagas";


export default function* sagas() {
    yield all([
     ...userSaga,
     ...pinSaga
    ]);
}