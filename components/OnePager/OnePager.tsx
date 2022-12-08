import React from 'react'
import Footer from '../Footer'
import Layout from '../reusables/layouts/Layout'
import TopMenu from '../TopMenu'
import WebsiteContent from '../WebsiteContent'

function OnePager() {
   return (
      <Layout>
         <TopMenu />
         <WebsiteContent />
         <Footer />
      </Layout>
   )
}

export default OnePager
