import { createAppThunk } from '../../../shared';
import { CreateImageInput, UpdateImageInput } from '../DTO/image-dto';
import { imageAdapter } from '../service';



export const fetchGetImage = createAppThunk('images/fetchGetImage', async(payload: { id: number }, { rejectWithValue })  => {
  const response = await imageAdapter.image(payload.id)

  console.log('fetchGetImage', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  get one image: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchGetImages = createAppThunk('images/fetchGetImages', async(_: void, { rejectWithValue })  => {
  const response = await imageAdapter.images()

  console.log('fetchGetImages', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch all images: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchCreateImages = createAppThunk('images/fetchCreateImages', async(payload: CreateImageInput, { rejectWithValue })  => {
  const response = await imageAdapter.createImage(payload)

  console.log('fetchCreateImages', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  create images: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchUpdateImages = createAppThunk('images/fetchUpdateImages', async(payload: UpdateImageInput, { rejectWithValue })  => {
  const response = await imageAdapter.updateImage(payload)

  console.log('fetchUpdateImages', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  update images: ${response.errors[0].message}`)
  } 

  return {}
})

export const fetchRemoveImages = createAppThunk('images/fetchRemoveImages', async({ id }: { id: number }, { rejectWithValue })  => {
  const response = await imageAdapter.removeImage(id)

  console.log('fetchRemoveImages', response)

  if ('errors' in response) {
    return rejectWithValue(`Failed fetch  remove images: ${response.errors[0].message}`)
  } 

  return {}
})






 


