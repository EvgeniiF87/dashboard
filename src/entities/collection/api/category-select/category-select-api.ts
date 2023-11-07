import { FetchService } from "../../../../shared";
import { CreateInterestingCategorySelectInput, UpdateInterestingCategorySelectInput } from "../../application";
import * as schems from "./schems";

const create = <T>(
  variables: CreateInterestingCategorySelectInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_INTERESTING_CATEGORY_SELECT, variables }); //TODO error
};

const remove = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_INTERESTING_CATEGORY_SELECT, variables });
};

const update = <T>(
  variables: UpdateInterestingCategorySelectInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_INTERESTING_CATEGORY_SELECT, variables });
};

const interestingCategorySelect = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_INTERESTING_CATEGORY_SELECT, variables });
};

export const CategorySelectApi = {
  create,
  remove,
  update,
  interestingCategorySelect,
}