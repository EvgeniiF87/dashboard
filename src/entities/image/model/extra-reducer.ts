import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchCreateImages, fetchGetImage, fetchGetImages, fetchUpdateImages, fetchRemoveImages } from "./thunk";
import { ImageInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<ImageInitState>
) => {
  builder
    .addCase(fetchGetImages.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetImages.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetImages.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetImage.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetImage.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchCreateImages.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCreateImages.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCreateImages.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchUpdateImages.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateImages.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchUpdateImages.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveImages.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRemoveImages.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchRemoveImages.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

};
