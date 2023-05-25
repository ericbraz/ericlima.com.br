import React from 'react'
import styles from './Footer.module.scss'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import MyCircleComponent from './MyCircleComponent'
import useLanguage from '../../hooks/useLanguage'

interface FooterLanguages {
   lang: string
   text: string[]
}

function Footer() {
   const margins = 'm-0 mx-6 text-center'
   const compSizes = 25

   const { language } = useLanguage()
   const footerLangs: FooterLanguages[] = [
      {
         lang: 'en',
         text: ['Info • ', 'Terms of Use • ', 'Privacy Policy'],
      },
      {
         lang: 'pt',
         text: ['Info • ', 'Termos de Uso • ', 'Política de Privacidade'],
      },
      {
         lang: 'fr',
         text: ['Info • ', "Conditions d'Utilisation • ", 'Politique de Confidentialité'],
      },
   ]
   const dataLabels = ['info', 'terms-of-use', 'privacy-police']

   /* The spans below are meant to become link in the future */
   return (
      <footer
         className={`${styles.footer} bottom-0 w-full flex justify-center items-center flex-col`}
         data-action='footer'
      >
         <div className={`w-3/4 text-center flex justify-center items-center m-6`}>
            <MyCircleComponent Icon={BsInstagram} size={compSizes} dataLabel='instagram' />
            <MyCircleComponent Icon={BsTwitter} size={compSizes} dataLabel='twitter' />
            <MyCircleComponent Icon={BsLinkedin} size={compSizes} dataLabel='linkedin' />
            <MyCircleComponent Icon={BsGithub} size={compSizes} dataLabel='github' />
         </div>
         <div className={`${margins}`}>
            {footerLangs.map(
               (footlang) =>
                  footlang.lang === language && (
                     <span key={footlang.lang} className='hover:cursor-pointer'>
                        {footlang.text.map((text, idx) => (
                           <span key={dataLabels[idx]} data-label={dataLabels[idx]}>
                              {text}
                           </span>
                        ))}
                     </span>
                  )
            )}
         </div>
         <div className={`text-gray-400 ${margins}`}>© ericlima.com.br</div>
      </footer>
   )
}

export default Footer
