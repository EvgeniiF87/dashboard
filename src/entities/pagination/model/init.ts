import { EVENTS } from "../../../shared";
import {  PaginationInitState } from "./types";

const initialState: PaginationInitState = {
  error: null,
  loading: false,
  eventsCurrentPage: 1,
  eventsPerPage: EVENTS.perPage,
  eventsTotalCount: null,
  eventsPagination: {
    currentPage: 1,
    perPage: 10,
    totalCount: null, 
  },
  placePagination: {
    currentPage: 1,
    perPage: 10,
    totalCount: null, 
  },
  usersPagination: {
    currentPage: 1,
    perPage: 10,
    totalCount: null, 
  }
};

export { initialState };
