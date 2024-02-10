import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./slices/addTask";
export const store = configureStore({
  reducer: { addSlice },
});
