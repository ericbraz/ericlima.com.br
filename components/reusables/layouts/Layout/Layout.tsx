import React, { useEffect, useState } from 'react'
import LoaderComponent from '../../verse/LoaderComponent'
import usePageMode from '../../../../hooks/usePageMode'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [loader, setLoader] = useState(true)

   useEffect(() => {
      setTimeout(() => setLoader(false), 10)
   }, [])

   const { pageMode } = usePageMode()

   return (
      <div className={pageMode}>
         {children}

         <LoaderComponent show={loader} />
      </div>
   )
}

export default Layout
