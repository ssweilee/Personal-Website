import { useState, useEffect, useContext } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'
import ReactSwitch from 'react-switch'
import { HashLink } from 'react-router-hash-link'
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavBar() {
    const [activeLink, setActiveLink] = useState('about')
    const [scrolled, setScrolled] = useState(false)
    const {toggleTheme, theme} = useContext(ThemeContext)
    const [menuExpanded, setMenuExpanded] = useState(false)
    
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
      }
  
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
  }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const toggleMenu = () => {
      setMenuExpanded(!menuExpanded)
    }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded={menuExpanded} onClick={toggleMenu}>
            <span className='navbar-toggler-icon'></span> 
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={menuExpanded ? 'show' : ''}>
            <Nav className="me-auto">
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <div className="switch">
                  <ReactSwitch className="custom-switch" onChange={toggleTheme} checked={theme === "dark"} uncheckedIcon={<FontAwesomeIcon className="moon-icon" icon={faMoon} />} checkedIcon={<FontAwesomeIcon className="sun-icon" icon={faSun} />} />
                </div>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icons'>
                <a href="www.linkedin.com/in/tzu-wei-lee" target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                <a href='mailto:tzuweilee.20@gmail.com' target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
                <a href="https://github.com/ssweilee" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
              </div>
              <HashLink to='#connect'>
                <button><span>Let&apos;s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar


