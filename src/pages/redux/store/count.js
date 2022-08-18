import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
    change: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const { add, minus, change } = counterSlice.actions;

export default counterSlice.reducer;
