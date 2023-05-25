import React from 'react'
import styles from './WebsiteContent.module.scss'
import useLanguage from '../../hooks/useLanguage'

function WebsiteContent() {
   const { language } = useLanguage()

   /*
    * The following code was added only to test
    * if the content of the page is changing after
    * the value of the Redux state changed.
    */
   const buttonLangs = [
      { lang: 'en', text: 'Show Language' },
      { lang: 'pt', text: 'Exibir Língua' },
      { lang: 'fr', text: 'Afficher la Langue' },
   ]

   return (
      <div className={`${styles.footer} 'h-96 flex justify-center items-center`}>
         {buttonLangs.map((button) => button.lang === language && button.text)}
      </div>
   )
}

export default WebsiteContent
