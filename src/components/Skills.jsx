import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faReact, faBootstrap, faMailchimp, faNode, faJava} from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faTerminal, faC, faDatabase } from '@fortawesome/free-solid-svg-icons'
//import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Container } from 'react-bootstrap'
import flutter from '../assets/icons/flutter.svg'
import express from '../assets/icons/express.svg'
import { links } from '../constants/links'


function Skills () {
    return (
        <section className='skill' id='skills'>
            <Container>
                <div className="row">
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div>
                            <div className="skill-bx">
                                <h2>Skills</h2>
                                <br></br>
                                <div className="skills-container">
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faJava} />
                                        <p>JAVA</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon javascript" icon={faJs} />
                                        <p>JAVASCRIPT</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faDatabase} />
                                        <p>SQL</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faC} />
                                        <p>C</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faNode} />
                                        <p>Node.js</p>
                                    </div>
                                    <div className='skill-div'>
                                    <img className="svg-icon" src={express} alt="Express.js" />
                                        <p>Express.js</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                                        <p>HTML5</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faCss3Alt} />
                                        <p>CSS</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon react" icon={faReact} />
                                        <p>REACT</p>
                                    </div>
                                    <div className='skill-div'>
                                        <img src={flutter} alt='Flutter' className='skill-icon svg-icon' />
                                        <p>Flutter</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faGitAlt} />
                                        <p>GIT</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faGithub} />
                                        <p>GITHUB</p>
                                    </div>
                                </div>
                                <div className="resume-link-wrapper">
                                    <p className="resume-link">Checkout more on my <a href={links.resume} target="_blank" rel="noopener noreferrer">Resume</a></p>
                                </div>
                            </div>
                        </div>}
                    </TrackVisibility>
                </div>
            </Container>
                    
        </section>
        
    )
}

export default Skills