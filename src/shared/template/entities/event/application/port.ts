import { CustomError } from "../../../../types";
import { EventDirections, EventModel } from "../domain/events";

export type CreateEventInput = {
  desc: string;
  direction: EventDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  preview?: string;
  publish?: boolean;
  recommendation?: boolean;
  title: string;
  whenStartToShow?: string;
};

export type UpdateEventInput = {
  desc?: string;
  direction?: EventDirections;
  existTimeEnd?: string; 
  existTimeStart?: string;
  id: string;
  preview?: string;
  publish?: boolean;
  recommendation?: boolean;
  title?: string;
  whenStartToShow?: string;
};

export interface EventService {
  createEvent: (args: CreateEventInput) => Promise<{ data: {createEvent: EventModel } } | CustomError>;
  removeEvent:  (id: number) => Promise<{ data: {removeEvent: EventModel } } | CustomError>;
  updateEvent:  (args: UpdateEventInput) => Promise<{ data: {updateEvent: EventModel } } | CustomError>;
  updateEventViews:  (id: number) => Promise<{ data: {updateEventViews: EventModel } } | CustomError>;
  event: (id: number) => Promise<{ data: {event: EventModel } } | CustomError>;
  events: () => Promise<{ data: { events: EventModel[] } } | CustomError>;
}