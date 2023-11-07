import { EVENTS } from "../../../shared";



export interface PaginationModel  {
  eventsCurrentPage: number;
  eventsPerPage: number;
}


class PaginationEntity {
  eventsCurrentPage: number;
  eventsPerPage: number;

  constructor() {
      this.eventsCurrentPage = 1;
      this.eventsPerPage = EVENTS.perPage
  }

 public get paginationState(): { eventsCurrentPage: number, eventsPerPage: number } {
    return {
      eventsCurrentPage: this.eventsCurrentPage,
      eventsPerPage: this.eventsPerPage,
    };
  }

}

export const paginationEntity = new PaginationEntity()


