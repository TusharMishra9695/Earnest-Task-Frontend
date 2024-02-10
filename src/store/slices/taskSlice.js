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
    deleteTask: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateTask: (state, action) => {
      state.value[action.payload.id].status = action.payload.status;
    },
  },
});
export const { addTask, deleteTask, updateTask } = addSlice.actions;
export default addSlice.reducer;
