import React, { useMemo, useState, Fragment } from 'react'
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

   // State that define the language in menu (eventually it shall be transported as a context)
   const language = useSelector(useLanguages)
   const topMenu: TopMenu[] = useMemo(
      () => [
         {
            name: 'Português',
            tag: <BR title='Português' />,
            language: 'pt-br',
            menu: ['Portfólio', 'Contato'],
         },
         {
            name: 'English',
            tag: <US title='English' />,
            language: 'en-us',
            menu: ['Portfolio', 'Contact'],
         },
         {
            name: 'Français',
            tag: <FR title='Français' />,
            language: 'fr-fr',
            menu: ['Portefeuille', 'Contact'],
         },
      ],
      []
   )

   const screenWidth = useWindowDimensions().width

   return (
      <header className={`${styles.header} flex items-center justify-between px-4 h-20`}>
         <a className='text-xl font-semibold'>Logo</a>
         <div className={`${styles.menuOptions} flex items-center`}>
            <div
               className={`${styles.flag} block w-10 cursor-pointer`}
               onClick={() => setToggleFlag(!toggleFlag)}
            >
               {topMenu.map(
                  (item) =>
                     item.language === language && <Fragment key={item.name}>{item.tag}</Fragment>
               )}
            </div>
            <nav className={`${styles.nav} ${!toggleMenu && styles.active}`}>
               <button
                  className={`${styles.btnMobile}`}
                  onClick={() => setToggleMenu(!toggleMenu)}
                  style={screenWidth <= 600 ? { display: 'block' } : { display: 'none' }}
               >
                  <span className={`${styles.hamburger}`}></span>
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
                  {topMenu.map((element) => (
                     <Fragment key={element.name}>
                        {element.language === language &&
                           element.menu.map((item) => (
                              <li key={item}>
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
                  className={`${styles.menu} list-none z-20 hidden`}
                  style={
                     toggleFlag
                        ? { display: 'none' }
                        : {
                             position: 'fixed',
                             top: 0,
                             right: 0,
                             bottom: 0,
                             left: 0,
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'center',
                             margin: '0px',
                             width: '100vw',
                             height: '100vh',
                          }
                  }
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
