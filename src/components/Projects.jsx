import React, { useState, useEffect } from "react";
//import "./Projects_chatG.css";
import travelapp from '../assets/img/travelApp.svg';
import personalweb from '../assets/img/personalweb.svg';
import takeaimgif from '../assets/img/takeaim.gif';
import takeaimGroup from '../assets/img/takeaimGroup.svg';
import aitrash from '../assets/img/aitrash.svg';

const projects = [
  {
    id: 1,
    title: "Full-Stack Personal Website - Project Showcasing",
    date: "",
    shortDescription:
      "A personal portfolio site integrating front & back end features and deployment to showcase my technical skills.",
    description: (
      <>
        <p>
          A personal portfolio webpage designed to showcase technical skills and demonstrate frontend–backend integration.
        </p>
        <p>
          <strong>Highlights:</strong> modular React components, weather API integration, light/dark toggle, environment
          configuration, CI/CD deployment.
        </p>
        <ul>
          <li>Responsive UI built with modular React components for maintainable code structure</li>
          <li>Integrated weather API and implemented Light/Dark theme toggle for enhanced user experience</li>
          <li>Contact form allowing users to send emails directly, with backend handling using Node.js and Express</li>
          <li>Deployed using GitHub + Vercel CI/CD with environment configurations for production</li>
        </ul>
      </>
    ),
    tech: ["React.js", "Node.js", "Express", "CSS", "RESTful API", "CI/CD"],
    images: [personalweb],
    link: "https://github.com/ssweilee/Personal-Website",
    type: "hero",
  },
  {
    id: 2,
    title: "AI-powered Travel App – Personalised Itinerary Planner",
    collaboration: "IBM x University of Bristol",
    date: "06/2025 – 09/2025",
    shortDescription: "Cross-platform AI travel app that generates personalised itineraries and integrates social features, developed in collaboration with IBM and the University of Bristol.",
    description: (
      <>
      <p>
        An AI-powered mobile app enabling users to receive personalised travel recommendations and share experiences with other travellers. Developed as part of an academic–industry collaboration project in a group of 8.
      </p>
      <p>
        <strong>Highlights:</strong> Recommendation system integrated with social platform alongside an AI assistant using IBM Watsonx.

      </p>
      <ul>
        <li>Planned and coordinated team workflow using Git-based Agile methodology</li>
        <li>Implemented profile picture upload & management across multiple app sections</li>
        <li>Built Profile Editing page with backend integration</li>
        <li>Integrated location APIs and AI assistant using IBM Watsonx</li>
      </ul>
    </>
    ),
    tech: ["React Native", "Node.js", "Express.js", "IBM Watsonx AI", "RESTful API", "Git"],
    images: [travelapp],
    link: "#",
    type: "hero",
  },
  {
    id: 3,
    title: "Take Aim – Arcade style Shooting Game",
    date: "01/2025 – 05/2025",
    shortDescription:
    "Arcade-style web game blending nostalgic aesthetics with simple target-shooting mechanics, developed as a semester-long team project.",
    description: (
    <>
      <p>
        <strong>Highlights:</strong> Core gameplay logic, interactive UI, iterative design improvements, implemented in an Agile team environment.
      </p>
      <ul>
        <li>Led initial game concept development, collaborated to define gameplay structure and core features</li>
        <li>Implemented UI for character selection, logic for audio control, and settings panel</li>
        <li>Designed and developed interactive UI components enhancing playability</li>
        <li>Improved gameplay experience via heuristic evaluation and user testing</li>
        <li>Worked in an Agile team environment with Git-based version control</li>
      </ul>
    </>
  ),
    tech: ["JavaScript", "HTML", "CSS", "Git", "Agile"],
    images: [takeaimgif, takeaimGroup],
    link: "https://github.com/UoB-COMSM0166/2025-group-23",
    type: "grid",
  },
  {
    id: 4,
    title: "AI-Powered Trash Classifier App",
    date: "02/2025",
    shortDescription:
    "Cross-platform mobile app built at BrisHack 2025 to promote sustainable habits by classifying and sorting trash using AI.",
    description: (
      <>
        <p>
          Developed an AI-powered mobile app within 24 hours at BrisHack 2025 in Bristol. The app helps users identify and sort waste correctly, encouraging sustainable everyday habits.
        </p>
        <p>
          <strong>Highlights:</strong> cross-platform development, rapid prototyping,
          and performance optimization under hackathon constraints.
        </p>
        <br></br>
        <ul>
          <li>Built a cross-platform app using Flutter and Dart within 24 hours</li>
          <li>Implemented multi-page UI, interactive image carousel, and informative pages</li>
          <li>Collaborated in a hackathon team environment with Git-based version control</li>
        </ul>
      </>
    ),
    tech: ["Flutter", "Dart", "Git"],
    images: [aitrash],
    link: "https://github.com/ssweilee/ai_powered_trash_classifier",
    type: "grid",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const openModal = (proj, index) => {
    setSelectedProject(proj);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const maxLength = 220;

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      {/* Hero Projects */}
      <div className="hero-projects">
        {projects
          .filter((p) => p.type === "hero")
          .map((proj, idx) => (
            <div
              className="hero-project"
              key={proj.id}
              onClick={() => openModal(proj, idx)}
            >
              <div className="hero-img">
                <img src={proj.images[0]} alt={proj.title} />
              </div>
              <div className="hero-text">
                <h3>{proj.title}</h3>
                <span className="project-date">{proj.date}</span>
                <p>
                  {proj.shortDescription.length > maxLength
                    ? proj.shortDescription.substring(0, maxLength) + "..."
                    : proj.shortDescription}
                </p>
                <p className="view-more-text">Click to view more details →</p>
                <div className="project-tech">
                  {proj.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Grid Projects */}
      <div className="grid-projects">
        {projects
          .filter((p) => p.type === "grid")
          .map((proj, idx) => (
            <div
              className="project-card"
              key={proj.id}
              onClick={() => openModal(proj, idx + 2)}
            >
              <img src={proj.images[0]} alt={proj.title} className="project-img" />
              <div className="project-content">
                <h3>{proj.title}</h3>
                <span className="project-date">{proj.date}</span>
                <p className="view-more-text">Click to view more details →</p>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={`modal-overlay ${selectedProject ? "active" : ""}`}
        onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-prev" onClick={showPrev}>
              ←
            </button>
            <button className="modal-next" onClick={showNext}>
              →
            </button>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-body">
              <div className="modal-image">
                {window.innerWidth <= 768 ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={selectedProject.images[currentIndex % selectedProject.images.length]}
                      alt={selectedProject.title}
                    />
                  </a>
                ) : selectedProject.images.length > 1 ? (
                  <div className="modal-multiple-images">
                    {selectedProject.images.map((img, idx) => (
                      <a
                        key={idx}
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={img}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="modal-multi-img"
                        />
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={selectedProject.images[0]} alt={selectedProject.title} />
                  </a>
                )}
              </div>
            </div>
              <div className="modal-text">
                {selectedProject.link && selectedProject.link !== "#" ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-title-link"
                  >
                    <h3>{selectedProject.title}</h3>
                  </a>
                ) : (
                  <h3>{selectedProject.title}</h3>
                )}
                <span className="project-date">{selectedProject.date}</span>
                <div className="project-description">
                  {selectedProject.description}
                </div>
                
                <div className="project-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View Project →
                  </a>
                )}
             
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;