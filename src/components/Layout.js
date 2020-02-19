import React from 'react'
import Menubar from './Menubar'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Menubar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
