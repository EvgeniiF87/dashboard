import { CustomError } from "../../../shared";
import type { CostOptionModel, EventPlaceCostOptionModel } from "../domain";


export type CreateCostOptionInput = {
  name: string;
};

export type CreateEventPlaceCostOptionInput = {
  costOptionId: number;
  eventId: number;
  placeId: number;
  price?: string;
};

export type UpdateEventPlaceCostOptionInput = {
  costOptionId?: number;
  eventId?: number;
  id: number;
  placeId?: number;
  price?: string;
};


export interface CostService {
  createCostOption: (args: CreateCostOptionInput) =>  Promise<{ data: {createCostOption: CostOptionModel } } | CustomError>
  removeCostOption: (id: number) => Promise<{ data: {removeCostOption: CostOptionModel } } | CustomError>
  createEventPlaceCostOption: (args: CreateEventPlaceCostOptionInput) => Promise<{ data: {createEventPlaceCostOption: EventPlaceCostOptionModel } } | CustomError>
  removeEventPlaceCostOption: (id: number) => Promise<{ data: {removeEventPlaceCostOption: EventPlaceCostOptionModel } } | CustomError>
  updateEventPlaceCostOption: (args: UpdateEventPlaceCostOptionInput) => Promise<{ data: {updateEventPlaceCostOption: EventPlaceCostOptionModel } } | CustomError>
  eventPlaceCostOption: (id: number) => Promise<{ data: {eventPlaceCostOption: EventPlaceCostOptionModel } } | CustomError>
  eventPlaceCostOptions: () => Promise<{ data: {eventPlaceCostOptions: EventPlaceCostOptionModel[] } } | CustomError>
}