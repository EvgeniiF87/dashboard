import type { PlaceService } from '../application/port'
import { PlaceApi } from '../api'
import { PlaceService as PlaceServiceEntitye } from '../domain/service'


export const placeAdapter: PlaceService = { 
  createPlace(args) {
      return PlaceApi.createPlace(args)
  },
  place(id) {
      return PlaceApi.place({ id })
  },
  places(params) {
      return PlaceApi.places(params)
  },
  removePlace(id) {
      return PlaceApi.removePlace({ id })
  },
  updatePlace(args) {
      return PlaceApi.updatePlace(args)
  },
  getFieldsCreatePlace(payload) {
      return PlaceServiceEntitye.createPlace(payload)
  },
}