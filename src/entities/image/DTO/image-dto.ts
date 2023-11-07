export type CreateImageInput = {
  eventId?: number;
  path: string;
  placeId?: number;
};

export type UpdateImageInput = {
  eventId?: number;
  id: number;
  path?: string;
  placeId?: number;
};