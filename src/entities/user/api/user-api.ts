import { FetchService } from "../../../shared"
import {  GET_ALL_USERS, GET_USER_ID, USER_REMOVE, USER_UPDATE } from "./schems"


const update = <T>(variables: { id: number, email: string, name: string }): Promise<T> => {
 return FetchService.graphQl({ query: USER_UPDATE, variables })
}

const remove = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: USER_REMOVE, variables })
}

const getUserId = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: GET_USER_ID, variables })
}

const getAllUsers = <T>(): Promise<T> => {
 return FetchService.graphQl({ query: GET_ALL_USERS })
}

export const UserApi = {
  getAllUsers,
  getUserId,
  remove,
  update,
}

