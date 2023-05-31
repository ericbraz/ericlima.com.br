import React, { useState } from 'react'
import styles from './TopMenu.module.scss'
import Logo from './Logo'
import Navbar from './Navbar'
//import CTAButton from '../reusables/verse/CTAButton'
import useDifferentScreens from '../../hooks/useDifferentScreens'
import ModeSwitch from './ModeSwitch'

function TopMenu() {
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
   const { desktopScreen, tabletScreen } = useDifferentScreens()
   const notMobile = desktopScreen || tabletScreen

   return (
      <header
         className={`${styles.header} fixed flex items-center justify-between px-4 w-full h-20
         ${navbar ? styles.background1 : ''} flex-row-reverse z-10`}
         data-action='navigation'
      >
         <Navbar
            navbarStyle={navbar}
            styles={styles}
            changeMenuBackground={changeMenuBackground}
            className={notMobile ? 'flex-1 justify-start' : ''}
         />
         <Logo logoStyle={navbar} className={notMobile ? 'flex-1' : ''} />
         {notMobile && (
            <div className='flex-1 flex flex-row items-center justify-start'>
               <span>
                  <ModeSwitch navbarStyle={navbar} />
               </span>
            </div>
         )
         }
      </header>
   )
}

export default TopMenu
