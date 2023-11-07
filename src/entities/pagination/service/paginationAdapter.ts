import type { PaginationService } from '../application/port'
import { PaginationApi } from '../api/pagination-api'


export const paginationAdapter: PaginationService = { 
  getEventsCount() {
      return PaginationApi.getEventsCount()
  },
  getPlacesCount() {
    return PaginationApi.getPlacesCount()
  },
  getUsersCount() {
    return PaginationApi.getUsersCount()
  },
}