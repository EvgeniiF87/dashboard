import { CustomError } from "../../../shared";
import {  EventModel } from "../domain/events";
import { CreateEventInput, GetEventsInput, UpdateEventInput } from "../DTO/event-dto";


export interface EventService {
  createEvent: (args: CreateEventInput) => Promise<{ data: {createEvent: EventModel } } | CustomError>;
  removeEvent:  (id: number) => Promise<{ data: {removeEvent: EventModel } } | CustomError>;
  updateEvent:  (args: UpdateEventInput) => Promise<{ data: {updateEvent: EventModel } } | CustomError>;
  updateEventViews:  (id: number) => Promise<{ data: {updateEventViews: EventModel } } | CustomError>;
  event: (id: number) => Promise<{ data: {event: EventModel } } | CustomError>;
  events: (args: GetEventsInput) => Promise<{ data: { events: EventModel[] } } | CustomError>;
}