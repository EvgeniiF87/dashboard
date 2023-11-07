import { createAppThunk } from '../../../../../shared';
import type { CreateEventInput, UpdateEventInput } from '../application/port';
import { userAdapter } from '../service/eventAdapter';


export const fetchAllEvents = createAppThunk('events/fetchAllEvents', async(_: void, { rejectWithValue })  => {
  const response = await userAdapter.events()

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  all events: ${response.errors[0].message}`)
  } 

  return response.data.events
})

export const fetchCreateEvents = createAppThunk('events/fetchCreateEvents', async(args: CreateEventInput, { rejectWithValue })  => {
  const response = await userAdapter.createEvent(args)

  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  return response.data.createEvent
})

export const fetchRemoveEvent = createAppThunk('events/fetchRemoveEvent', async({ id }: { id: number }, { rejectWithValue })  => {
  const response = await userAdapter.removeEvent(id) // TODO Error

  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  // return response.data.removeEvent
})

export const fetchUpdateEvent = createAppThunk('events/fetchUpdateEvent', async(args: UpdateEventInput, { rejectWithValue })  => {
  const response = await userAdapter.updateEvent(args) // TODO Error

  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  // return response.data.updateEvent
})




 


