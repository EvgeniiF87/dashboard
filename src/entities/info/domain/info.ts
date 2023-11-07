import type { EventModel } from "../../event";
import type { PlaceModel } from "../../place";

export interface InfoModel {
  adress?: string;
  call_back: boolean;
  event: EventModel[];
  eventId?: number;
  id: string;
  latitude?: string;
  longitude?: string;
  metro?: string;
  phone?: string;
  place: PlaceModel[];
  placeId?: number;
  site?: string;
  social?: string;
  time_from?: string;
  time_to?: string;
}

