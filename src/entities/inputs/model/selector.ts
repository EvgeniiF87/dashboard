import { useAppSelector } from "../../../shared";
import { inputsSlice } from "./slice";

const inputsSelect = (state: RootState) => state.inputs;
export const inputsAction = inputsSlice.actions;
export const inputsReducer = inputsSlice.reducer;

export const useInputsSelect = () => {
  return useAppSelector(inputsSelect);
};
