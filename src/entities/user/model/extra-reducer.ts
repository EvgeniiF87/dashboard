import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchOneUserId, fetchRemoveUser, fetchUpdateUser } from "./thunk";
import { UserInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<UserInitState>
) => {


  builder
    .addCase(fetchUpdateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchUpdateUser.fulfilled, (state, action) => {
      const { email, id, name } = action.payload

      if (state.user && state.user.id === String(id)) {
          state.user.email = email
          state.user.name = name
      }

      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.usersList = action.payload

      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRemoveUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchRemoveUser.fulfilled, (state, action) => {
      const { id } = action.payload
      
      console.log(id, state.user?.id)

      if (state.user && state.user.id === String(id)) {
        state.user = null;
      }

      if (state.usersList.length > 0) {
        state.usersList = state.usersList.filter(user => user.id !== String(id))
      }
     
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchOneUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchOneUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchOneUserId.fulfilled, (state, action) => {
      state.userInfo = action.payload
     
      state.loading = false;
      state.error = null;
    });

};
