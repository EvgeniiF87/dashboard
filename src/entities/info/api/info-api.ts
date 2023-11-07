import { FetchService } from "../../../shared"
import { CreateInfoInput, UpdateInfoInput } from "../DTO/info-dto";
import { CREATE_INFO, GET_ALL_INFO, GET_INFO, REMOVE_INFO, UPDATE_INFO } from "./schems";


const createInfo = <T>(variables: CreateInfoInput): Promise<T> => {
 return FetchService.graphQl({ query: CREATE_INFO, variables })
}

const removeInfo = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: REMOVE_INFO, variables })
}

const updateInfo = <T>(variables: UpdateInfoInput): Promise<T> => {
 return FetchService.graphQl({ query: UPDATE_INFO, variables })
}

const info = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: GET_INFO, variables })
}

const allInfo = <T>(): Promise<T> => {
 return FetchService.graphQl({ query: GET_ALL_INFO })
}


export const InfoApi = {
  createInfo,
  removeInfo,
  updateInfo,
  info,
  allInfo,
}

