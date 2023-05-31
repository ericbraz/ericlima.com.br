import { useDispatch, useSelector } from 'react-redux'
import { changePageMode, getPageMode } from '../redux/features/pageMode/pageModeSlice'
import { PageMode } from '../interfaces/pageModeTypes'
import { LIGHT_VALUE } from '../utils/constants/constants'

export default function usePageMode() {
   const pageMode = useSelector(getPageMode)
   const dispatch = useDispatch()

   const setPageMode = (newPageMode: PageMode) => {
      dispatch(changePageMode(newPageMode))
   }

   const lightMode = pageMode === LIGHT_VALUE

   return { pageMode, setPageMode, lightMode }
}
