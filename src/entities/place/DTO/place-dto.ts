import { PlaceDirections, PlaceModel } from "../domain";

export type CreatePlaceInput = {
  desc: string;
  direction: PlaceDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  preview: string;
  publish?: boolean;
  title: string;
  userId: number;
};

export type CreatePlaceFields = {
  desc: string;
  direction: string;
  existTimeEnd?: Date | string;
  existTimeStart?: Date | string;
  preview: File;
  publish?: boolean;
  title: string;
};

export type CreatePlaceResponse = {
  data: {
    createPlace: PlaceModel;
  };
};

export type UpdatePlaceInput = {
  desc?: string;
  direction?: PlaceDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  id: number;
  preview?: string;
  publish?: boolean;
  title?: string;
};

export type GetAllPlacesInput = {
  direction?: PlaceDirections;
  skip?: number;
  take?: number;
};

export type UpdatePlaceResponse = {
  data: { updatePlace: PlaceModel };
};

export type RemovePlaceResponse = {
  data: { removePlace: PlaceModel };
};

export type GetOnePlaceResponse = {
  data: { place: PlaceModel };
};
export type AllPlacesResponse = {
  data: { places: PlaceModel[] };
};

export type ErrorListType = {
  title: string;
  desc: string;
  timeStart: string;
  timeEnd: string;
  direction: string;
  preview: string;
  selection: string;
  exceedingDate: string;
};
