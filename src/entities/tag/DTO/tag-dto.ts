export type CreateEventPlaceTagInput = {
  eventId?: number;
  placeId?: number;
  tagsId: number;
};

export type CreateTagInput = {
  name: string;
};

export type UpdateEventPlaceTagInput = {
  eventId?: number;
  id: number;
  placeId?: number;
  tagsId?: number;
};

export type UpdateTagInput = {
  id: number;
  name?: string;
};