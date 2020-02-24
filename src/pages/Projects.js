import React from 'react'
import Layout from '../components/Layout'
import Truncate from 'react-truncate'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faVimeo } from '@fortawesome/free-brands-svg-icons'

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="section">
        <div className="columns is-multiline">
          {user.projects.map((project, i) => (
            <div className="column is-one-third">
              <div key={i} className="card large">
                <div className="card-image">
                  <figure className="image">
                    <a href={project.githubUrl}>
                      <img
                        src={user.projects[i].images[0].resolutions.desktop.url}
                        alt={project.name}
                      />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">
                        <a href={project.githubUrl}>{project.displayName}</a>
                      </p>
                      <div className="has-text-centered">
                        <a href={project.githubUrl} target="_blank">
                          <FontAwesomeIcon
                            className="card__icon github"
                            icon={faGithub}
                          />
                        </a>
                        {project.videos[0] !== undefined ? (
                          <a href={project.videos[0].url} target="_blank">
                            <FontAwesomeIcon
                              className="card__icon vimeo"
                              icon={faVimeo}
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <Truncate lines={4}>{project.summary}</Truncate>
                  </div>
                  <div>
                    {project.languages.map((language, i) => (
                      <span key={i} className="tag is-primary has-margin-right-10">
                        {language}
                      </span>
                    ))}
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
