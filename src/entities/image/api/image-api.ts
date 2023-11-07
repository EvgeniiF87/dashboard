import { FetchService } from "../../../shared"
import type { CreateImageInput, UpdateImageInput } from "../DTO/image-dto"
import { CREATE_IMAGE, GET_ALL_IMAGES, GET_IMAGE, REMOVE_IMAGE, UPDATE_IMAGE } from "./schems"


const createImage = <T>(variables: CreateImageInput): Promise<T> => {
 return FetchService.graphQl({ query: CREATE_IMAGE, variables })
}

const removeImage = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: REMOVE_IMAGE, variables })
}

const updateImage = <T>(variables: UpdateImageInput): Promise<T> => {
 return FetchService.graphQl({ query: UPDATE_IMAGE, variables }) 
}

const image = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: GET_IMAGE, variables }) 
}

const images = <T>(): Promise<T> => {
 return FetchService.graphQl({ query: GET_ALL_IMAGES })
}



export const ImageApi = {
  createImage,
  removeImage,
  updateImage,
  image,
  images,
}