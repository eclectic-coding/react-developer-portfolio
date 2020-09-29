import React from 'react'
import Hero from '../components/Hero'

import Footer from '../components/Footer'

const Contact = () => {
  // console.log(user)
  return (
    <main className="has-page-height-desktop">
      <Hero location={location} />
      <section className="container has-page-height-desktop">
        <h2>Contact Page</h2>
      </section>
      <Footer />
    </main>
  )
}

export default Contact
