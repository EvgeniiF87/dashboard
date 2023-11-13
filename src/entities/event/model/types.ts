import { EventDirections, EventModel } from "../domain/events";

export type FiltersParamsType = {
  [key: string]: string | EventDirections | null;
  desc: string | null;
  title: string | null;
  direction: EventDirections | null;
  tag: string | null;
}

export type EventInitState = {
  events: EventModel[];
  loading: boolean;
  error: string | null;
  filtersParams: FiltersParamsType
};



