import { configureStore } from '@reduxjs/toolkit';

import navbar from '../slices/navbarSlice'

export const store = configureStore({
  reducer: {
    navbar,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production"
});
