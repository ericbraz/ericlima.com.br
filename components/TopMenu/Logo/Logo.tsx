import usePageMode from '../../../hooks/usePageMode'
import styles from './Logo.module.scss'

function Logo({ logoStyle, className }: { logoStyle: boolean, className?: string }) {
   const { pageMode } = usePageMode()

   const additionalClassName = 'flex items-center justify-center'
   const finalClassName = className ? additionalClassName + ' ' + className : additionalClassName

   return (
      <div className={finalClassName}>
         <a
            className={`${styles.logo} text-xl font-semibold ${pageMode === 'light' ?
               (logoStyle ? 'text-[var(--light-mode-light-text)]' : 'text-[var(--light-mode-text)]') :
               'text-[var(--dark-mode-text)]'
               } cursor-pointer hover:text-2xl`}
            data-label='logo'
         >
            Logo
         </a>
      </div>
   )
}

export default Logo
