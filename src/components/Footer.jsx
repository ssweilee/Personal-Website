import { Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { links } from '../constants/links'

function Footer () {
    return (
        <footer className="footer">
            <Container>
                <Row size={12} className="align-item-center text-center text-sm-end">
                    <div className="social-icons">
                        <a href={links.linkedin} target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                        <a href={links.mail} target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
                        <a href={links.github} target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                    </div>
                    <span>CopyRight © {new Date().getFullYear()} Designed by Tzu Wei Lee. All Right Reserved</span>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer