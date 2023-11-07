import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers,
});

