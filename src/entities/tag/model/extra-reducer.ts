import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  fetchCreateTag,
  fetchCreateEventPlaceTag,
  fetchGetAllEventPlaceTags,
  fetchGetOneEventPlaceTag,
  fetchGetOneTag,
  fetchRemoveEventPlaceTag,
  fetchRemoveTag,
  fetchUpdateEventPlaceTag,
  fetchUpdateTag,
} from "./thunk";
import { TagInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<TagInitState>
) => {
  builder
    .addCase(fetchUpdateTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchUpdateTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchUpdateEventPlaceTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUpdateEventPlaceTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchUpdateEventPlaceTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRemoveTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchRemoveTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveEventPlaceTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRemoveEventPlaceTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchRemoveEventPlaceTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetOneTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetOneTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetOneTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetOneEventPlaceTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetOneEventPlaceTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetOneEventPlaceTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchGetAllEventPlaceTags.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetAllEventPlaceTags.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchGetAllEventPlaceTags.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchCreateEventPlaceTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCreateEventPlaceTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCreateEventPlaceTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    
  builder
    .addCase(fetchCreateTag.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCreateTag.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(fetchCreateTag.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
};
