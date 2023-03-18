import React from 'react'
import styles from './Footer.module.scss'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import MyCircleComponent from './MyCircleComponent'
import { useSelector } from 'react-redux'
import { useLanguages } from '../../redux/features/language/languageSlice'

function Footer() {
   const margins = 'm-0 mx-6 text-center'
   const compSizes = 25

   const language = useSelector(useLanguages)
   const footerLangs = [
      {
         lang: 'en-us',
         text: ['Info • ', 'Terms of Use • ', 'Privacy Policy'],
      },
      {
         lang: 'pt-br',
         text: ['Info • ', 'Termos de Uso • ', 'Política de Privacidade'],
      },
      {
         lang: 'fr-fr',
         text: ['Info • ', "Conditions d'Utilisation • ", 'Politique de Confidentialité'],
      },
   ]

   /* The spans below are meant to become link in the future */
   return (
      <div className={`${styles.footer} bottom-0 w-full flex justify-center items-center flex-col`}>
         <div className={`w-3/4 text-center flex justify-center items-center m-6`}>
            <MyCircleComponent Icon={BsInstagram} size={compSizes} />
            <MyCircleComponent Icon={BsTwitter} size={compSizes} />
            <MyCircleComponent Icon={BsLinkedin} size={compSizes} />
            <MyCircleComponent Icon={BsGithub} size={compSizes} />
         </div>
         <div className={`${margins}`}>
            {footerLangs.map(
               (footlang) =>
                  footlang.lang === language && (
                     <span key={footlang.lang} className='hover:cursor-pointer'>
                        {footlang.text}
                     </span>
                  )
            )}
         </div>
         <div className={`text-gray-400 ${margins}`}>© ericlima.com.br</div>
      </div>
   )
}

export default Footer
