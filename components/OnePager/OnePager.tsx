import React, { useEffect } from 'react'
import Footer from '../Footer'
import Layout from '../reusables/layouts/Layout'
import TopMenu from '../TopMenu'
import WebsiteContent from '../WebsiteContent'
import useLanguage from '../../hooks/useLanguage'
import { Languages } from '../../interfaces/languagesType'

function OnePager() {
   const { setLanguage } = useLanguage()
   useEffect(() => {
      const userLanguage = navigator.language.split('-')[0];
      if (['en', 'pt', 'fr'].includes(userLanguage)) setLanguage(userLanguage as Languages);
   }, [])

   return (
      <Layout>
         <TopMenu />
         <WebsiteContent />
         <Footer />
      </Layout>
   )
}

export default OnePager
