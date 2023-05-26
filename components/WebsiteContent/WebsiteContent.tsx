import React from 'react'
import styles from './WebsiteContent.module.scss'
import useLanguage from '../../hooks/useLanguage'
import BeforeFold from './BeforeFold/BeforeFold'

function WebsiteContent() {
   /*
   * The following code was added only to test
   * if the content of the page is changing after
   * the value of the Redux state changed.
   */
   const { language } = useLanguage()
   const buttonLangs = [
      { lang: 'en', text: 'Show Language' },
      { lang: 'pt', text: 'Exibir Língua' },
      { lang: 'fr', text: 'Afficher la Langue' },
   ]

   const topClasses = 'flex items-center justify-center px-14'
   //const classes = topClasses + ' py-5'

   return (
      <>
         <section id='presentation' className={`${topClasses} pt-24 pb-5`}>
            <BeforeFold />
         </section>
         <section id='temporary'>
            <div className={`${styles.footer} h-96 flex justify-center items-center`}>
               {buttonLangs.map((button) => button.lang === language && button.text)}
            </div>
         </section>
      </>
   )
}

export default WebsiteContent
