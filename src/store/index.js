import { configureStore } from '@reduxjs/toolkit'

import options from './slices/options';

export const store = configureStore({
  reducer: { options }
});