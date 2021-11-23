import { User } from "@supabase/gotrue-js";
import { TUserAction } from "../../reducers/user";
import { TUserActionType } from "../../reducers/user";

export const createUserAction = (
  type: TUserActionType,
  data: User
): TUserAction => {
  return {
    type: type,
    payload: data,
  };
};
