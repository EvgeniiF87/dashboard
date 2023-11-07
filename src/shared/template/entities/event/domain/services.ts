import { CreateEventInput } from "../application/port";
import { EventEntity } from "./events";

export class EventService {
  constructor() {}

  public createEvent(args: CreateEventInput): CreateEventInput {
    const newEvent = new EventEntity(args)

    return newEvent.eventFields;
  }
 
}