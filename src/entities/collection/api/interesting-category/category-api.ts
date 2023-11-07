import { FetchService } from "../../../../shared";
import { CreateInterestingCategoryInput, UpdateInterestingCategoryInput } from "../../application";
import * as schems from "./schems";


const create = <T>(
  variables: CreateInterestingCategoryInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_INTERESTING_CATEGORY, variables });
};

const remove = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_INTERESTING_CATEGORY, variables });
};

const update = <T>(
  variables: UpdateInterestingCategoryInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_INTERESTING_CATEGORY, variables });
};

const interestingCategory = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_INTERESTING_CATEGORY, variables });
};

const interestingCategories = <T>(): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_INTERESTING_CATEGORYS });
};

export const InterestingCategoriesApi = {
  create,
  remove,
  update,
  interestingCategory,
  interestingCategories
}
