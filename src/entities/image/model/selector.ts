import { useAppSelector } from "../../../shared";
import { imagesSlice } from "./slice";

const imagesSelect = (state: RootState) => state.images;
export const imagesAction = imagesSlice.actions;
export const imagesReducer = imagesSlice.reducer;

export const useImagesSelect = () => {
  return useAppSelector(imagesSelect);
};
