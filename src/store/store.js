import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./slices/taskSlice";
export const store = configureStore({
  reducer: { addSlice },
});
