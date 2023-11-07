import { PlaceDirections, PlaceModel } from "../domain";

type ParamsSearchPlaceType = {
  [key: string]: string | PlaceDirections | null;
  direction: PlaceDirections | null;
}

type InputsPlaceStateType = {
  title: string;
  desc: string;
  public: boolean;
  directionSelect: { id: string; value: string; label: string };
}

type ErrorsPlaceStateType = {
  title: string | null;
  desc: string | null;
  timeStart: string | null;
  timeEnd: string | null;
  direction: string | null;
  preview: string | null;
  selection: string | null;
}

export type PlaceInitState = {
  places: PlaceModel[];
  loading: boolean;
  error: string | null;
  initTime: string;
  paramsSearch: ParamsSearchPlaceType;
  inputsPlace: InputsPlaceStateType;
  errorsList: ErrorsPlaceStateType;
};
