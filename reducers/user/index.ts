import { User } from "@supabase/gotrue-js";

export interface TUserState {
  user: User | null;
}

const initialState = {
  user: null,
};

export type TUserActionType = "create";

export type TUserAction = {
  type: TUserActionType;
  payload: User;
};

export const testReducer = (
  state: TUserState = initialState,
  action: TUserAction
) => {
  switch (action.type) {
    case "create":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
