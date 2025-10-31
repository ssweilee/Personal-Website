import React, { useState, useEffect } from "react";
import travelapp from '../assets/img/travelApp.svg';
import personalweb from '../assets/img/personalweb.svg';
import takeaimgif from '../assets/img/takeaim.gif';
import takeaimGroup from '../assets/img/takeaimGroup.svg';
import aitrash from '../assets/img/aitrash.svg';
import aiSentiment from '../assets/img/aiSentiment.svg';

const projects = [
  {
    id: 1,
    title: "AI Sentiment Dashboard for Media & Entertainment",
    date: "10/2025",
    shortDescription:
      "AI dashboard using AWS Bedrock LLMs and serverless architecture for audience sentiment analysis and actionable insights for the media industry.",
    description: (
      <>
        <div className="project-description">
        <p>
        Built a scalable dashboard combining AI-driven sentiment analysis and serverless cloud architecture.
        </p>
        <div className="project-section">
          <h4>Highlights:</h4> Delivered a scalable, low-latency system combining AI-driven sentiment analysis, serverless cloud architecture, and interactive data visualization.
        <ul>
          <li>Integrated AWS Bedrock LLMs for NLP-based sentiment analysis for video content</li>
          <li>Serverless backend using AWS Lambda and Next.js API routes for low-latency processing</li>
          {/*<li>Enabled live data streaming and updates via WebSocket communication.</li>*/}
          <li>Deployed on AWS Amplify with automated CI/CD pipelines for continuous integration</li>
          <li>Stored insights in DynamoDB and S3 for reliable data retrieval</li>
          <li>Visualized sentiment trends interactively with Recharts components</li>
        </ul>
        </div>
        <div className="project-section">
        <h4>Technical Challenges & Solutions:</h4>
        <ul>
          <li><strong>Data consistency:</strong> Standardized JSON schemas to ensure seamless Lambda–frontend communication</li>
          <li><strong>Performance bottlenecks:</strong> Reduced Bedrock API latency by splitting logic into concurrent Lambda functions</li>
          <li><strong>IAM configuration:</strong> Implemented IAM roles to securely connect Bedrock, DynamoDB and S3 services</li>
          {/*<li><strong>Error handling:</strong> Added retry and error-boundary logic in Next.js API routes to ensure reliable backend calls.</li>*/}
        </ul>
        </div>
        </div>
      </>
    ),
    tech: ["AWS Bedrock", "LLM", "Next.js", "AWS Lambda", "DynamoDB", "S3", "Tailwind CSS", "Recharts", "CI/CD"],
    images: [aiSentiment],
    link: "https://github.com/ssweilee/ai-sentiment-dashboard",
    type: "hero",
  },
  {
    id: 2,
    title: "Full-Stack Personal Website - Project Showcasing",
    date: "",
    shortDescription:
      "Portfolio website demonstrating full-stack integration, interactive UI, and CI/CD deployment.",
    description: (
      <>
        <p>
        Designed a personal portfolio website to showcase technical skills and end-to-end project integration.
        </p>
        <p>
          <strong>Highlights:</strong> Modular React components, weather API integration, light/dark toggle, environment
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
    tech: ["React.js", "Node.js", "Express", "RESTful API", "CI/CD", "CSS"],
    images: [personalweb],
    link: "https://github.com/ssweilee/Personal-Website",
    type: "hero",
  },
  {
    id: 3,
    title: "AI Travel App – Personalised Itinerary Planner",
    collaboration: "IBM x University of Bristol",
    date: "05/2025 – 09/2025",
    shortDescription: "AI-powered mobile app providing personalised travel recommendations and social sharing features, developed in collaboration with IBM and the University of Bristol.",
    description: (
      <>
      <p>
        Developed a cross-platform app enabling users to receive travel recommendations and share experiences with others.
      </p>
      <p>
        <strong>Highlights:</strong> Recommendation system integrated with social platform; team collaborated on AI assistant integration using IBM Watsonx.
      </p>
      <ul>
        <li>Planned and coordinated team workflow using Git-based Agile methodology</li>
        <li>Built backend APIs with Node.js & Express for user profile and itinerary management</li>
        <li>Integrated location APIs and social features for enhanced user engagement</li>
        <li>Implemented profile picture upload & management across multiple app sections</li>
      </ul>
    </>
    ),
    tech: ["React Native", "Node.js", "Express.js", "IBM Watsonx AI", "RESTful API", "Git"],
    images: [travelapp],
    link: "#",
    type: "hero",
  },
  {
    id: 4,
    title: "Take Aim – Arcade style Shooting Game",
    date: "01/2025 – 05/2025",
    shortDescription:
      "Web-based arcade shooting game with interactive UI and iterative gameplay design, developed as a semester-long team project.",
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
    id: 5,
    title: "Trash Classifier",
    date: "02/2025",
    shortDescription:
      "Cross-platform mobile app that identifies and sorts waste to promote sustainable habits, built at BrisHack 2025.",
    description: (
      <>
        <p>
          Developed an AI-powered mobile app in 24 hours during a hackathonto promote sustainable daily habits.
        </p>
        <p>
          <strong>Highlights:</strong> cross-platform development, rapid prototyping,
          and performance optimization under hackathon constraints.
        </p>
        <br></br>
        <ul>
          <li>Built a cross-platform app using Flutter and Dart within 24 hours</li>
          <li>Implemented multi-page UI, interactive image carousel, and informative pages</li>
          <li>Collaborated in a hackathon team using Git version control</li>
          <li>Optimized performance under rapid prototyping constraints</li>
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
                    {selectedProject.images.map((img, idx) =>
                      selectedProject.link && selectedProject.link !== "#" ? (
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
                      ) : (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="modal-multi-img"
                        />
                      )
                    )}
                  </div>
                ) : selectedProject.link && selectedProject.link !== "#" ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={selectedProject.images[0]} alt={selectedProject.title} />
                  </a>
                ) : (
                  <img src={selectedProject.images[0]} alt={selectedProject.title} />
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
          <button   
            className="modal-prev" 
            onClick={(e) => {
              e.stopPropagation(); 
              showPrev();
            }}
          >
              ←
            </button>
            <button 
              className="modal-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              →
            </button>
            <button 
              className="modal-close"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ✕
            </button>
        </div>
      )}
    </section>
  );
};

export default Projects;