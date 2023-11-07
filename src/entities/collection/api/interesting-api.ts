import { CategorySelectApi } from "./category-select";
import { CollectionSelectApi } from "./collection-select";
import { InterestingCategoriesApi } from "./interesting-category";
import { CollectionApi } from "./interesting-collection";
import { InterestionTimeApi } from "./interesting-time";


export const InterestinApi = {
  createInterestingCategory: InterestingCategoriesApi.create,
  removeInterestingCategory: InterestingCategoriesApi.remove,
  updateInterestingCategory: InterestingCategoriesApi.update,
  interestingCategories: InterestingCategoriesApi.interestingCategories,
  interestingCategory: InterestingCategoriesApi.interestingCategory,

  createInterestingCategorySelect: CategorySelectApi.create,
  removeInterestingCategorySelect: CategorySelectApi.remove,
  updateInterestingCategorySelect: CategorySelectApi.update,
  interestingCategorySelect: CategorySelectApi.interestingCategorySelect,

  createInterestingCollection: CollectionApi.create,
  removeInterestingCollection: CollectionApi.remove,
  updateInterestingCollection: CollectionApi.update,
  interestingCollection: CollectionApi.interestingCollection,
  interestingCollections: CollectionApi.interestingCollections,

  createInterestingCollectionSelection: CollectionSelectApi.create,
  removeInterestingCollectionSelection: CollectionSelectApi.remove,
  updateInterestingCollectionSelection: CollectionSelectApi.update,
  interestingCollectionSelection: CollectionSelectApi.interestingCollectionSelection,
  interestingCollectionSelections: CollectionSelectApi.interestingCollectionSelections,

  interestingCollectionsCurrentDay: InterestionTimeApi.currentDay,
  interestingCollectionsMonth: InterestionTimeApi.month,
  interestingCollectionsWeek: InterestionTimeApi.week,
  interestingCollectionsWeekend: InterestionTimeApi.weekend,
};


