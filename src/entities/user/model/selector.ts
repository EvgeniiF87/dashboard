import { useAppSelector } from "../../../shared";
import { userSlice } from "./slice";

const userSelect = (state: RootState) => state.user;
export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;

export const useUserSelect = () => {
  return useAppSelector(userSelect);
};
