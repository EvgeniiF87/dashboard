import { CustomError } from "../../../shared";
import { EventPlaceTagModel, TagModel } from "../domain";
import { CreateEventPlaceTagInput, CreateTagInput, UpdateEventPlaceTagInput, UpdateTagInput } from "../DTO/tag-dto";


export interface TagService {
  createTag: (args: CreateTagInput) => Promise<{ data: {createTag: TagModel } } | CustomError>;
  removeTag: (id: number) => Promise<{ data: {removeTag: TagModel } } | CustomError>;
  updateTag: (args: UpdateTagInput) => Promise<{ data: {updateTag: TagModel } } | CustomError>;
  tag: (id: number) => Promise<{ data: {tag: TagModel } } | CustomError>
  createEventPlaceTag: (args: CreateEventPlaceTagInput) => Promise<{ data: {createEventPlaceTag: EventPlaceTagModel } } | CustomError>;
  removeEventPlaceTag: (id: number) => Promise<{ data: {removeEventPlaceTag: EventPlaceTagModel } } | CustomError>;
  updateEventPlaceTag: (args: UpdateEventPlaceTagInput) => Promise<{ data: {updateEventPlaceTag: EventPlaceTagModel } } | CustomError>;
  eventPlaceTag: (id: number) => Promise<{ data: {eventPlaceTag: EventPlaceTagModel } } | CustomError>
  eventPlaceTags: () => Promise<{ data: {eventPlaceTags: EventPlaceTagModel[] } } | CustomError>
}