import { useState, useEffect, useContext } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'
import ReactSwitch from 'react-switch'
import Weather from './Weather'
import { HashLink } from 'react-router-hash-link'

import { links } from '../constants/links'

function NavBar() {
    const [activeLink, setActiveLink] = useState('about')
    const [scrolled, setScrolled] = useState(false)
    const {toggleTheme, theme} = useContext(ThemeContext)
    const [menuExpanded, setMenuExpanded] = useState(false)
    const [collapsingOut, setCollapsingOut] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
            setScrolled(window.scrollY > 50)
      }
  
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => { 
    if (menuExpanded) { 
      document.body.classList.add('no-scroll'); 
    } else { 
      document.body.classList.remove('no-scroll'); 
    } 
  }, [menuExpanded]);  
  
  const handleNavClick = (id) => {
    setActiveLink(id)
    setCollapsingOut(true)
    // 先收回 menu
    setMenuExpanded(false)
    setTimeout(() => {
      setCollapsingOut(false)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const toggleMenu = () => {
      setMenuExpanded(!menuExpanded)
    }

    const navbarClass = `${scrolled ? "scrolled " : ""}${theme === "dark" ? "dark" : "light"}`

  return (

      <Navbar expand="md" className={navbarClass} expanded={menuExpanded} onToggle={setMenuExpanded} >
        <Container className="navbar-container">
        <div className="mobile-header">
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <span className='navbar-text'>
            <div className='social-icons'>
              <a href={links.linkedin} target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
              <a href={links.mail} target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
              <a href={links.github} target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
            </div>
            <HashLink to='#connect'>
              <button><span>Let&apos;s Connect</span></button>
            </HashLink>
          </span>
        </div>
          
          <Navbar.Collapse id="basic-navbar-nav" className={collapsingOut ? 'collapsing-out' : ''} expanded={menuExpanded}>
            <Nav className="me-auto">
            <Nav.Link as={HashLink} smooth to="#about" onClick={() => handleNavClick('about')} className={activeLink==='about' ? 'active navbar-link':'navbar-link'}>About</Nav.Link>
<Nav.Link as={HashLink} smooth to="#skills" onClick={() => handleNavClick('skills')} className={activeLink==='skills' ? 'active navbar-link':'navbar-link'}>Skills</Nav.Link>
<Nav.Link as={HashLink} smooth to="#projects" onClick={() => handleNavClick('projects')} className={activeLink==='projects' ? 'active navbar-link':'navbar-link'}>Projects</Nav.Link>






            </Nav>
            <div className="navbar-tools">
              <Weather />
              <div className="switch">
                  <ReactSwitch className="custom-switch" onChange={toggleTheme} checked={theme === "dark"} uncheckedIcon={<FontAwesomeIcon className="moon-icon" icon={faMoon} />} checkedIcon={<FontAwesomeIcon className="sun-icon" icon={faSun} />} />
                </div>
              </div>
          </Navbar.Collapse>
          <div className="non-mobile-navbar-text">
            <span className='navbar-text'>
              <div className='social-icons'>
                <a href={links.linkedin} target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                <a href={links.mail} target="_blank"><FontAwesomeIcon className="social-icon" icon={faEnvelope} /></a>
                <a href={links.github} target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
              </div>
              <HashLink to='#connect'>
                <button><span>Let&apos;s Connect</span></button>
              </HashLink>
            </span>
          </div>
        </Container>
      </Navbar>

  );
}

export default NavBar