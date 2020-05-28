import React from 'react'
// Components
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import Features from '../components/Features'

const Home = ({ location }) => {
  return (
    <main className="has-page-height-desktop">
      <Hero location={location} />
      <CallToAction />
      <Features />
      <Footer />
    </main>
  )
}

export default Home
