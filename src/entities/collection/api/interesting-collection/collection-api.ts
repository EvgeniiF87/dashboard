import { FetchService } from "../../../../shared";
import { CreateInterestingCollectionInput, UpdateInterestingCollectionInput } from "../../application";
import * as schems from "./schems";

const create = <T>(
  variables: CreateInterestingCollectionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_INTERESTING_COLLECTION, variables });
};

const remove = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_INTERESTING_COLLECTION, variables });
};

const update = <T>(
  variables: UpdateInterestingCollectionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_INTERESTING_COLLECTION, variables });
};

const interestingCollection = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_INTERESTING_COLLECTION, variables });
};

const interestingCollections = <T>(): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_INTERESTING_COLLECTIONS });
};

export const CollectionApi = {
  create,
  remove,
  update,
  interestingCollection,
  interestingCollections
}