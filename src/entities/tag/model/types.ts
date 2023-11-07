import { EventPlaceTagModel, TagModel } from "../domain";


export type TagInitState = {
  currentEventPlaceTag: EventPlaceTagModel | null;
  currentTag: TagModel | null;
  loading: boolean;
  error: string | null;
};




