import { CreateEventInput } from "../../event";
import { CreateInfoInput } from "../../info/DTO/info-dto";

export type InputInitState = {
  error: string | null;
  
  createProgressEvent: number;
  createEventInputs: CreateEventInputs
};

export type CreateEventInputs = {

  event: CreateEventInput
  info: CreateInfoInput

  title: string;
  desc: string;
  recomend: boolean;
  publid: boolean;
  place: string;
  dateFrom: Date;
  dateTo: Date;
  metro: string;
  timeFrom: string;
  timeTo: string;
  defferred: boolean;
  sait: string;
  phone: string;
  social: string[];
  preview: File;
  images: File[];
  video: File[];
  tags: string[];
  payments: string; 
}




