import React from 'react'
import styles from './CTAButton.module.scss'

function CTAButton({
   children,
   bgColor,
   color,
   style,
   className,
}: {
   children: any
   bgColor?: string
   color?: string
   style?: React.CSSProperties
   className?: string
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

   return (
      <div className={className}>
         <a role='cta' className={`${styles.button} 'font-semibold px-7 py-2 rounded-lg cursor-pointer no-underline'`} style={finalCss}>
            {children}
         </a>
      </div>
   )
}

export default CTAButton
