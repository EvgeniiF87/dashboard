import { FetchService } from "../../../shared"
import type { GetTotalCountEventsResponse, GetTotalCountPlacesResponse, GetTotalCountUsersResponse } from "../DTO/pagination-dto";
import * as schems from "./schems";


const getPlacesCount = (): Promise<GetTotalCountPlacesResponse> => {
  return FetchService.graphQl({ query: schems.GET_COUNT_PLACES })
}

const getEventsCount = (): Promise<GetTotalCountEventsResponse> => {
 return FetchService.graphQl({ query: schems.GET_COUNT_EVENTS })
}

const getUsersCount = (): Promise<GetTotalCountUsersResponse> => {
 return FetchService.graphQl({ query: schems.GET_COUNT_USERS }) 
}


export const PaginationApi = {
  getPlacesCount,
  getEventsCount,
  getUsersCount,
}