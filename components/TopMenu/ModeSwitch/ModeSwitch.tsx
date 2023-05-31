import { BsSunFill, BsSun, BsMoonFill, BsMoon } from 'react-icons/bs'
import usePageMode from '../../../hooks/usePageMode'
import styles from './ModeSwitch.module.scss'

function ModeSwitch({ navbarStyle }: { navbarStyle?: boolean | null }) {
    const { lightMode, setPageMode } = usePageMode()

    const size = 60

    return (
        <span className='inline-block px-4'>
            <label className={`cursor-pointer relative flex justify-between w-[80px] h-[40px] rounded-[50px] ${lightMode ? styles.toggleLight : styles.toggleDark} ${navbarStyle ? styles.toggleMenuDark : (navbarStyle === null ? styles.zeroBoxShadow : '')}`} onClick={() => setPageMode(lightMode ? 'dark' : 'light')}>
                {lightMode ?
                    (
                        <>
                            <i className={`${styles.sun} bx bxs-sun flex justify-center items-center w-1/2 leading-[40px] text-center z-10`}>
                                <BsSunFill size={size / 4} />
                            </i>
                            <i className={`${styles.moon} bx bx-moon flex justify-center items-center w-1/2 leading-[40px] text-center z-10`}>
                                <BsMoon size={size / 4.8} />
                            </i>
                        </>
                    ) :
                    (
                        <>
                            <i className={`${styles.sun} bx bxs-sun flex justify-center items-center w-1/2 leading-[40px] text-center z-10`}>
                                <BsSun size={size / 4} />
                            </i>
                            <i className={`${styles.moon} bx bx-moon flex justify-center items-center w-1/2 leading-[40px] text-center z-10`}>
                                <BsMoonFill size={size / 4.8} />
                            </i>
                        </>
                    )
                }
                <span className={`${styles.ball} absolute w-[40px] h-[40px] m-[${size / 16}px] rounded-full`}></span>
            </label>
        </span>
    )
}

export default ModeSwitch
