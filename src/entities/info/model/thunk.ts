import { createAppThunk } from '../../../shared';
import { CreateInfoInput, UpdateInfoInput } from '../DTO/info-dto';
import { infoAdapter } from '../service/infoAdapter';


export const fetchCreateInfo = createAppThunk('info/fetchCreateInfo', async(payload: CreateInfoInput, { rejectWithValue })  => {
  const response = await infoAdapter.createInfo(payload)

  console.log('fetchCreateInfo', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch create info: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchUpdateInfo = createAppThunk('info/fetchUpdateInfo', async(payload: UpdateInfoInput, { rejectWithValue })  => {
  const response = await infoAdapter.updateInfo(payload)

  console.log('fetchUpdateInfo', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch update info: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchRemoveInfo = createAppThunk('info/fetchRemoveInfo', async({ id }: { id: number }, { rejectWithValue })  => {
  const response = await infoAdapter.removeInfo(id)

  console.log('fetchRemoveInfo', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch remove info: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetOneInfo = createAppThunk('info/fetchGetOneInfo', async({ id }: { id: number }, { rejectWithValue })  => {
  const response = await infoAdapter.info(id)

  console.log('fetchGetOneInfo', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch info: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetAllInfo = createAppThunk('info/fetchGetAllInfo', async(_: void, { rejectWithValue })  => {
  const response = await infoAdapter.allInfo()

  console.log('fetchGetAllInfo', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch all info: ${response.errors[0].message}`)
  } 

  return {}
})





 


