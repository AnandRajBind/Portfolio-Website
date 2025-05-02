import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">Anand Raj Bind</h3>
            <p className="text-gray-400 mt-1">Web Developer | MCA Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/AnandRajBind" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/anandrajbind" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:anandrajbind35@gmail.com"
               className="text-gray-400 hover:text-white transition">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        
        <hr className="my-6 border-gray-800" />
        
        <p className="text-gray-400">
          &copy; {currentYear} Anand Raj Bind. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
