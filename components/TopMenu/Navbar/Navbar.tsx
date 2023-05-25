import React, { useState, Fragment, useEffect } from 'react'
import { US, BR, FR } from 'country-flag-icons/react/3x2'
import { MenuObject } from '../../../interfaces/languagesType'
import useLanguage from '../../../hooks/useLanguage'
import useDifferentScreens from '../../../hooks/useDifferentScreens'

interface NavbarProps {
   navbarStyle: boolean
   styles: {
      readonly [key: string]: string
   }
   changeMenuBackground: () => void
   className?: string
}

function Navbar(props: NavbarProps) {
   const { navbarStyle, styles, changeMenuBackground, className } = props

   // This section deals with changing the navbarStyle background-color after scrolling
   const { mobileScreen } = useDifferentScreens()

   // We don't have to work all redux code since the custom hook has done it already
   const { language, setLanguage } = useLanguage()

   // To open the menu when in mobile screen
   const [toggleMenu, setToggleMenu] = useState(true)
   const [toggleFlag, setToggleFlag] = useState(true)

   // This section deals with classes definitions for the components inside topMenu object list
   const classes = 'w-8'
   // State that define the language for the menu
   const topMenu: MenuObject[] = [
      {
         name: 'Português',
         tag: <BR title='Português' />,
         tagSmall: <BR title='Português' className={`${classes}`} />,
         language: 'pt',
         menu: ['Portfólio', 'Contato'],
      },
      {
         name: 'English',
         tag: <US title='English' />,
         tagSmall: <US title='English' className={`${classes}`} />,
         language: 'en',
         menu: ['Portfolio', 'Contact'],
      },
      {
         name: 'Français',
         tag: <FR title='Français' />,
         tagSmall: <FR title='Français' className={`${classes}`} />,
         language: 'fr',
         menu: ['Portefeuille', 'Contact'],
      },
   ]
   // This sets the data labels for the menu values as lower case
   const menuDataLabels = [...topMenu]
      .find((object) => object.language === language)
      ?.menu.map((obj) => obj.toLowerCase())

   useEffect(() => {
      window.addEventListener('scroll', changeMenuBackground)
   }, [changeMenuBackground])

   return (
      <div className={`${styles.menuOptions} flex items-center${className ? ' ' + className : ''}`}>
         <div
            className={`${styles.flag} flex items-center justify-center w-12 cursor-pointer`}
            onClick={() => setToggleFlag(!toggleFlag)}
            data-label={`language-flag-${language}`}
         >
            {topMenu.map(
               (item) =>
                  item.language === language && <Fragment key={item.name}>{item.tagSmall}</Fragment>
            )}
         </div>
         <nav className={`${styles.nav} ${!toggleMenu ? styles.active : ''}`}>
            <button
               className={`${styles.btnMobile} ${mobileScreen ? 'block' : 'none'}`}
               onClick={() => setToggleMenu(!toggleMenu)}
            /* style was removed and classes were implemented instead */
            >
               <span
                  className={`${styles.hamburger} ${toggleMenu && styles.color1}`}
                  style={navbarStyle ? (toggleMenu ? { color: 'white' } : {}) : {}}
                  data-label='menu-burger'
               ></span>
            </button>
            <ul
               className={`${navbarStyle ? styles.menuVisible : styles.menuInvisible} ${styles.menu
                  } m-3 list-none z-20
                  ${mobileScreen && toggleMenu
                     ? 'hidden'
                     : mobileScreen
                        ? styles.basic_style
                        : 'flex'
                  }`}
            /* style was removed and classes were implemented instead */
            >
               {topMenu.map((element) => (
                  <Fragment key={element.name}>
                     {element.language === language &&
                        element.menu.map((item, idx) => (
                           <li key={item} className={!toggleMenu ? styles.menuVisible : ''}>
                              <a
                                 className={`${styles.link} inline-block m-1 px-3 py-2 w-full rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer no-underline`}
                                 data-label={
                                    menuDataLabels ? `menu-link-${menuDataLabels[idx]}` : ''
                                 }
                              >
                                 {item}
                              </a>
                           </li>
                        ))}
                  </Fragment>
               ))}
            </ul>
            <ul
               className={`${styles.menu} list-none z-20
                  ${toggleFlag ? 'hidden' : styles.expanded_style}`}
            /* style was removed and classes were implemented instead */
            >
               {topMenu.map((element) => (
                  <li key={element.language}>
                     <a
                        className={`${styles.link} block w-36 m-1 px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer no-underline`}
                        onClick={() => {
                           setLanguage(element.language)
                           setToggleFlag(!toggleFlag)
                        }}
                        data-label={`menu-flag-${element.language}`}
                     >
                        {element.tag}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
