import React from 'react'
import { useSelector } from 'react-redux'
import { useLanguages } from '../../redux/features/language/languageSlice'
import styles from './WebsiteContent.module.scss'

function WebsiteContent() {
   const language = useSelector(useLanguages)

   /*
    * The following code was added only to test
    * if the content of the page is changing after
    * the value of the Redux state changed.
    */
   const buttonLangs = [
      { lang: 'en-us', text: 'Show Language' },
      { lang: 'pt-br', text: 'Exibir Língua' },
      { lang: 'fr-fr', text: 'Afficher la Langue' },
   ]

   return (
      <div className={`${styles.footer} 'h-96 flex justify-center items-center`}>
         {buttonLangs.map((button) => button.lang === language && button.text)}
      </div>
   )
}

export default WebsiteContent
