import { EventInitState } from "./types";

const initialState: EventInitState = {
  events: [],
  loading: false,
  error: null,
  filtersParams: {
    desc: null,
    title: null,
    direction: null,
    tag: null,
  }
};

export { initialState };
