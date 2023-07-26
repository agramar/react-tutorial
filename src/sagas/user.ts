import { Action } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  GET_USER, GET_USER_SUCCESS
} from "../reducers/user";

export default function* userSaga() {
  yield all([
    fork(watchGetUser)
  ]);
};

function* watchGetUser() {
  yield takeLatest(GET_USER, getUser);
}

function* getUser(action: Action & { data: {} }) {
  const { id, name } = yield call(getUserApi, action.data);
  yield put({
    type: GET_USER_SUCCESS,
    data: { id, name },
  });
}

function getUserApi(data: {}) {
  return {
    id: "agramar",
    name: "아그라마"
  };
}
