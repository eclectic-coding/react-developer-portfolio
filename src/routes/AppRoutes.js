import React from 'react'
import { Router } from '@reach/router'
import Projects from '../pages/Projects'
import Home from '../pages/Home'

const AppRoutes = ({ user }) => {
  return (
    <Router>
      <Home path="/" />
      <Projects user={user} path="/projects" />
    </Router>
  )
}

export default AppRoutes
