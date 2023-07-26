import { API_URL } from "@/utils/axios";
import axios from "axios";
import { all } from "redux-saga/effects";

axios.defaults.baseURL = API_URL;

export default function* rootSaga() {
  yield all([
    // TODO SAGA 합쳐야함
  ]);
}
