import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchCreateInfo, fetchGetAllInfo, fetchGetOneInfo, fetchRemoveInfo, fetchUpdateInfo } from "./thunk";
import { InfoInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<InfoInitState>
) => {
  builder
    .addCase(fetchCreateInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCreateInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCreateInfo.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchUpdateInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchUpdateInfo.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRemoveInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchRemoveInfo.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetOneInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetOneInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetOneInfo.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetAllInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetAllInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetAllInfo.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

};
