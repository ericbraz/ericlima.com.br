import React, { useMemo, useState, Fragment, useEffect } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './TopMenu.module.scss'
import { US, BR, FR } from 'country-flag-icons/react/3x2'
import { TopMenu } from '../../interfaces/languagesType'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang, useLanguages } from '../../redux/features/language/languageSlice'

function TopMenu() {
   const dispatch = useDispatch()

   // To open the menu when in mobile screen
   const [toggleMenu, setToggleMenu] = useState(true)
   const [toggleFlag, setToggleFlag] = useState(true)

   const classes = 'w-8'
   // State that define the language in menu (eventually it shall be transported as a context)
   const language = useSelector(useLanguages)
   const topMenu: TopMenu[] = useMemo(
      () => [
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
      ],
      []
   )

   const screenWidth = useWindowDimensions().width

   /* Navbar background color change */
   const [navbar, setNavbar] = useState(false)
   const changeMenuBackground = () => {
      if (window.scrollY >= 100) {
         setNavbar(true)
      } else {
         setNavbar(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', changeMenuBackground)
   }, [])

   return (
      <header
         className={`${styles.header} fixed flex items-center justify-between px-4 w-full h-20
         ${navbar ? styles.background1 : ''}`}
      >
         <a
            className={`${styles.logo} text-xl font-semibold ${
               navbar ? 'white' : styles.color1
            } cursor-pointer`}
         >
            Logo
         </a>
         <div className={`${styles.menuOptions} flex items-center`}>
            <div
               className={`${styles.flag} flex items-center justify-center w-12 cursor-pointer`}
               onClick={() => setToggleFlag(!toggleFlag)}
            >
               {topMenu.map(
                  (item) =>
                     item.language === language && (
                        <Fragment key={item.name}>{item.tagSmall}</Fragment>
                     )
               )}
            </div>
            <nav className={`${styles.nav} ${!toggleMenu ? styles.active : ''}`}>
               <button
                  className={`${styles.btnMobile} ${screenWidth <= 600 ? 'block' : 'none'}`}
                  onClick={() => setToggleMenu(!toggleMenu)}
                  /* style was removed and classes were implemented instead */
               >
                  <span
                     className={`${styles.hamburger} ${toggleMenu && styles.color1}`}
                     style={navbar ? (toggleMenu ? { color: 'white' } : {}) : {}}
                  ></span>
               </button>
               <ul
                  className={`${navbar ? styles.menuVisible : styles.menuInvisible} ${
                     styles.menu
                  } m-3 list-none z-20
                  ${
                     screenWidth <= 600 && toggleMenu
                        ? 'hidden'
                        : screenWidth <= 600
                        ? styles.basic_style
                        : 'flex'
                  }`}
                  /* style was removed and classes were implemented instead */
               >
                  {topMenu.map((element) => (
                     <Fragment key={element.name}>
                        {element.language === language &&
                           element.menu.map((item) => (
                              <li key={item} className={!toggleMenu ? styles.menuVisible : ''}>
                                 <a
                                    className={`${styles.link} inline-block m-1 px-3 py-2 w-full rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer no-underline`}
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
                              dispatch(changeLang(element.language))
                              setToggleFlag(!toggleFlag)
                           }}
                        >
                           {element.tag}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default TopMenu
