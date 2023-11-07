import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { PlaceInitState } from './types';
import { OptionsSelectType } from '../../../shared/types'

export const reducers = {

  changeInputs(state: PlaceInitState, action: PayloadAction<{ field: string, value:  string |  OptionsSelectType | boolean }>) {
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
      timeStart: null,
      timeEnd: null,
      direction: null,
      preview: null,
      selection: null,
    }
  },

};
