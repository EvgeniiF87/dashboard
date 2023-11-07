export type CreateInfoInput = {
  adress?: string | null;
  call_back?: boolean | null;
  eventId?: number | null;
  latitude?: string | null;
  longitude?: string | null;
  metro?: string | null;
  phone?: string | null;
  placeId?: number | null;
  site?: string | null;
  social?: string | null;
  time_from?: string | null;
  time_to?: string | null;
};

export type CreateInfoInputFields = {
  adress?: string | null;
  call_back?: boolean | null;
  eventId?: number | null;
  latitude?: string | null;
  longitude?: string | null;
  metro?: string | null;
  phone?: string | null;
  placeId?: number | null;
  site?: string | null;
  social?: string | null;
  dateFrom?: Date;
  dateTo?: Date;
};

export type UpdateInfoInput = {
  address?: string;
  call_back?: boolean;
  eventId?: number;
  id: number;
  latitude?: string;
  longitude?: string;
  metro?: string;
  phone?: string;
  placeId?: number;
  site?: string;
  social?: string;
  time_from?: string;
  time_to?: string;
};
export type UpdateInfoFields = {
  address?: string;
  call_back?: boolean;
  eventId?: number;
  id: number;
  latitude?: string;
  longitude?: string;
  metro?: string;
  phone?: string;
  placeId?: number;
  site?: string;
  social?: string;
  time_from?: Date;
  time_to?: Date;
};