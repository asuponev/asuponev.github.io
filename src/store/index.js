import { configureStore } from '@reduxjs/toolkit'

import options from './slices/options';
import data from './slices/data'

export const store = configureStore({
  reducer: { options, data },
  devTools: process.env.NODE_ENV !== 'production'
});