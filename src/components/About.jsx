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
                                {/*<p className="location">📍 Bristol, UK</p>*/}
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
                                    I’m a recent MSc Computer Science graduate with hands-on experience in 
                                    <span className="highlight"> full-stack development</span>, 
                                    <span className="highlight"> AI-integrated web applications</span>, and 
                                    <span className="highlight"> cloud services</span>.  
                                    <br /><br />
                                    Key projects include:
                                    <ul>
                                        <li>Developed a <span className="highlight">full-stack travel app</span> with IBM, using React Native, Node.js, and Watsonx AI, focusing on usability and iterative testing.</li>
                                        <li>Built an <span className="highlight">AI Sentiment & Trend Dashboard</span> using AWS serverless tools and NLP APIs to generate audience insights.</li>
                                        <li>Participated in hackathons and team-based projects to strengthen problem-solving, collaboration, and software engineering skills.</li>
                                    </ul>
                                    <p>
                                        My prior experience in <span className="highlight">AdTech</span> exposed me to analytics and bridging technical solutions with business needs.  
                                    </p>
                                    <p>
                                        I’m passionate about designing <span className="highlight">human-centered software</span> and exploring how AI can enhance user experience in everyday digital tools.
                                    </p>
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