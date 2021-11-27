import { combineReducers } from "redux";
import { sampleReducer } from "./sample";
import { userReducer } from "./user";

const reducers = combineReducers({
  user: userReducer,
  sample: sampleReducer,
});

export default reducers;
