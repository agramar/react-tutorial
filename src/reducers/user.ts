import { GET_USER_REQUEST, GET_USER_SUCCESS } from "@/actions/user";
import { produce } from "immer";
import { Action } from "redux";

export interface UserState {
  id: string | null;
  name: string | null;
}

export const initialState: UserState = {
  id: null,
  name: null,
}

const reducer = (state: UserState = initialState, action: Action & { payload: any }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        break;
      case GET_USER_SUCCESS:
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        break;
      default:
        break;
    }
  });

export default reducer;
