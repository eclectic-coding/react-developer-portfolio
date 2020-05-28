import React from 'react'
import Hero from '../components/Hero'

import Footer from '../components/Footer'

const Education = ({ user }) => {
  console.log(user)
  return (
    <main className="has-page-height-desktop">
      <Hero location={location} />
      <section className=" container has-page-height-desktop">
        <h2>Education Page</h2>
        <ul>
          {user.education.map((item, index) => (
            <li key={index}>{item.institution}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  )
}

export default Education
