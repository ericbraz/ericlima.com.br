import React, { useEffect, useState } from 'react'
import LoaderComponent from '../../verse/LoaderComponent'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [loader, setLoader] = useState(true)

   useEffect(() => {
      setTimeout(() => setLoader(false), 2300)
   }, [])

   return (
      <div>
         {children}

         <LoaderComponent show={loader} />
      </div>
   )
}

export default Layout
