import { useAppSelector } from "../../../shared";
import { paginationSlice } from "./slice";

const paginationSelect = (state: RootState) => state.pagination;
export const paginationAction = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;

export const usePaginationSelect = () => {
  return useAppSelector(paginationSelect);
};
