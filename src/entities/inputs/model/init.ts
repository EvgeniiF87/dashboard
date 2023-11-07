import { CreateEventInputs, InputInitState } from "./types";

const initialState: InputInitState = {
  error: null,
  createProgressEvent: 0,
  createEventInputs: {} as CreateEventInputs 
};

export { initialState };
