import { HYDRATE } from "next-redux-wrapper";
import { Action, combineReducers } from "redux";
import user from "./user";

/**
 * root reducer 설정
 */
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
