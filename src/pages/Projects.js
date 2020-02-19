import React from 'react'
import Layout from '../components/Layout'
// import ProjectCard from '../components/ProjectCard'

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="section">
        <div className="row columns">
          {user.projects.map((project, i) => (
            <div className="column is-one-third">
              <div key={i} className="card large">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={user.projects[i].images[0].resolutions.desktop.url}
                      alt={project.name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-96x96">
                        <img src={user.basics.picture} alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4 no-padding">{project.displayName}</p>
                      <p>
                        <span className="title is-6">
                          <a href={project.githubUrl}>GitHub</a>
                        </span>
                      </p>
                      <p className="subtitle is-6">Software Developer</p>
                    </div>
                  </div>
                  <div className="content">
                    {project.summary}
                    <div className="background-icon">
                      <span className="icon-twitter"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
