import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from './extra-reducer'

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers,
  extraReducers,
});

