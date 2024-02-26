import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter'
import { valantisApi } from './api/valantis'

export const store = configureStore({
  reducer: {
    counter,
    [valantisApi.reducerPath]: valantisApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(valantisApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch