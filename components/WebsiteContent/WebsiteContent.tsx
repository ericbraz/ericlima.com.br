import React from 'react'
import BeforeFold from './BeforeFold'
import StackSection from './StackSection'

function WebsiteContent() {
   const topClasses = 'flex items-center justify-center px-14'
   const classes = topClasses + ' py-16'

   const outerDivClasses = 'max-w-[1200px] flex'

   return (
      <>
         <section id='presentation' className={`${topClasses} pt-24 pb-14`}>
            <BeforeFold outerDivClasses={outerDivClasses} />
         </section>
         <section id="stack" className={classes}>
            <StackSection outerDivClasses={outerDivClasses} />
         </section>
      </>
   )
}

export default WebsiteContent
