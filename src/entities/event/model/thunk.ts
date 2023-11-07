import { createAppThunk } from '../../../shared';
import { userAdapter } from '../service/eventAdapter';
import type { CreateEventInput, GetEventsInput, UpdateEventInput } from '../DTO/event-dto';


export const fetchAllEvents = createAppThunk('events/fetchAllEvents', async(args: GetEventsInput, { rejectWithValue })  => {
  const response = await userAdapter.events(args)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  all events: ${response.errors[0].message}`)
  } 

  return response.data.events
})

export const fetchCreateEvents = createAppThunk('events/fetchCreateEvents', async(args: CreateEventInput, { rejectWithValue })  => {
  const response = await userAdapter.createEvent(args)
  console.log(response)
  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  return response.data.createEvent
})

export const fetchRemoveEvent = createAppThunk('events/fetchRemoveEvent', async({ id }: { id: number }, { rejectWithValue })  => {
  const response = await userAdapter.removeEvent(Number(id)) // TODO Error

  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  return id
})

export const fetchUpdateEvent = createAppThunk('events/fetchUpdateEvent', async(args: UpdateEventInput, { rejectWithValue })  => {
  const response = await userAdapter.updateEvent(args) // TODO Error

  if ('errors' in response) {
    return rejectWithValue(`Failed create new event: ${response.errors[0].message}`)
  } 

  // return response.data.updateEvent
})




 


