import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThreeBackground from './components/3d/ThreeBackground'
// Import styles properly
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  // Check for user's preferred color scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
    
    // Add listener for changes to color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setDarkMode(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white/90 dark:bg-gray-900/90 backdrop-filter backdrop-blur-sm">
        <ThreeBackground darkMode={darkMode} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
