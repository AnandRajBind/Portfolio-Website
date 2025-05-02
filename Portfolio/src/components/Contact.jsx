import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import FloatingCard from './3d/FloatingCard'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  
  const formRef = useRef()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50/50 dark:bg-gray-800/50 backdrop-filter backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FloatingCard>
            <div className="card p-6 h-full bg-white/80 dark:bg-gray-700/80 backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">anandrajbind35@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-300 font-medium">Social</h4>
                    <div className="flex space-x-4 mt-2">
                      <motion.a 
                        href="https://github.com/AnandRajBind" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <i className="fab fa-github text-xl"></i>
                      </motion.a>
                      <motion.a 
                        href="https://linkedin.com/in/anandrajbind" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FloatingCard>
          
          <FloatingCard>
            <div className="card p-6 h-full bg-white/80 dark:bg-gray-700/80 backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Send a Message
              </h3>
              
              {submitMessage ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200 p-4 rounded-lg"
                >
                  {submitMessage}
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    ></motion.textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitting ? (
                      <span>Sending... <i className="fas fa-circle-notch fa-spin ml-2"></i></span>
                    ) : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </FloatingCard>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact