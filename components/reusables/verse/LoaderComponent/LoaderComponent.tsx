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
            className='fixed text-2xl w-screen top-0 left-0 bottom-0 font-bold text-white flex justify-center items-center z-50'
            style={{ background: colors.color1 }}
         >
            <HashLoader color={colors.color4} loading={true} size={size} />
         </div>
      )}
   </>
)

export default LoaderComponent
