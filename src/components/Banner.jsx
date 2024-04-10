import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'
import {
  BrowserRouter as Router
} from "react-router-dom";

function Banner() {
    const [ isDeleting, setIsDeleting ] = useState(false)
    const [ text, setText ] = useState('')
    const [ delta, setDelta ] = useState(300 - Math.random() * 100)
    const [ index, setIndex ] = useState(0);
    const toRotate = [ "Web Developer", "Digital Marketer", "Advertising Planner" ]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = index % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setIndex(prevIndex => prevIndex + 1);
            setDelta(500)
        } 
    }

    return (
        <Router>
            <section className="banner" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={8} xl={7}>
                            <span className="tagline">Welcome to my Personal Website</span>
                            <h3>Hi! I&apos;m</h3>
                            <h1><span>Tzu Wei Lee</span></h1>
                            <h3><span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Digital Marketer", "Advertising Planner" ]'><span className="wrap">{text}</span></span></h3>
                            <p>With 5+ years of experience in the Ad Tech industry and processing strong teamwork and project management skills, I am deeply passionate about the impact power of technology.<br /><br />Currently transitioning to a carer as a web developer. I am excited to leverage my skills and expertise in new ways.<br /><br />I am actively seeking opportunities that align with my expertise and interests.</p>
                            <div className="links">
                                <a href="https://drive.google.com/file/d/1a66GEeCskwOcpigCTU_F-45bIWhHJwbz/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button>Get Resume<ArrowDownCircle size={25} /></button></a>
                                <HashLink to="#connect">
                                    <button className="connect" onClick={() => console.log('connect')}>Let&apos;s connect <ArrowRightCircle size={25} /></button>
                                </HashLink>
                            </div>
                        </Col>
                            <div className="scroll-down">
                                <HashLink smooth to="#skills">
                                    <span><FontAwesomeIcon className="scroll-down-icon1" icon={faChevronDown} /></span>
                                    <span><FontAwesomeIcon className="scroll-down-icon2" icon={faChevronDown} /></span>
                                </HashLink>
                            </div>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}

export default Banner