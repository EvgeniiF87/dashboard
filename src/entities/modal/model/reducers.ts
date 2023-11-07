import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { ModalInitState } from "./types";

export const reducers = {
  
  setModalAction(state: ModalInitState, action: PayloadAction<boolean>) {
    state.isEventModalActive = action.payload;

    if (action.payload === false) {
      state.eventCurrentId = null;
    }

  },

  setEventCurrentMenegment(state: ModalInitState, action: PayloadAction<number>) {
    state.eventCurrentMenegment = action.payload;
  },

  activateEventModal(state: ModalInitState, action: PayloadAction<{  id: number }>) {
    state.eventCurrentMenegment = 0;
    state.isEventModalActive = true;
    state.eventCurrentId = action.payload.id
  },

  
};
