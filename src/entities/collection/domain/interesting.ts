import type { EventModel } from "../../event";
import type { PlaceModel } from "../../place";


export type InterestingCollectionModel = {
  category: InterestingCategorySelectModel[];
  collection: InterestingCollectionSelectionModel[];
  dateEnd?: Date | null;
  dateStart?: Date | null;
  existTimeEnd?: Date | null;
  existTimeStart?: Date | null;
  id: string;
  img?: string | null;
  priorities: number;
  title: string;
  views: number;
  whenStartToShow?: Date | null;
};

export type InterestingCollectionSelectionModel = {
  event?: EventModel[];
  eventId?: number | null;
  id: string;
  interesting: InterestingCollectionModel;
  interestingId?: number | null;
  place?: PlaceModel;
  placeId?: number | null;
};

export type InterestingCategoryModel = {
  id: string;
  ineresting: InterestingCategorySelectModel[];
  name: string;
};

export type InterestingCategorySelectModel = {
  category: InterestingCategoryModel[];
  categoryId: number;
  id: string;
  interesting: InterestingCollectionModel[];
  interestingId: number;
};

export type InterestingCollectionsAndCount = {
  collections: InterestingCollectionModel[];
  count: number;
};

export type InterestingCollections = {
  interestingCollections: InterestingCollectionsAndCount;
};
