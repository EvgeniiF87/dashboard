import { useAppSelector } from "../../../shared";
import { infoSlice } from "./slice";

const infoSelect = (state: RootState) => state.info;
export const infoAction = infoSlice.actions;
export const infoReducer = infoSlice.reducer;

export const useInfoSelect = () => {
  return useAppSelector(infoSelect);
};
