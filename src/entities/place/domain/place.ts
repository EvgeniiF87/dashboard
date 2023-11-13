import { InterestingCollectionSelectionModel } from "../../collection";
import { EventPlaceCostOptionModel } from "../../cost";
import type { ImageModel } from "../../image";
import type { InfoModel } from "../../info";
import type { EventPlaceTagModel } from "../../tag";

export enum PlaceDirections {
  Museums = "Museums",
  Other = "Other",
  Parks = "Parks",
  Restaurants = "Restaurants",
  Show = "Show",
  Space = "Space",
  Theaters = "Theaters",
  Tourism = "Tourism",
  Walk = "Walk",
}

export interface PlaceModel {
  categry: string;
  costOption: EventPlaceCostOptionModel[];
  dateEnd?: string;
  dateStart?: string;
  desc: string;
  direction: PlaceDirections;
  existTimeEnd?: string | null;
  existTimeStart?: string | null;
  id: number;
  images: ImageModel[];
  info: InfoModel[];
  interesting: InterestingCollectionSelectionModel[];
  preview?: string;
  publish: boolean;
  tags: EventPlaceTagModel[];
  title: string;
  views?: number;
  whenStartToShow?: Date;
}


