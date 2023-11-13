import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { PlaceInitState } from './types';

export const reducers = {

  changeInputs(state: PlaceInitState, action: PayloadAction<{ field: string, value:  string |  number | boolean | null | { result: string | null, file: File | null }}>) {
    const { field, value } = action.payload

    return {
      ...state,
      inputsPlace: {
        ...state.inputsPlace,
        [field]: value
      }
      
    }
  },

  setInputsError(state: PlaceInitState, action: PayloadAction<{ field: string, message:  string }>) {
    const { field, message } = action.payload

    return {
      ...state,
      errorsList: {
        ...state.errorsList,
        [field]: message
      }
    }
  },

  clearError(state: PlaceInitState) {
    state.errorsList = {
      title: null,
      desc: null,
      existTimeStart: null,
      existTimeEnd: null,
      direction: null,
      preview: null,
      selection: null,
    }
  },

  clearInputs(state: PlaceInitState) {
    state.currentPlace = null;
    state.inputsPlace = {
      desc: '',
      public: true,
      title: '',
      existTimeEnd: null,
      existTimeStart: null,
      directionSelect: 0,
    }
  },

};
