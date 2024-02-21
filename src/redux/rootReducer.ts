import { combineReducers } from "@reduxjs/toolkit";
import { loginState, FBState } from "./reducers/index";
const rootReducer = combineReducers({
  loginState,
  FBState,
});

export default rootReducer;
