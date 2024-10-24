import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'
import {
  BrowserRouter as Router
} from "react-router-dom";

function About() {
    const [ isDeleting, setIsDeleting ] = useState(false)
    const [ text, setText ] = useState('')
    const [ delta, setDelta ] = useState(100 - Math.random() * 100)
    const [ index, setIndex ] = useState(0);
    const toRotate = [ "Web Developer", "Student at UoB", "Advertising Strategist" ]
    const period = 1500

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
            setDelta(prevDelta => prevDelta / 3)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setIndex(prevIndex => prevIndex + 1);
            setDelta(100)
        } 
    }

    return (
        <Router>
            <section className="about" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={10} xl={8}>
                            <span className="tagline">Welcome to my Personal Website</span>
                            <h3>Hi! I&apos;m</h3>
                            <h1><span>Tzu Wei(Sandy) Lee</span></h1>
                            <h3><span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Student at UoB", "Advertising Strategist" ]'><span className="wrap">{text}</span></span></h3>
                            <p>I am a web developer with a passion for problem-solving and innovation, currently pursuing a Master’s degree in Computer Science at the University of Bristol.<br></br><br></br>I am currently learning C, Java, and computer architecture.</p>
                            <div className="links">
                                <a href="" target="_blank" rel="noopener noreferrer"><button>Get Resume<ArrowDownCircle size={25} /></button></a>
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

export default About