import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link'


function About() {

    const tags = ["Software Engineer", "Full Stack Developer", "AdTech Specialist"];
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

                            <p className="intro">
                                During my MSc in Computer Science at the University of Bristol, I developed strong skills in programming, web development, and modern software tools. I developed an <span className="highlight">AI travel app</span> in collaboration with IBM and worked on a game project within a team that strengthened both my technical and collaborative abilities. I also took part in hackathons to broaden my problem-solving experience and apply my skills in real-world settings.
                                <br /><br />
                                Before moving into software engineering, I worked in the <span className="highlight">AdTech</span> industry, collaborating with designers and developers to deliver data-driven solutions that improved traffic, engagement, and advertising performance. This experience gave me a strong foundation in user behaviour, analytics, and scalable web technologies — bridging commercial understanding with engineering practice.
                                <br /><br />
                                I’m passionate about building products that connect technology with real-world impact, combining <span className="highlight">technical problem-solving</span> with <span className="highlight">creative and user-centred thinking</span>.
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