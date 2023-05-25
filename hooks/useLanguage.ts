import { useDispatch, useSelector } from 'react-redux'
import { changeLang, useLanguages } from '../redux/features/language/languageSlice'
import { Languages } from '../interfaces/languagesType'

export default function useLanguage() {
   const language = useSelector(useLanguages)
   const dispatch = useDispatch()

   const setLanguage = (newLanguage: Languages) => {
      dispatch(changeLang(newLanguage))
   }

   return { language, setLanguage }
}
