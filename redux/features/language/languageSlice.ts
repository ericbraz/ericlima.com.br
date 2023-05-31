import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Languages } from '../../../interfaces/languagesType'
import { DEFAULT_LANGUAGE } from '../../../utils/constants/constants'
import { RootState } from '../../store/store'

const initialState = {
   lang: DEFAULT_LANGUAGE, // count
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
export const getLanguage = (state: RootState) => {
   return state.language.lang
}
