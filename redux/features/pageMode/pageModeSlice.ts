import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageMode } from '../../../interfaces/pageModeTypes'
import { DEFAULT_PAGE_MODE } from '../../../utils/constants/constants'
import { RootState } from '../../store/store'

const initialState = {
   mode: DEFAULT_PAGE_MODE,
}

export const pageModeSlice = createSlice({
   name: 'pageMode',
   initialState,
   reducers: {
      changePageMode: (state, { payload }: PayloadAction<PageMode>) => {
         state.mode = payload
      },
   },
})

export default pageModeSlice.reducer
export const { changePageMode } = pageModeSlice.actions
export const getPageMode = (state: RootState) => {
   return state.pageMode.mode
}
