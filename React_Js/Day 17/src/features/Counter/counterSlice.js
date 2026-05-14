import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducer function
  reducers: {
    // action
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incByValue: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, reset, incByValue } = counterSlice.actions;
export default counterSlice.reducer;
