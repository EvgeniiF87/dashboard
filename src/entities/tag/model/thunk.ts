import { createAppThunk } from '../../../shared';
import { CreateEventPlaceTagInput, CreateTagInput, UpdateEventPlaceTagInput, UpdateTagInput } from '../DTO/tag-dto';
import { tagAdapter } from '../service/tagAdapter';


export const fetchCreateTag = createAppThunk('tag/fetchCreateTag', async(payload: CreateTagInput, { rejectWithValue })  => {
  const response = await tagAdapter.createTag(payload)

  console.log('fetchCreateTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch create tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchRemoveTag = createAppThunk('tag/fetchRemoveTag', async(id: number, { rejectWithValue })  => {
  const response = await tagAdapter.removeTag(id)

  console.log('fetchRemoveTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch remove tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchUpdateTag = createAppThunk('tag/fetchUpdateTag', async(payload: UpdateTagInput, { rejectWithValue })  => {
  const response = await tagAdapter.updateTag(payload)

  console.log('fetchUpdateTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch update tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetOneTag = createAppThunk('tag/fetchGetOneTag', async({ id }: { id:number }, { rejectWithValue })  => {
  const response = await tagAdapter.tag(id)

  console.log('fetchGetOneTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get one tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchCreateEventPlaceTag = createAppThunk('tag/fetchCreateEventPlaceTag', async(payload: CreateEventPlaceTagInput, { rejectWithValue })  => {
  const response = await tagAdapter.createEventPlaceTag(payload)

  console.log('fetchCreateEventPlaceTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch create event or place tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchRemoveEventPlaceTag = createAppThunk('tag/fetchRemoveEventPlaceTag', async(payload: { id: number }, { rejectWithValue })  => {
  const response = await tagAdapter.removeEventPlaceTag(payload.id)

  console.log('fetchRemoveEventPlaceTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch remove event or place tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchUpdateEventPlaceTag = createAppThunk('tag/fetchUpdateEventPlaceTag', async(payload: UpdateEventPlaceTagInput, { rejectWithValue })  => {
  const response = await tagAdapter.updateEventPlaceTag(payload)

  console.log('fetchUpdateEventPlaceTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch update event or place tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetOneEventPlaceTag = createAppThunk('tag/fetchGetOneEventPlaceTag', async(payload: { id: number }, { rejectWithValue })  => {
  const response = await tagAdapter.eventPlaceTag(payload.id)

  console.log('fetchGetOneEventPlaceTag:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get one event or place tag: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetAllEventPlaceTags = createAppThunk('tag/fetchGetAllEventPlaceTags', async(_: void, { rejectWithValue })  => {
  const response = await tagAdapter.eventPlaceTags()

  console.log('fetchGetAllEventPlaceTags:', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch get all events or places tag: ${response.errors[0].message}`)
  } 

  return {}
})


