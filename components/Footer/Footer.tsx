import React from 'react'
import styles from './Footer.module.scss'
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import MyCircleComponent from './MyCircleComponent'

function Footer() {
   const margins = 'm-0'
   const compSizes = 25

   /* The spans below are meant to become link in the future */
   return (
      <div className={`${styles.footer} bottom-0 w-full flex justify-center items-center flex-col`}>
         <div className={`w-3/4 text-center flex justify-center items-center m-6`}>
            <MyCircleComponent Icon={BsInstagram} size={compSizes} />
            <MyCircleComponent Icon={BsTwitter} size={compSizes} />
            <MyCircleComponent Icon={BsLinkedin} size={compSizes} />
         </div>
         <div className={`${margins}`}>
            <span className='hover:cursor-pointer'>Info</span>&nbsp;•&nbsp;
            <span className='hover:cursor-pointer'>Termos de Uso</span>&nbsp;•&nbsp;
            <span className='hover:cursor-pointer'>Política de Privacidade</span>
         </div>
         <div className={`text-gray-400 ${margins}`}>© ericlima.com.br</div>
      </div>
   )
}

export default Footer
