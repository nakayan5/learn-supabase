import { testReducer } from "../reducers/user";

import { createStore } from "redux";

export const store = createStore(testReducer);
