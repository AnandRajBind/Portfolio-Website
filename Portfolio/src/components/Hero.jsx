import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Anand Raj Bind</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Web Developer | React Enthusiast | MCA Student
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Turning ideas into interactive digital experiences.
        </p>
        <div className="flex justify-center gap-4">
          <SocialLink href="https://github.com/AnandRajBind" icon="github" />
          <SocialLink href="mailto:anandrajbind35@gmail.com" icon="mail" />
          <SocialLink href="https://linkedin.com/in/anandrajbind" icon="linkedin" />
        </div>
      </motion.div>
    </section>
  )
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
  >
    <span className="sr-only">{icon}</span>
    <i className={`fab fa-${icon} text-2xl`}></i>
  </a>
)

export default Hero
