import { produce } from "immer";
import { Action } from "redux";

// 사용자 타입
interface User {
  id: string | null;
  name: string | null;
}

// 초기 사용자 상태
export const initialState: User = {
  id: null,
  name: null,
}

// 액션 타입
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

const reducer = (state: User = initialState, action: Action & { data: {} }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER:
        break;
      case GET_USER_SUCCESS:
        draft.id = action.data.id;
        draft.name = action.data.name;
        break;
      default:
        break;
    }
  });

export default reducer;
