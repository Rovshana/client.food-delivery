import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from './slices'

export const store = configureStore({
  reducer: combineReducers,
})