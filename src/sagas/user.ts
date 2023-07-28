import { GET_USER_REQUEST, GET_USER_SUCCESS } from "@/actions/user";
import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

export default function* userSaga() {
  yield all([
    fork(watchGetUser)
  ]);
};

function* watchGetUser() {
  yield takeLatest(GET_USER_REQUEST, getUser);
}

function* getUser(action: Action & { data: {} }) {
  const { id, name } = yield call(getUserApi, action.data);
  yield put({
    type: GET_USER_SUCCESS,
    data: { id, name },
  });
}

function getUserApi(data: {}) {
  return data;
}
