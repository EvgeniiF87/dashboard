import { createAppThunk } from '../../../shared';
import { paginationAdapter } from '../service/paginationAdapter';


export const fetchCountPlaces = createAppThunk('pagination/fetchCountPlaces', async(_: void, { rejectWithValue })  => {
  const response = await paginationAdapter.getPlacesCount()

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get count places: ${response.errors[0].message}`)
  } 

  return response.data.getPlacesCount.count
})

export const fetchCountEvents = createAppThunk('pagination/fetchCountEvents', async(_: void, { rejectWithValue })  => {
  const response = await paginationAdapter.getEventsCount()

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get count events: ${response.errors[0].message}`)
  } 

  return response.data.getEventsCount.count
})

export const fetchCountUsers = createAppThunk('pagination/fetchCountUsers', async(_: void, { rejectWithValue })  => {
  const response = await paginationAdapter.getUsersCount()

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get count users: ${response.errors[0].message}`)
  } 

  return response.data.getUsersCount.count
})


