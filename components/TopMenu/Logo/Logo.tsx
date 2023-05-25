import styles from './Logo.module.scss'

function Logo({ logoMode, className }: { logoMode: boolean, className?: string }) {
   const additionalClassName = 'flex items-center justify-center'
   const finalClassName = className ? additionalClassName + ' ' + className : additionalClassName

   return (
      <div className={finalClassName}>
         <a
            className={`${styles.logo} text-xl font-semibold ${logoMode ? 'white' : styles.color1
               } cursor-pointer hover:text-2xl`}
            data-label='logo'
         >
            Logo
         </a>
      </div>
   )
}

export default Logo
