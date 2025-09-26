import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, createContext } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ThemeContext = createContext(null)

function App() {
  const [ theme, setTheme ] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
