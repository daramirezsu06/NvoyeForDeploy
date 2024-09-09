import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../(auth)/redux/authSlice';
import prechecklistReducer from '../(pre-checklist)/redux/checkListSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      preChecklistanswers: prechecklistReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
