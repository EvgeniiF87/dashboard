import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchCountEvents, fetchCountPlaces, fetchCountUsers } from "./thunk";
import { PaginationInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<PaginationInitState>
) => {
  builder
    .addCase(fetchCountEvents.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCountEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCountEvents.fulfilled, (state, action) => {
      state.eventsPagination = {
        ...state.eventsPagination,
        totalCount: action.payload,
      }

      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchCountPlaces.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCountPlaces.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCountPlaces.fulfilled, (state, action) => {
      state.placePagination = {
        ...state.placePagination,
        totalCount: action.payload,
      }

      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchCountUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCountUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCountUsers.fulfilled, (state, action) => {
      state.usersPagination = {
        ...state.usersPagination,
        totalCount: action.payload,
      }

      state.loading = false;
      state.error = null;
    });

};
