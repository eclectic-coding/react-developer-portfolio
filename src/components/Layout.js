import React from 'react'
import Menubar from './Menubar'

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      <div>{children}</div>
    </>
  )
}

export default Layout
