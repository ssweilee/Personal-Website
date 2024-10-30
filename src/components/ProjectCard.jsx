import { Col } from "react-bootstrap"
import PropTypes from "prop-types"

function ProjectCard ({ title, liveSiteLink, liveSite, gitHubLink, gitHub, imgUrl, onClick }) {
    return (
      <Col size={102} sm={6} md={4}>
        <div className="proj-imgbx" onClick={onClick}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <div className="proj-links">
              <a href={liveSiteLink} target="_blank" className="liveSite">{liveSite}</a>
              <a href={gitHubLink} target="_blank" className="gitHub">{gitHub}</a>
            </div>
          </div>
        </div>
      </Col>
    )
  }

export default ProjectCard

ProjectCard.propTypes = {
    title:
    PropTypes.string.isRequired,
    liveSiteLink:
    PropTypes.string.isRequired,
    liveSite:
    PropTypes.string.isRequired,
    gitHubLink:
    PropTypes.string.isRequired,
    gitHub:
    PropTypes.string.isRequired,
    imgUrl:
    PropTypes.string.isRequired,
    onClick:
    PropTypes.func.isRequired,
}


