import { CustomError } from "../../../shared";
import type { GetTotalCountEventsResponse, GetTotalCountPlacesResponse, GetTotalCountUsersResponse } from "../DTO/pagination-dto";


export interface PaginationService {
  getPlacesCount: () => Promise<GetTotalCountPlacesResponse | CustomError>;
  getEventsCount: () => Promise<GetTotalCountEventsResponse | CustomError>;
  getUsersCount: () => Promise<GetTotalCountUsersResponse | CustomError>;
}