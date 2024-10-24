import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faReact, faBootstrap, faMailchimp, faNode, faJava} from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faTerminal, faC } from '@fortawesome/free-solid-svg-icons'
//import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Container } from "react-bootstrap"


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
                                {/*<p>Recently, I&apos;ve been working on JavaScript and React development, while also delving into Node.js learning.</p>*/}
                                <br></br>
                                <div className="skills-container">
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                                        <p>HTML5</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faCss3Alt} />
                                        <p>CSS</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon javascript" icon={faJs} />
                                        <p>JAVASCRIPT + ES6</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faC} />
                                        <p>C</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon" icon={faJava} />
                                        <p>JAVA</p>
                                    </div>
                                    <div className='skill-div'>
                                        <FontAwesomeIcon className="skill-icon react" icon={faReact} />
                                        <p>REACT</p>
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
                            </div>
                        </div>}
                    </TrackVisibility>
                </div>
            </Container>
                    
        </section>
        
    )
}

export default Skills