import { createAppThunk } from '../../../shared';
import { CreatePlaceInput, GetAllPlacesInput, UpdatePlaceInput } from '../DTO/place-dto';
import { placeAdapter } from '../service/placeAdapter';


export const fetchCreatePlace = createAppThunk('place/fetchCreatePlace', async(payload: CreatePlaceInput, { rejectWithValue })  => {
  const response = await placeAdapter.createPlace(payload)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch create place: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchRemovePlace = createAppThunk('place/fetchRemovePlace', async(payload: { id: number }, { rejectWithValue })  => {
  const response = await placeAdapter.removePlace(payload.id)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch remove place: ${response.errors[0].message}`)
  } 

  return response.data.removePlace.id
})

export const fetchUpdatePlace = createAppThunk('place/fetchUpdatePlace', async(payload: UpdatePlaceInput, { rejectWithValue })  => {
  const response = await placeAdapter.updatePlace(payload)

  console.log('fetchUpdatePlace:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch update place: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetOnePlace = createAppThunk('place/fetchGetOnePlace', async(payload: { id: number }, { rejectWithValue })  => {
  const response = await placeAdapter.place(payload.id)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get one place: ${response.errors[0].message}`)
  } 

  return response.data.place
})

export const fetchAllPlaces = createAppThunk('place/fetchAllPlaces', async(params: GetAllPlacesInput, { rejectWithValue })  => {
  const response = await placeAdapter.places(params)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  all events: ${response.errors[0].message}`)
  } 

  return response.data.places
})
