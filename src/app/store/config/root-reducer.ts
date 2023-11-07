import { combineReducers } from "@reduxjs/toolkit";
import * as reducers from "../../../entities";

export const rootReducer = combineReducers({
  events: reducers.eventsReducer,
  layout: reducers.layoutReducer,
  user: reducers.userReducer,
  pagination: reducers.paginationReducer,
  modal: reducers.modalReducer,
  auth: reducers.authReducer,
  upload: reducers.uploadReducer,
  place: reducers.placeReducer,
  images: reducers.imagesReducer,
  info: reducers.infoReducer,
  tag: reducers.tagReducer,
  inputs: reducers.inputsReducer,
  notification: reducers.notificationReducer,
});
