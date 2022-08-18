import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count';
import listReducer from './list';

export const store = configureStore({
  reducer: {
    counterReducer,
    listReducer
  }
});
