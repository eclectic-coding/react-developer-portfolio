import React, { useState, useEffect } from 'react'
import AppRoutes from '../routes/AppRoutes'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/eclectic-coding')
      .then(res => res.json())
      .then(user => {
        setUser(user)
      })
  }, [])

  if (!user) {
    return <div />
  }

  return <AppRoutes user={user} />
}

export default App
