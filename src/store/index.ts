import reducer from "@/reducers";
import saga from "@/sagas";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper } from "next-redux-wrapper";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";

/**
 * redux store 설정
 * - redux reducer 설정
 * - redux saga 설정
 * - redux devtools 설정
 *
 * Process(로직에 따라 여러번 혹은 saga를 안 거칠수도 있음)
 * 1. rootReducer
 * 2. concreteReducer
 * 3. rootSaga
 * 4. concreteSaga
 */
const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store: any = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(saga);
  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
