import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchUploadPreview } from "./thunk";
import { UploadsInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<UploadsInitState>
) => {
  builder
    .addCase(fetchUploadPreview.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUploadPreview.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
      
    })
    .addCase(fetchUploadPreview.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
 
};
