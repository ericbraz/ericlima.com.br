import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/language/languageSlice'

export const store = configureStore({
   reducer: {
      language: languageReducer, // counter
   },
})

export type RootState = ReturnType<typeof store.getState>
