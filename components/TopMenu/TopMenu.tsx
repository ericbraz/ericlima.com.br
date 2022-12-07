import React, { useMemo, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './TopMenu.module.scss'
import { IoMdCloseCircle } from 'react-icons/io'

type Languages = 'en-us' | 'pt-br' | 'fr-fr'

interface TopMenu {
   language: Languages
   menu: string[]
}

function TopMenu() {
   // To open the menu when in mobile screen
   const [toggleMenu, setToggleMenu] = useState(true)

   // State that define the language in menu (eventually it shall be transported as a context)
   const [lang, setLang] = useState<Languages>('pt-br')
   const topMenu: TopMenu[] = useMemo(
      () => [
         { language: 'en-us', menu: ['Portfolio', 'Contact'] },
         { language: 'pt-br', menu: ['Portfólio', 'Contato'] },
         { language: 'fr-fr', menu: ['Portefeuille', 'Contact'] },
      ],
      []
   )

   const screenWidth = useWindowDimensions().width

   return (
      <header className={`${styles.header} flex items-center justify-between px-4 h-20`}>
         <a className='text-xl font-semibold'>Logo</a>
         <nav>
            <button
               className={`${styles.btnMobile} z-30`}
               onClick={() => setToggleMenu(!toggleMenu)}
               style={screenWidth <= 600 ? { display: 'block' } : { display: 'none' }}
            >
               Menu
            </button>
            <ul
               className={`${styles.menu} list-none z-20 hidden`}
               style={
                  screenWidth <= 600 && toggleMenu
                     ? { display: 'none' }
                     : screenWidth <= 600
                     ? {
                          position: 'fixed',
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                          display: 'flex',
                          margin: '0px',
                          width: '100vw',
                          height: '100vh',
                       }
                     : {
                          display: 'flex',
                       }
               }
            >
               <IoMdCloseCircle
                  size='30'
                  className='fixed top-8 right-8'
                  onClick={() => setToggleMenu(!toggleMenu)}
                  style={screenWidth <= 600 ? { display: 'block' } : { display: 'none' }}
               />
               {topMenu.map(
                  (element) =>
                     element.language === lang &&
                     element.menu.map((item) => (
                        <li key={item}>
                           <a
                              className={`${styles.link} inline-block m-1 px-3 py-2 w-full rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer no-underline`}
                           >
                              {item}
                           </a>
                        </li>
                     ))
               )}
            </ul>
         </nav>
      </header>
   )
}

export default TopMenu
