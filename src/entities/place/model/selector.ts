import { useAppSelector } from "../../../shared";
import { placeSlice } from "./slice";

const placeSelect = (state: RootState) => state.place;
export const placeAction = placeSlice.actions;
export const placeReducer = placeSlice.reducer;

export const usePlaceSelect = () => {
  return useAppSelector(placeSelect);
};
