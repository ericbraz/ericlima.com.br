import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/language/languageSlice'

const store = configureStore({
   reducer: {
      language: languageReducer, // counter
   },
})

export default store
export type RootState = ReturnType<typeof store.getState>
