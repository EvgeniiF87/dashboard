import { FetchService } from "../../../shared";
import type {
  CreateCostOptionInput,
  CreateEventPlaceCostOptionInput,
  UpdateEventPlaceCostOptionInput,
} from "../application/port";
import * as schems from "./schems";

const createCostOption = <T>(variables: CreateCostOptionInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_COST_OPTION, variables });
};

const removeCostOption = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_COST_OPTION, variables });
};

const createEventPlaceCostOption = <T>(
  variables: CreateEventPlaceCostOptionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_EVENT_PLACE_COST_OPTION, variables });
};

const removeEventPlaceCostOption = <T>(variables: {
  id: number;
}): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_EVENT_PLACE_COST_OPTION, variables });
};

const updateEventPlaceCostOption = <T>(
  variables: UpdateEventPlaceCostOptionInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_EVENT_PLACE_COST_OPTION, variables });
};

const eventPlaceCostOption = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_EVENT_PLACE_COST_OPTION, variables });
};

const eventPlaceCostOptions = <T>(): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_EVENT_PLACE_COST_OPTIONS });
};

export const CostApi = {
  createCostOption,
  removeCostOption,
  createEventPlaceCostOption,
  removeEventPlaceCostOption,
  updateEventPlaceCostOption,
  eventPlaceCostOption,
  eventPlaceCostOptions,
};
