import { User } from "@supabase/gotrue-js";

export interface TSampleState {
  name: string;
}

const initialState = {
  name: "tomoya",
};

export type TSampleActionType = "create";

export type TSampleAction = {
  type: TSampleActionType;
  payload: User;
};

export const sampleReducer = (
  state: TSampleState = initialState,
  action: TSampleAction
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
