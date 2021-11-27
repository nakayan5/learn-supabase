import { TSampleAction, TSampleActionType } from "../../reducers/sample";

export const createSampleAction = (
  type: TSampleActionType,
  payload: string
): TSampleAction => {
  return {
    type: type,
    payload: payload,
  };
};
