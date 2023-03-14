import { configureStore } from '@reduxjs/toolkit'

import { optionsReducer } from './reducers/options';

export const store = configureStore({
  reducer: {
    options: optionsReducer
  }
});