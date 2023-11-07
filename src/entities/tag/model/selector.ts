import { useAppSelector } from "../../../shared";
import { tagSlice } from "./slice";

const tagSelect = (state: RootState) => state.tag;
export const tagAction = tagSlice.actions;
export const tagReducer = tagSlice.reducer;

export const useTagSelect = () => {
  return useAppSelector(tagSelect);
};
