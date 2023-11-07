import { CustomError } from "../../../shared";
import { InterestingCategoryModel, InterestingCategorySelectModel, InterestingCollectionModel, InterestingCollectionsAndCount, InterestingCollectionSelectionModel } from "../domain";

export type CreateInterestingCategoryInput = {
  name: string;
};

export type CreateInterestingCategorySelectInput = {
  categoryId: number;
  interestingId: number;
};

export type CreateInterestingCollectionInput = {
  existTimeEnd?: string | null;
  existTimeStart?: string | null;
  img?: string | null;
  priorities?: number | null;
  title: string;
  views?: number | null;
  whenStartToShow?: string | null;
};

export type CreateInterestingCollectionSelectionInput = {
  eventId?: number | null;
  interestingId?: number | null;
  placeId?: number | null;
};

export type UpdateInterestingCategoryInput = {
  id: number;
  name?: string;
};

export type UpdateInterestingCategorySelectInput = {
  categoryId?: number;
  id: number;
  interestingId?: number;
};

export type UpdateInterestingCollectionInput = {
  existTimeEnd?: string;
  existTimeStart?: string;
  id: number;
  img?: string;
  priorities?: number;
  title?: string;
  views?: number;
  whenStartToShow?: string;
};

export type UpdateInterestingCollectionSelectionInput = {
  eventId?: number;
  id: number;
  interestingId?: number;
  placeId?: number;
};

export type QueryInterestingCollectionsCurrentDayArgs = {
  catId?: number;
  skip?: number;
  take?: number;
};

export type QueryInterestingCollectionsMonthArgs = {
  catId?: number;
  skip?: number;
  take?: number;
};

export type QueryInterestingCollectionsWeekArgs = {
  catId?: number;
  skip?: number;
  take?: number;
};

export type QueryInterestingCollectionsWeekendArgs = {
  catId?: number;
  skip?: number;
  take?: number;
};



export interface InterestingService {
  createInterestingCategory: (args: CreateInterestingCategoryInput) => Promise<{ data: {createInterestingCategory: InterestingCategoryModel } } | CustomError>
  removeInterestingCategory: (id: number) => Promise<{ data: {removeInterestingCategory: InterestingCategoryModel } } | CustomError>;
  updateInterestingCategory: (args: UpdateInterestingCategoryInput) => Promise<{ data: {updateInterestingCategory: InterestingCategoryModel } } | CustomError>;
  interestingCategories: () => Promise<{ data: {interestingCategories: InterestingCategoryModel[] } } | CustomError>
  interestingCategory: (id: number) => Promise<{ data: {interestingCategory: InterestingCategoryModel } } | CustomError>;

  createInterestingCategorySelect: (args: CreateInterestingCategorySelectInput) => Promise<{ data: {createInterestingCategorySelect: InterestingCategorySelectModel } } | CustomError>;
  removeInterestingCategorySelect: (id: number) => Promise<{ data: {removeInterestingCategorySelect: InterestingCategorySelectModel } } | CustomError>;
  updateInterestingCategorySelect: (args: UpdateInterestingCategorySelectInput) => Promise<{ data: {updateInterestingCategorySelect: InterestingCategorySelectModel } } | CustomError>;

  createInterestingCollection: (args: CreateInterestingCollectionInput) => Promise<{ data: {createInterestingCollection: InterestingCollectionModel } } | CustomError>;
  removeInterestingCollection: (id: number) => Promise<{ data: {removeInterestingCollection: InterestingCollectionModel } } | CustomError>;
  updateInterestingCollection: (args: UpdateInterestingCollectionInput) => Promise<{ data: {updateInterestingCollection: InterestingCollectionModel } } | CustomError>;
  interestingCollection: (id: number) => Promise<{ data: {interestingCollection: InterestingCollectionModel } } | CustomError>;
  interestingCollections: () => Promise<{ data: {interestingCollections: InterestingCollectionModel[] } } | CustomError>;

  createInterestingCollectionSelection: (args: CreateInterestingCollectionSelectionInput) => Promise<{ data: {createInterestingCollectionSelection: InterestingCollectionSelectionModel } } | CustomError>;
  removeInterestingCollectionSelection: (id: number) => Promise<{ data: {removeInterestingCollectionSelection: InterestingCollectionSelectionModel } } | CustomError>;
  updateInterestingCollectionSelection: (args: UpdateInterestingCollectionSelectionInput) => Promise<{ data: {updateInterestingCollectionSelection: InterestingCollectionSelectionModel } } | CustomError>;
  interestingCategorySelect: (id: number) => Promise<{ data: {interestingCategorySelect: InterestingCollectionSelectionModel } } | CustomError>;
  interestingCollectionSelection: (id: number) => Promise<{ data: {interestingCollectionSelection: InterestingCollectionSelectionModel } } | CustomError>;
  interestingCollectionSelections: () => Promise<{ data: {interestingCollectionSelections: InterestingCollectionSelectionModel[] } } | CustomError>;

  interestingCollectionsCurrentDay: (id: number) => Promise<{ data: {interestingCollectionsCurrentDay: InterestingCollectionsAndCount } } | CustomError>;
  interestingCollectionsMonth: (id: number) => Promise<{ data: {interestingCollectionsMonth: InterestingCollectionsAndCount } } | CustomError>;
  interestingCollectionsWeek: (id: number) => Promise<{ data: {interestingCollectionsWeek: InterestingCollectionsAndCount } } | CustomError>;
  interestingCollectionsWeekend: (id: number) => Promise<{ data: {interestingCollectionsWeekend: InterestingCollectionsAndCount } } | CustomError>;
}