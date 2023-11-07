import { EventModel } from "../domain/events";

export type EventInitState = {
  events: EventModel[];
  loading: boolean;
  error: string | null;
};




