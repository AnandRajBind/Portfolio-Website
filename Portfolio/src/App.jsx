import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          {/* <About /> */}
          {/* <Skills /> */}
          {/* <Projects /> */}
          {/* <Certifications /> */}
          {/* <Achievements /> */}
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
