import { EventDirections } from "../domain/events";

export type CreateEventInput = {
  desc: string;
  direction: EventDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  whenStartToShow?: string;
  preview: string;
  publish?: boolean;
  recommendation?: boolean;
  title: string;
  userId: number;
};
export interface CreateEventInputService {
  dateFrom: Date;
  dateTo: Date;
  dateStart: Date;
  desc: string;
  direction: string;
  preview: string;
  publish?: boolean;
  recommendation?: boolean;
  title: string;
  userId: number;
};

export type GetEventsInput = {
  direction?: EventDirections, 
  skip?: number, 
  take?: number,
  tag?: string,
  title?: string,
  desc?: string,
};

export type UpdateEventInput = {
  desc?: string;
  direction?: EventDirections;
  existTimeEnd?: string; 
  existTimeStart?: string;
  id: number;
  preview?: string;
  publish?: boolean;
  recommendation?: boolean;
  title?: string;
  whenStartToShow?: string;
};