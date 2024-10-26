import { Container, Row } from "react-bootstrap"
//import MailchimpForm from './MailchimpForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <footer className="footer">
            <Container>
                <Row size={12} className="align-item-center text-center text-sm-end">
                    {/*<MailchimpForm />*/}
                    <div className="social-icons">
                    <a href="https://www.linkedin.com/in/tzuweilee/" target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                    <a href='mailto:tzuweilee.20@gmail.com' target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
                    <a href="https://github.com/ssweilee" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                    </div>
                    <span>CopyRight © {new Date().getFullYear()} Designed by Tzu Wei Lee. All Right Reserved</span>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer