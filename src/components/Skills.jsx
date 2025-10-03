import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faReact, faBootstrap, faMailchimp, faNode, faJava, faPython} from '@fortawesome/free-brands-svg-icons'
import { faBook, faC, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
//import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Container } from 'react-bootstrap'
import flutter from '../assets/icons/flutter.svg'
import express from '../assets/icons/express.svg'
import { links } from '../constants/links'


function Skills () {
    const languages = [
        { icon: faJava, label: 'Java' },
        { icon: faJs, label: 'JavaScript' },
        { icon: faPython, label: 'Python' },
        { icon: faC, label: 'C' },
        { icon: faDatabase, label: 'SQL' },
        { icon: faHtml5, label: 'HTML5' },
        { icon: faCss3Alt, label: 'CSS3' },
    ];

    const frameworks = [
        { icon: faReact, label: 'React' },
        { icon: faNode, label: 'Node.js' },
        { img: express, label: 'Express.js' },
        { img: flutter, label: 'Flutter' },
        { icon: faGitAlt, label: 'Git' },
        { icon: faLinux, label: 'Linux' },
    ];

    const spokenLanguages = [
        { icon: faBook, label: 'English' },
        { icon: faBook, label: 'Mandarin' },
        { icon: faBook, label: 'Basic French' },
        { icon: faBook, label: 'Basic Korean' },
      ];

    return (
        <section className='skill' id='skills'>
            <Container>
                <TrackVisibility>
                {({ isVisible }) => (
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <br></br>
                        <div className="skills-wrapper">
                            <div className="skills-column languages">
                                <h3>Programming Languages</h3>
                                {languages.map((skill, idx) => (
                                    <div key={idx} className='skill-div'>
                                        {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                        {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                        <p>{skill.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="skills-column frameworks">
                                    <h3>Frameworks & Tools</h3>
                                    {frameworks.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className={`skill-icon svg-icon ${skill.label === 'Express.js' ? 'express-icon' : skill.label === 'Flutter' ? 'flutter-icon' : ''}`} src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-column spokenLanguages">
                                    <h3>Languages</h3>
                                    {spokenLanguages.map((lang, idx) => (
                                    <div key={idx} className='skill-div'>
                                        {lang.icon && <FontAwesomeIcon className="skill-icon" icon={lang.icon} />}
                                        <p>{lang.label}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        <div className="resume-link-wrapper">
                            <p className="resume-link">Checkout more on my <a href={links.resume} target="_blank" rel="noopener noreferrer">CV</a></p>
                        </div>
                    </div>
                )}
                </TrackVisibility>
            </Container>         
        </section>  
    );
}

export default Skills