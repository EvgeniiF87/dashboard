import { EventModel } from "../../event";

export type TagModel = {
  id: string;
  name: string;
  tags: EventPlaceTagModel[];
};

export type EventPlaceTagModel = {
  event: EventModel;
  eventId?: number;
  id: string;
  place: EventModel;
  placeId?: number;
  tags: TagModel;
  tagsId: number;
};
