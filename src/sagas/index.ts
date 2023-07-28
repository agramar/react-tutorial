import { all, fork } from "redux-saga/effects";
import userSaga from "./user";

/**
 * root redux-saga 설정
 */
export default function* rootSaga() {
  yield all([
    fork(userSaga),
  ]);
}
