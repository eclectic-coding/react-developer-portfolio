import React from 'react'
import Menubar from './Menubar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Menubar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
