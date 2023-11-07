import { FetchService } from "../../../shared";
import * as eventDto from "../DTO/event-dto";
import * as schems from "./schems";

const getAllEvents = <T>(params: eventDto.GetEventsInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_EVENTS, variables: { params } });
};

const createEvents = <T>(variables: eventDto.CreateEventInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATED_NEW_EVENT, variables });
};

const updateEvent = <T>(variables: eventDto.UpdateEventInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_EVENT, variables });
};

const removeEvent = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_EVENT, variables }); // Errror
};

const getEvent = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ONE_EVENT, variables }); // Errror
};

const updateEventViews = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_EVENT_VIEWS, variables }); // Errror
};

export const EventsApi = {
  getAllEvents,
  createEvents,
  removeEvent,
  updateEvent,
  getEvent,
  updateEventViews,
};
