import React from "react"

import Seo from "./components/Seo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LogoCloud from "./components/LogoCloud"

const PageLayout = ({ metadata, children }) => {
  return (
    <>
      <Seo metadata={metadata} />
      <main className="bg-gray-50">
        <Header />
        {children}
        <LogoCloud />
        <Footer />
      </main>
    </>
  )
}

export default PageLayout
