
export interface PaginationInitState {
  loading: boolean;
  error: string | null;
  eventsCurrentPage: number;//TODO REMOVE
  eventsPerPage: number;//TODO REMOVE
  eventsTotalCount: number | null;//TODO REMOVE
  placePagination: {
    currentPage: number;
    perPage: number;
    totalCount: number | null;
  }
  usersPagination: {
    currentPage: number;
    perPage: number;
    totalCount: number | null;
  }
  eventsPagination: {
    currentPage: number;
    perPage: number;
    totalCount: number | null;
  }
}
