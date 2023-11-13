import { PlaceInitState } from "./types";

const initialState: PlaceInitState = {
  places: [],
  currentPlace: null,
  loading: false,
  loadingRemove: false,
  error: null,
  initTime: "",
  paramsSearch: {
    direction: null,
  },
  inputsPlace: {
    title: "",
    desc: "",
    public: true,
    existTimeEnd: null,
    existTimeStart: null,
    directionSelect: 0,
  },
  errorsList: {
    title: null,
    desc: null,
    existTimeStart: null,
    existTimeEnd: null,
    direction: null,
    preview: null,
    selection: null,
  },
};

export { initialState };
