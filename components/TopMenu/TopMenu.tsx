import React, { useState } from 'react'
import styles from './TopMenu.module.scss'
import Logo from './Logo'
import Navbar from './Navbar'
import CTAButton from '../reusables/verse/CTAButton'
import useLanguage from '../../hooks/useLanguage'
import useDifferentScreens from '../../hooks/useDifferentScreens'

function TopMenu() {
   // Gtes the state of the language to set afterwards the proper text for the CTA button
   const { language } = useLanguage()
   const ctaText = [
      { text: 'Reach Out to Me', language: 'en' },
      { text: 'Vamos Conversar', language: 'pt' },
      { text: 'Contactez-moi', language: 'fr' }
   ]

   /* Navbar background color change */
   const [navbar, setNavbar] = useState(false)
   const changeMenuBackground = () => {
      if (window.scrollY >= 100) {
         setNavbar(true)
      } else {
         setNavbar(false)
      }
   }

   // I don't want CTA button to show up in case the screen is to small
   const { desktopScreen } = useDifferentScreens()

   return (
      <header
         className={`${styles.header} fixed flex items-center justify-between px-4 w-full h-20
         ${navbar ? styles.background1 : ''} ${desktopScreen ? 'flex-row' : 'flex-row-reverse'}`}
         data-action='navigation'
      >
         <Navbar navbarStyle={navbar} styles={styles} changeMenuBackground={changeMenuBackground} className={desktopScreen ? 'flex-1 justify-end' : ''} />
         <Logo logoMode={navbar} className={desktopScreen ? 'flex-1' : ''} />
         {desktopScreen &&
            <CTAButton className='flex flex-1 justify-end'>{ctaText.find(cta => cta.language === language)?.text}</CTAButton>
         }
      </header>
   )
}

export default TopMenu
