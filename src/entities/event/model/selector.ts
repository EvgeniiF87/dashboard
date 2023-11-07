import { useAppSelector } from "../../../shared";
import { eventsSlice } from "./slice";

const eventsSelect = (state: RootState) => state.events;
export const eventsAction = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;

export const useEventsSelect = () => {
  return useAppSelector(eventsSelect);
};
