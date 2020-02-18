import React from 'react'
import Layout from '../components/Layout'

const Projects = ({ user }) => {
  return (
    <Layout>
      <div className="container">
        <h2 className="title">Hello from Projects</h2>
        <ul>
          {user.projects.map((project, index) => (
            <li key={index}>{project.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Projects
