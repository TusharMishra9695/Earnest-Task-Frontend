import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "addSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addTask } = addSlice.actions;
export default addSlice.reducer;
