import React from 'react'
import { useSelector } from 'react-redux'
import { useLanguages } from '../../pages/redux/features/language/languageSlice'

/* 
 * The following content was added only to test
 * if the content of the page is changing after
 * the value of the Redux state changed.
 */

function WebsiteContent() {
   const language = useSelector(useLanguages)

   const buttonLangs = [
      { lang: 'en-us', text: 'Show Language' },
      { lang: 'pt-br', text: 'Exibir Língua' },
      { lang: 'fr-fr', text: 'Afficher la Langue' },
   ]

   return (
      <div className='h-96 flex justify-center items-center'>
         {buttonLangs.map((button) => button.lang === language && button.text)}
      </div>
   )
}

export default WebsiteContent
