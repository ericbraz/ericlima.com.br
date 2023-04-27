import React from 'react'
import { IconType } from 'react-icons/lib'
import { colors } from '../../../styles/style'
import styles from './MyCircleComponent.module.scss'

interface Props {
   size?: number
   color?: string
   Icon: IconType
   dataLabel?: string
}

function MyCircleComponent(props: Props) {
   const { size = 45, color = colors.color1, Icon, dataLabel } = props

   const ratio = 0.6
   const divStyle = {
      color: color,
      width: `${size}px`,
      height: `${size}px`,
   }

   return (
      <div className='m-2'>
         <div
            className={`${styles.circle} flex justify-center items-center hover:cursor-pointer`}
            style={divStyle}
            data-label={dataLabel ? dataLabel : ''}
         >
            <Icon size={ratio * size} />
         </div>
      </div>
   )
}

export default MyCircleComponent
