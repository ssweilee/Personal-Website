import { useState, useContext } from "react"
import { ThemeContext } from '../App'
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from './ProjectCard'
import projImg1W from '../assets/img/project-img1-w.png'
import projImg1B from '../assets/img/project-img1-b.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import Carousel from 'react-multi-carousel'
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
                setIcons([faHtml5, faCss3Alt, faJs, faReact, faNode, faMailchimp, faFontAwesome]);
                break;
            case "Calculator":
                setIcons([faHtml5, faCss3Alt, faJs]);
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
            title:"Calculator",
            description: "Built a calculator app using HTML, CSS, and Javascript, featuring basic arithmetic operation and intuitive user interface.",
            liveSiteLink: "https://ssweilee.github.io/Calculator/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Calculator",
            gitHub: "GITHUB",
            imgUrl: projImg2
        },
        {
            title:"Etch-A-Sketch",
            description: "Developed an online drawing tool with features including color selection, rainbow mode, eraser mode, and grid size adjustment. Built using HTML, CSS, and JavaScript with CSS animations enhancing for visual effects.",
            liveSiteLink: "https://ssweilee.github.io/Etch-A-Sketch/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Etch-A-Sketch",
            gitHub: "GITHUB",
            imgUrl: projImg3
        },
        {
            title:"Personal Website",
            description: "Built a personal website using React, Bootstrap, Node.js, Express.js, and CSS, showcasing technical skills. Features include theme toggle, weather API, contact form and Mailchimp API integrating for newsletter subscription. Backend endpoints handle form data and subscription requests.",
            liveSiteLink: "",
            liveSite: "LIVE SITE",
            gitHubLink: "",
            gitHub: "GITHUB",
            imgUrl: theme === "dark" ? projImg1W : projImg1B,
        },
        {
            title:"Calculator",
            description: "Built a calculator app using HTML, CSS, and Javascript, featuring basic arithmetic operation and intuitive user interface.",
            liveSiteLink: "https://ssweilee.github.io/Calculator/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Calculator",
            gitHub: "GITHUB",
            imgUrl: projImg2
        },
        {
            title:"Etch-A-Sketch",
            description: "Developed an online drawing tool with features including color selection, rainbow mode, eraser mode, and grid size adjustment. Built using HTML, CSS, and JavaScript with CSS animations enhancing for visual effects.",
            liveSiteLink: "https://ssweilee.github.io/Etch-A-Sketch/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Etch-A-Sketch",
            gitHub: "GITHUB",
            imgUrl: projImg3
        },
        {
            title:"Personal Website",
            description: "Built a personal website using React, Bootstrap, Node.js, Express.js, and CSS, showcasing technical skills. Features include theme toggle, weather API, contact form and Mailchimp API integrating for newsletter subscription. Backend endpoints handle form data and subscription requests.",
            liveSiteLink: "https://ssweilee.github.io/Personal-Website/",
            liveSite: "LIVE SITE",
            gitHubLink: "https://github.com/ssweilee/Personal-Website",
            gitHub: "GITHUB",
            imgUrl: theme === "dark" ? projImg1W : projImg1B,
        }
    ];

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects</h2>
                            <p className="text">Click the project to see more information.</p>
                                <Carousel responsive={responsive} infinite={true} autoPlay={false} className="owl-carousel owl-theme project-slider">
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
                                </Carousel>   
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects