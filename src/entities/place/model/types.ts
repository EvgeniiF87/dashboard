import { PlaceDirections, PlaceModel } from "../domain";

type ParamsSearchPlaceType = {
  [key: string]: string | PlaceDirections | null;
  direction: PlaceDirections | null;
}

type InputsPlaceStateType = {
  // [key: string]: string | null | number | boolean;
  title: string;
  desc: string;
  public: boolean;
  existTimeEnd: string | null;
  existTimeStart: string | null;
  directionSelect: number;
}

type ErrorsPlaceStateType = {
  title: string | null;
  desc: string | null;
  existTimeStart: string | null;
  existTimeEnd: string | null;
  direction: string | null;
  preview: string | null;
  selection: string | null;
}

export type PlaceInitState = {
  places: PlaceModel[];
  currentPlace: PlaceModel | null;
  loading: boolean;
  loadingRemove: boolean;
  error: string | null;
  initTime: string;
  paramsSearch: ParamsSearchPlaceType;
  inputsPlace: InputsPlaceStateType;
  errorsList: ErrorsPlaceStateType;
};
