import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { PaginationInitState } from "./types";

export const reducers = {
  
  eventsChangePage(
    state: PaginationInitState,
    action: PayloadAction<{ page: number }>
  ) {
    state.eventsCurrentPage = action.payload.page
  },

  placeChangePage(
    state: PaginationInitState,
    action: PayloadAction<{ page: number }>
  ) {
    state.placePagination = {
      ...state.placePagination,
      currentPage: action.payload.page
    }
  },

  placeChangePerPage(
    state: PaginationInitState,
    action: PayloadAction<{ perPage: number }>
  ) {
    state.placePagination = {
      ...state.placePagination,
      currentPage: 1,
      perPage: action.payload.perPage,
    }
  },

  
};
