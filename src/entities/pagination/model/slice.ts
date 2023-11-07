import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from './extra-reducer'

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers,
  extraReducers,
});

