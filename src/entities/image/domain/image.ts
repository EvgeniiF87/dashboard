import type { EventModel } from "../../event";
import type { PlaceModel } from "../../place";

export interface ImageModel {
  event: EventModel[];
  eventId?: number;
  id: string;
  path: string;
  place: PlaceModel;
  placeId?: number;
}


