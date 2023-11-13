import { FetchService } from "../../../shared";
import * as placeDto from "../DTO/place-dto";
import * as schems from "./schems";


const createPlace = (createPlaceInput: placeDto.CreatePlaceInput): Promise<placeDto.CreatePlaceResponse> => {
  return FetchService.graphQl({ query: schems.CREATE_PLACE, variables: { createPlaceInput } })
}

const removePlace = ({ id }: { id: number }): Promise<placeDto.RemovePlaceResponse> => {
 return FetchService.graphQl({ query: schems.REMOVE_PLACE, variables: { removePlaceId: +id } })
}

const updatePlace = (updatePlaceInput: placeDto.UpdatePlaceInput): Promise<placeDto.UpdatePlaceResponse> => {
 return FetchService.graphQl({ query: schems.UPDATE_PLACE, variables: { updatePlaceInput } }) 
}

const place = (variables: { id: number }): Promise<placeDto.GetOnePlaceResponse> => {
 return FetchService.graphQl({ query: schems.GET_PLACE, variables }) 
}

const places = (params: placeDto.GetAllPlacesInput): Promise<placeDto.AllPlacesResponse> => {
 return FetchService.graphQl({ query: schems.GET_ALL_PLACES, variables: { params } }) 
}


export const PlaceApi = {
  createPlace,
  removePlace,
  updatePlace,
  place,
  places,
}