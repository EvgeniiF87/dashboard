import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { EventInitState, FiltersParamsType } from './types'
export const reducers = {
  changeFilter: (state: EventInitState, action: PayloadAction<FiltersParamsType>) => {
    state.filtersParams = {...action.payload}
  }
};
