import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        // TODO 리듀서 합쳐야함
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
