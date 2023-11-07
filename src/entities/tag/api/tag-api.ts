import { FetchService } from "../../../shared";
import {
  CreateEventPlaceTagInput,
  CreateTagInput,
  UpdateEventPlaceTagInput,
  UpdateTagInput,
} from "../DTO/tag-dto";
import * as schems from "./schems";

const createTag = <T>(variables: CreateTagInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_TAG, variables });
};

const removeTag = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_TAG, variables });
};

const updateTag = <T>(variables: UpdateTagInput): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_TAG, variables });
};

const tag = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_TAG, variables });
};

const createEventPlaceTag = <T>(
  variables: CreateEventPlaceTagInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.CREATE_EVENT_PLACE_TAG, variables });
};

const removeEventPlaceTag = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.REMOVE_EVENT_PLACE_TAG, variables });
};

const updateEventPlaceTag = <T>(
  variables: UpdateEventPlaceTagInput
): Promise<T> => {
  return FetchService.graphQl({ query: schems.UPDATE_EVENT_PLACE_TAG, variables }); // Error
};

const eventPlaceTag = <T>(variables: { id: number }): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_EVENT_PLACE_TAG, variables });
};

const eventPlaceTags = <T>(): Promise<T> => {
  return FetchService.graphQl({ query: schems.GET_ALL_EVENT_PLACE_TAGS });
};

export const TagApi = {
  createTag,
  removeTag,
  updateTag,
  tag,
  createEventPlaceTag,
  removeEventPlaceTag,
  updateEventPlaceTag,
  eventPlaceTag,
  eventPlaceTags,
};
