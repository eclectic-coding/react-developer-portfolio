import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faDev,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content has-text-centered">
          <div className="has-padding-15">
            <a href="/" target="_blank">
              <FontAwesomeIcon className="soc soc__dev" icon={faDev} size="lg" />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon className="soc soc__github" icon={faGithub} size="lg" />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon
                className="soc soc__linkedin"
                icon={faLinkedin}
                size="lg"
              />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon className="soc soc__twitter" icon={faTwitter} size="lg" />
            </a>
          </div>
          <p>
            <a href="http://jgthms.com">Chuck Smith</a>, your local passionate developer.
            All source code is licensed{' '}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
