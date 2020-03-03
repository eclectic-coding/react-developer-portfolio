import React from 'react'
import Menubar from './Menubar'
import Footer from './Footer'

const Layout = ({ children, location }) => {
  return (
    <div>
      <Menubar location={location} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
