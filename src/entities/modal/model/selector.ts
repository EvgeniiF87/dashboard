import { useAppSelector } from "../../../shared";
import { modalSlice } from "./slice";

const modalSelect = (state: RootState) => state.modal;
export const modalAction = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const useModalSelect = () => {
  return useAppSelector(modalSelect);
};
