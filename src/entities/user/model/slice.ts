import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from './extra-reducer'

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
  extraReducers,
});

