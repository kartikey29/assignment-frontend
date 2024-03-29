import { Action } from "@reduxjs/toolkit";

export const loginState = (state = false, action: Action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case "LOGOUT":
      localStorage.removeItem("token");
      return false;
    default:
      return state;
  }
};

export const FBState = (state = false, action: Action) => {
  switch (action.type) {
    case "FB_INTEGRATED":
      return true;
    case "REMOVE_INTEGRATION":
      return false;
    default:
      return state;
  }
};
