import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import * as thunk from "./thunk";
import { PlaceInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<PlaceInitState>
) => {
  builder
    .addCase(thunk.fetchUpdatePlace.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fetchUpdatePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchUpdatePlace.fulfilled, (state, ) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(thunk.fetchRemovePlace.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fetchRemovePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchRemovePlace.fulfilled, (state, ) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(thunk.fetchGetOnePlace.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fetchGetOnePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchGetOnePlace.fulfilled, (state, ) => {
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(thunk.fetchAllPlaces.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fetchAllPlaces.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchAllPlaces.fulfilled, (state, action) => {
      state.places = action.payload
      
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(thunk.fetchCreatePlace.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fetchCreatePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchCreatePlace.fulfilled, (state, ) => {
      state.loading = false;
      state.error = null;

   state.inputsPlace = {
          title: '',
          desc: '',
          directionSelect: { id: '0', value: 'SelectDirection', label: 'Выберите категорию' },
          public: true,
        }
      
        
    });
    
};
