import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/language/languageSlice'
import pageModeReducer from '../features/pageMode/pageModeSlice'

const store = configureStore({
   reducer: {
      language: languageReducer, // counter
      pageMode: pageModeReducer,
   },
})

export default store
export type RootState = ReturnType<typeof store.getState>
