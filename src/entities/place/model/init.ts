import { PlaceInitState } from "./types";

const initialState: PlaceInitState = {
  places: [],
  loading: false,
  error: null,
  initTime: "",
  paramsSearch: {
    direction: null,
  },
  inputsPlace: {
    title: "",
    desc: "",
    public: true,
    directionSelect: {
      id: "0",
      value: "SelectDirection",
      label: "Выберите категорию",
    },
  },
  errorsList: {
    title: null,
    desc: null,
    timeStart: null,
    timeEnd: null,
    direction: null,
    preview: null,
    selection: null,
  },
};

export { initialState };
