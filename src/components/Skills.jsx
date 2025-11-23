import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJs, faReact, faBootstrap, faMailchimp, faNode, faJava, faPython, faAws } from '@fortawesome/free-brands-svg-icons'
import { faBook, faC, faN, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
//import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { Container } from 'react-bootstrap'
import flutter from '../assets/icons/flutter.svg'
import express from '../assets/icons/express.svg'
import tailwindCSS from '../assets/icons/tailwindCSS.svg'
import ibmAI from '../assets/icons/ibmAI.svg'
import { links } from '../constants/links'


function Skills () {
    {/* 
    const languages = [
        { icon: faJava, label: 'Java' },
        { icon: faJs, label: 'JavaScript' },
        { icon: faPython, label: 'Python' },
        { icon: faC, label: 'C' },
        { icon: faDatabase, label: 'SQL' },
        { icon: faHtml5, label: 'HTML5' },
        { icon: faCss3Alt, label: 'CSS3' },
    ];

    const aiAndCloud = [
        { icon: faAws, label: 'AWS' },
        { img: ai, label: 'IBM Watsonx AI' },
    ];

    const frameworks = [
        { icon: faReact, label: 'React' },
        { icon: faNode, label: 'Node.js' },
        { img: express, label: 'Express.js' },
        { icon: faN, label: 'Next.js' },
        { img: flutter, label: 'Flutter' },
        { icon: faGitAlt, label: 'Git' },
        { icon: faLinux, label: 'Linux' },
        { img: tailwindCSS, label: 'tailwindCSS' },
        
    ];

    const spokenLanguages = [
        { icon: faBook, label: 'English' },
        { icon: faBook, label: 'Mandarin' },
        { icon: faBook, label: 'Basic French' },
        { icon: faBook, label: 'Basic Korean' },
      ];
*/}



      const frontend = [
        { icon: faReact, label: 'React' },
        { icon: faN, label: 'Next.js' },
        { icon: faJs, label: 'JavaScript' },
        { img: tailwindCSS, label: 'TailwindCSS' },
        { icon: faHtml5, label: 'HTML5' },
        { icon: faCss3Alt, label: 'CSS3' },
    ];

    const backend = [
        { icon: faNode, label: 'Node.js' },
        { img: express, label: 'Express.js' },
        { icon: faC, label: 'C' },
        { icon: faDatabase, label: 'SQL' },
        { icon: faJava, label: 'Java' },
        { icon: faPython, label: 'Python' },
    ];

    const cloud = [
        { icon: faAws, label: 'AWS Lambda' },
        { icon: faGitAlt, label: 'Git / CI/CD' },
        
    ];

    const ai = [
        { img: ibmAI, label: 'IBM Watsonx AI' },
        { icon: faAws, label: 'AWS Bedrock (Claude 3)' },
    ];

    const tools = [
        { img: flutter, label: 'Flutter' },
        { icon: faGitAlt, label: 'Git' },
        { icon: faLinux, label: 'Linux' },
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
                            {/*
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

 */}
                                <div className="skills-column">
                                    <h3>Frontend</h3>
                                    {frontend.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-column">
                                    <h3>Backend</h3>
                                    {backend.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-column">
                                    <h3>Cloud & DevOps</h3>
                                    {cloud.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-column">
                                    <h3>AI & NLP</h3>
                                    {ai.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="skills-column">
                                    <h3>Tools</h3>
                                    {tools.map((skill, idx) => (
                                        <div key={idx} className='skill-div'>
                                            {skill.icon && <FontAwesomeIcon className="skill-icon" icon={skill.icon} />}
                                            {skill.img && <img className="skill-icon svg-icon" src={skill.img} alt={skill.label} />}
                                            <p>{skill.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* 
                        <div className="resume-link-wrapper">
                            <p className="resume-link">Checkout more on my <a href={links.resume} target="_blank" rel="noopener noreferrer">CV</a></p>
                        </div>
                        */}
                    </div>
                )}
                </TrackVisibility>
            </Container>         
        </section>  
    );
}

export default Skills