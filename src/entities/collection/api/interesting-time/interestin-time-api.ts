import { FetchService } from "../../../../shared";
import * as schems from "./schems";

const currentDay = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.INTERESTION_COLLECTION_CURRENT_DAY, variables });
};

const month = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.INTERESTION_COLLECTION_MOUTH, variables });
};

const week = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.INTERESTION_COLLECTION_WEEK, variables });
};

const weekend = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.INTERESTION_COLLECTION_WEEKEND, variables });
};

export const InterestionTimeApi = {
  currentDay,
  month,
  week,
  weekend,
}