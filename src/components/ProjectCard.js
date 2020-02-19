import React from 'react'

const ProjectCard = ({ user }) => {
  return (
    <div className="column is-one-third">
      <div className="card large">
        <div className="card-image">
          <figure className="image">
            <img
              src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
              alt="Image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4 no-padding">{project.name}</p>
              <p>
                <span className="title is-6">
                  <a href="http://twitter.com/#">@twitterid</a>
                </span>
              </p>
              <p className="subtitle is-6">Lead Developer</p>
            </div>
          </div>
          <div className="content">
            The Beast stumbled in the dark for it could no longer see the path. It started
            to fracture and weaken, trying to reshape itself into the form of metal. Even
            the witches would no longer lay eyes upon it, for it had become hideous and
            twisted.
            <div className="background-icon">
              <span className="icon-twitter"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
