import { CustomError } from "../../../shared";
import { AllPlacesResponse, CreatePlaceFields, CreatePlaceInput, CreatePlaceResponse, GetAllPlacesInput, GetOnePlaceResponse, RemovePlaceResponse, UpdatePlaceInput, UpdatePlaceResponse } from "../DTO/place-dto";


export interface PlaceService {
  createPlace: (args: CreatePlaceInput) => Promise<CreatePlaceResponse | CustomError>;
  removePlace: (id: number) => Promise<RemovePlaceResponse | CustomError>;
  updatePlace: (args: UpdatePlaceInput) => Promise<UpdatePlaceResponse | CustomError>;
  place: (id: number) => Promise<GetOnePlaceResponse | CustomError>;
  places: (params: GetAllPlacesInput) => Promise<AllPlacesResponse | CustomError>;
  getFieldsCreatePlace: (payload: CreatePlaceFields) => { fields: CreatePlaceInput, preview: File } | { field: string,  message: string};
}