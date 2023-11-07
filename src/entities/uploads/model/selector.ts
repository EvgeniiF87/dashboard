import { useAppSelector } from "../../../shared";
import { uploadSlice } from "./slice";

const uploadSelect = (state: RootState) => state.upload;
export const uploadAction = uploadSlice.actions;
export const uploadReducer = uploadSlice.reducer;

export const useUploadSelect = () => {
  return useAppSelector(uploadSelect);
};
