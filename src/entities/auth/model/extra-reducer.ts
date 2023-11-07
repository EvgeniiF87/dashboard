import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAuthorization } from "./thunk";
import { AuthInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<AuthInitState>
) => {
  builder
    .addCase(fetchAuthorization.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAuthorization.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
      state.authorization = false;
    })
    .addCase(fetchAuthorization.fulfilled, (state, action) => {
      const { role, token, userId } = action.payload

      state.authorization = true;
      state.role = role
      state.userId = userId
      state.token = token
      
      state.loading = false;
      state.error = null;
    });
 
};
