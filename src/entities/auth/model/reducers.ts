// import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { AuthInitState } from "./types";

export const reducers = {

  logoutAuth(state: AuthInitState) {
    state.authorization = false;
    state.role = '';
    state.token = null;
    state.userId = null;
  },
  
};
