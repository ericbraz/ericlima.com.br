import HashLoader from 'react-spinners/HashLoader'
import { colors } from '../../../../styles/style'

interface Props {
   readonly show: boolean
   readonly size?: number
}

const LoaderComponent: React.FC<Props> = ({ show, size = 60 }) => (
   <>
      {show && (
         <div
            className='text-2xl absolute w-screen h-screen top-0 left-0 font-bold text-white flex justify-center items-center z-10'
            style={{ background: colors.color1 }}
         >
            <HashLoader color={colors.color4} loading={true} size={size} />
         </div>
      )}
   </>
)

export default LoaderComponent
