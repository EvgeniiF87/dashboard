import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PlaceService } from "../domain/service";
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
      state.loadingRemove = true;
      state.error = null;
    })
    .addCase(thunk.fetchRemovePlace.rejected, (state, action) => {
      state.loadingRemove = false;
      state.error = String(action.payload);
    })
    .addCase(thunk.fetchRemovePlace.fulfilled, (state, action) => {

      return  {
        ...state,
        places: state.places.filter(place => Number(place.id) !== action.payload),
        loadingRemove: false,
        error: null,
      }
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
    .addCase(thunk.fetchGetOnePlace.fulfilled, (state, action) => {
      const { desc, title, publish, direction, existTimeStart, existTimeEnd } = action.payload

      
      const dropDownDirectionList = PlaceService.getDropdownDirections();
      const findDirectionId = dropDownDirectionList.find(item => item.value === direction)
      
      state.currentPlace = {
        ...action.payload,
        existTimeEnd: existTimeEnd ? new Date(existTimeEnd).toString() : null, 
        existTimeStart: existTimeStart ? new Date(existTimeStart).toString() : null,
      }

      state.inputsPlace = {
        title,
        desc,
        existTimeEnd: existTimeEnd ? new Date(existTimeEnd).toString() : null, 
        existTimeStart: existTimeStart ? new Date(existTimeStart).toString() : null,
        directionSelect: findDirectionId ? Number(findDirectionId.id) : 0,
        public: publish
      }

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
          directionSelect: 0,
          public: true,
          existTimeEnd: null,
          existTimeStart: null,
        }
      
        
    });
    
};
