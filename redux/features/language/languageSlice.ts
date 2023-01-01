import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Languages } from '../../../interfaces/languagesType'
import { RootState } from '../../store/store'

const initialState = {
   lang: 'pt-br' as Languages, // count
}

export const languageSlice = createSlice({
   name: 'language',
   initialState,
   reducers: {
      changeLang: (state, { payload }: PayloadAction<Languages>) => {
         state.lang = payload
      },
   },
})

export default languageSlice.reducer
export const { changeLang } = languageSlice.actions
export const useLanguages = (state: RootState) => {
   return state.language.lang
}
