import { FetchService } from "../../../../api"
import { CreateEventInput, UpdateEventInput } from "../application/port"
import { CREATED_NEW_EVENT, GET_ALL_EVENTS, GET_ONE_EVENT, REMOVE_EVENT, UPDATE_EVENT, UPDATE_EVENT_VIEWS } from "./schems"


const getAllEvents = <T>(): Promise<T> => {
 return FetchService.graphQl({ query: GET_ALL_EVENTS })
}

const createEvents = <T>(variables: CreateEventInput): Promise<T> => {
 return FetchService.graphQl({ query: CREATED_NEW_EVENT, variables })
}

const updateEvent = <T>(variables: UpdateEventInput): Promise<T> => {
 return FetchService.graphQl({ query: UPDATE_EVENT, variables }) 
}

const removeEvent = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: REMOVE_EVENT, variables }) // Errror
}

const getEvent = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: GET_ONE_EVENT, variables }) // Errror
}

const updateEventViews = <T>(variables: { id: number }): Promise<T> => {
 return FetchService.graphQl({ query: UPDATE_EVENT_VIEWS, variables }) // Errror
}

export const EventsApi = {
  getAllEvents,
  createEvents,
  removeEvent,
  updateEvent,
  getEvent,
  updateEventViews
}