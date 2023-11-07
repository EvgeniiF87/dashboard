import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";


export const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers,
});

