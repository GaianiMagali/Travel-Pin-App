import { call, put } from "redux-saga/effects";
import { pinRequestActions } from "../pin/actions";
import { usersRequestActions } from "../user/actions";
import { api } from "./api-service";

function* fetchEntities(apiFunction, actions, id, param) {
  try {
    yield put(actions.pending());
    const data = yield call(apiFunction, param || id);
    if (data && !data.response && !data.isAxiosError) {
      yield put(actions.success(data));
    } else {
      yield put(
        actions.failed(
          data.response
            ? data.response.data.msg
            : "Parece que hay un error en el servidor, vuelva a reintentar en unos minutos"
        )
      );
    }
  } catch (error) {
    yield put(actions.failed(error));
  }
}

export const signIn = fetchEntities.bind(
  null,
  api.signIn,
  usersRequestActions
);

export const signUp = fetchEntities.bind(
  null,
  api.signUp,
  usersRequestActions
);

export const createPin = fetchEntities.bind(
  null,
  api.createPin,
  pinRequestActions
);

export const fetchPinItems = fetchEntities.bind(
  null,
  api.fetchPinItems,
  pinRequestActions
);


