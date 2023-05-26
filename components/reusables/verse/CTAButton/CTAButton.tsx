import React from 'react'
import styles from './CTAButton.module.scss'

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
   const finalBgColor = bgColor ? bgColor : '#2CF53D'
   const finalColor = color ? color : '#000000'
   const finalCss: React.CSSProperties =
      style ? {
         color: finalColor,
         backgroundColor: finalBgColor,
         ...style,
      } : {
         color: finalColor,
         backgroundColor: finalBgColor,
      }

   const standardBtnClasses = `${styles.button} font-normal px-7 py-2 rounded-lg cursor-pointer no-underline`
   const finalBtnClassName = buttonClassName ? standardBtnClasses + ' ' + buttonClassName : standardBtnClasses

   return (
      <div className={className}>
         <a role='cta' className={finalBtnClassName} style={finalCss}>
            {children}
         </a>
      </div>
   )
}

export default CTAButton
