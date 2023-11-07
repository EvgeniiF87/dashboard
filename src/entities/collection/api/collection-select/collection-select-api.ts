import { FetchService } from "../../../../shared";
import { CreateInterestingCollectionSelectionInput, UpdateInterestingCollectionSelectionInput } from "../../application";
import * as schems from "./schems";

const create = <T>(
  variables: CreateInterestingCollectionSelectionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_INTERESTING_COLLECTION_SELECT, variables });
};

const remove = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_INTERESTING_COLLECTION_SELECT, variables });
};

const update = <T>(
  variables: UpdateInterestingCollectionSelectionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_INTERESTING_COLLECTION_SELECT, variables });
};

const interestingCollectionSelection = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_INTERESTING_COLLECTION_SELECTION, variables });
};

const interestingCollectionSelections = <T>(): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_INTERESTING_COLLECTION_SELECTIONS });
};

export const CollectionSelectApi = {
  create,
  remove,
  update,
  interestingCollectionSelection,
  interestingCollectionSelections
}