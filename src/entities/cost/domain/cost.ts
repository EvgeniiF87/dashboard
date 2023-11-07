import { EventModel } from "../../event";
import { PlaceModel } from "../../place";

export interface EventPlaceCostOptionModel {
  costOption: CostOptionModel;
  costOptionId: number;
  event: EventModel;
  eventId: number;
  id: string;
  place: PlaceModel;
  placeId: number;
  price: string;
}

export interface CostOptionModel  {
  cost: EventPlaceCostOptionModel[];
  id: string;
  name: string;
};

