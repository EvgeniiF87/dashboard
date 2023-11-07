import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAllEvents, fetchCreateEvents, fetchRemoveEvent } from "./thunk";
import { EventInitState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<EventInitState>
) => {
  builder
    .addCase(fetchAllEvents.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchAllEvents.fulfilled, (state, action) => {
      state.events = action.payload
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchCreateEvents.pending, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchCreateEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchCreateEvents.fulfilled, (state, action) => {
      state.events.unshift(action.payload)
      
      state.loading = false;
      state.error = null;
    });

  builder
    .addCase(fetchRemoveEvent.pending, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchRemoveEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : null;
    })
    .addCase(fetchRemoveEvent.fulfilled, (state, action) => {
      const eventIndex = state.events.findIndex(event => event.id === action.payload)

      if (eventIndex !== -1) {
      state.events.splice(eventIndex,1)
      }
      
      state.loading = false;
      state.error = null;
    });

 
};
