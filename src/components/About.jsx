import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'


function About() {
    {/*
         
    const [ isDeleting, setIsDeleting ] = useState(false)
    const [ text, setText ] = useState('')
    const [ delta, setDelta ] = useState(100 - Math.random() * 100)
    const [ index, setIndex ] = useState(0);
    const toRotate = [ "Full-Stack Developer", "User-Centred Thinker", "Problem Solver" ]
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
    */}

    const tags = ["Full-stack development", "Agile & teamwork", "Problem-solving"];
    const [activeIndex, setActiveIndex] = useState(0);
    const period = 2000; 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % tags.length);
        }, period);

        return () => clearInterval(interval);
    }, []);

    return (

            <section className="about" id="about">
                <Container fluid style={{ maxWidth: '1200px', padding: '0 5%' }}>
                    <Row className="justify-content-center">
                        <Col xs={12} className="about-content">
                            <div className="name-location">
                                <h1>Hi! I&apos;m Sandy</h1>
                                <p className="location">📍 Bristol, UK</p>
                            </div>
                            <div className="about-tags rotating-tags">
                            {tags.map((tag, index) => (
                                <span
                                key={index}
                                className={`tag ${activeIndex === index ? 'active' : ''}`}
                                >
                                {tag}
                                </span>
                            ))}
                            </div>
                            {/*
                                <div className="intro-header">
                                <h3 className="rotating-text">
                                    <span className="wrap">{text}</span>
                                </h3>
                            </div>
                            */}
                            
                            <p className="intro">
                                During my MSc in Computer Science at the University of Bristol, I sharpened my skills in <span className="highlight">programming</span>, <span className="highlight">system design</span>, and modern development tools. I developed an <span className="highlight">AI travel app in collaboration with IBM</span> and built a <span className="highlight">team-based game project</span> that honed both my technical and collaborative abilities.
                                <br /><br />
                                Beyond academia, I competed in <span className="highlight">two hackathons</span>, applying <span className="highlight">agile methods</span> and <span className="highlight">version control</span> to deliver innovative solutions under time pressure. With a background in advertising and project management, I bring a unique mix of technical expertise and <span className="highlight">user-centred thinking</span> to tackle real-world challenges.
                                <br /><br />
                                I&apos;m passionate about turning ideas into impactful software, and I&apos;m excited to bring this energy into collaborative projects and professional opportunities.
                            </p>
                            <div className="link">
                                <HashLink to="#connect">
                                    <button className="connect" onClick={() => console.log('connect')}>Let&apos;s connect <ArrowRightCircle size={25} /></button>
                                </HashLink>
                            </div>
                            <div className="scroll-down">
                                <HashLink smooth to="#skills">
                                    <span><FontAwesomeIcon className="scroll-down-icon1" icon={faChevronDown} /></span>
                                    <span><FontAwesomeIcon className="scroll-down-icon2" icon={faChevronDown} /></span>
                                </HashLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

    )
}

export default About