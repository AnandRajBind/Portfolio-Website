import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white/50 dark:bg-gray-900/50 backdrop-filter backdrop-blur-md px-4 pt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-3/5 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="gradient-text">Anand Raj Bind</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Web Developer | React Enthusiast | MCA Student
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            Turning ideas into interactive digital experiences. I design and build modern web applications with a focus on performance and user experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn-secondary text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
          <div className="flex justify-center md:justify-start gap-6">
            <SocialLink href="https://github.com/AnandRajBind" icon="github" />
            <SocialLink href="mailto:anandrajbind35@gmail.com" icon="envelope" />
            <SocialLink href="https://linkedin.com/in/anandrajbind" icon="linkedin" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 mt-12 md:mt-0 h-64 md:h-80"
        >
          <div className="relative h-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#4F46E5"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  roughness={0}
                  metalness={0.8}
                />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
            </Canvas>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden h-32 w-32 md:h-40 md:w-40 border-4 border-white dark:border-gray-800 shadow-xl bg-white dark:bg-gray-800">
              {/* Replace with your profile image */}
              <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <i className="fas fa-user text-4xl text-gray-400 dark:text-gray-500"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition transform hover:-translate-y-1"
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{icon}</span>
    <i className={`fas fa-${icon} text-2xl`}></i>
  </motion.a>
)

export default Hero
