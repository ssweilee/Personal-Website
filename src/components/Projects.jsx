import { useState, useContext } from "react"
import { ThemeContext } from '../App'
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from './ProjectCard'
import projImg1W from '../assets/img/project-img1-w.png'
import projImg1B from '../assets/img/project-img1-b.png'
import projImg3 from '../assets/img/project-img3.png'
import "react-multi-carousel/lib/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faFontAwesome, faHtml5, faJs, faMailchimp, faNode, faReact } from '@fortawesome/free-brands-svg-icons'

function Projects () {
    const { theme } = useContext(ThemeContext)
    const [ description, setDescription ] = useState("")
    const [ icons, setIcons ] = useState([])
 

    const handleCardClick = (project) => {
        setDescription(project.description)

        switch(project.title) {
            case "Personal Website" :
                setIcons([faHtml5, faCss3Alt, faJs, faReact, faNode, faFontAwesome]);
                break;
            case "Etch-A-Sketch":
                setIcons([faHtml5, faCss3Alt, faJs, faFontAwesome]);
                break;
            default: 
            setIcons([]);
        }
    }

    const projects = [
        {
            title:"Personal Website",
            description: "Built a personal website using React, Bootstrap, Node.js, Express.js, and CSS, showcasing technical skills. Features include theme toggle, weather API, and contact form. Backend endpoints handle form data requests.",
            liveSiteLink: "https://ssweilee.github.io/Personal-Website/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Personal-Website",
            gitHub: "GITHUB",
            imgUrl: theme === "dark" ? projImg1W : projImg1B,
        },
        {
            title:"Etch-A-Sketch",
            description: "Developed an online drawing tool with features including color selection, rainbow mode, eraser mode, and grid size adjustment. Built using HTML, CSS, and JavaScript with CSS animations enhancing for visual effects.",
            liveSiteLink: "https://ssweilee.github.io/Etch-A-Sketch/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Etch-A-Sketch",
            gitHub: "GITHUB",
            imgUrl: projImg3
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <h2>Projects</h2>
                <p className="text">Click the project to see more information.</p>
                
                    <div className="projects">
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        onClick={() => handleCardClick(project)} 
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="description">
                        {description && (
                            <div>
                                <p className="description">{description}</p> 
                                <h3>Technologies Used</h3>  
                                <div className="icons">
                                    {icons.map((icon, index) => (<FontAwesomeIcon icon={icon} key={index} className="icon"/>))}    
                                </div>
                            </div>
                        )}
                    </div>
            </Container>
        </section>
    )
}

export default Projects