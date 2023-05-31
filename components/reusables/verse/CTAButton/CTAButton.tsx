import React from 'react'
import styles from './CTAButton.module.scss'
import usePageMode from '../../../../hooks/usePageMode'

function CTAButton({
   children,
   bgColor,
   color,
   style,
   className,
   buttonClassName,
}: {
   children: any
   bgColor?: string
   color?: string
   style?: React.CSSProperties
   className?: string
   buttonClassName?: string
}) {
   const { lightMode } = usePageMode()

   const finalBgColor = bgColor ? bgColor : '#2CF53D'
   const finalColor = color ? color : 'inherit'
   const finalCss: React.CSSProperties =
      style ? {
         color: finalColor,
         backgroundColor: finalBgColor,
         ...style,
      } : {
         //color: finalColor,
         backgroundColor: finalBgColor,
      }

   const standardBtnClasses = `${styles.button} ${lightMode ? styles.lightMode : styles.darkMode} font-normal px-7 py-2 rounded-lg cursor-pointer no-underline cta-button`
   const finalBtnClassName = buttonClassName ? standardBtnClasses + ' ' + buttonClassName : standardBtnClasses

   return (
      <span className={className + ' inline-block'}>
         <a role='cta' className={finalBtnClassName} style={finalCss}>
            {children}
         </a>
      </span>
   )
}

export default CTAButton
