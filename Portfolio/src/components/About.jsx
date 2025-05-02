import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls, Torus } from '@react-three/drei'

const RotatingTorus = () => {
  const torusRef = useRef()
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })
  
  return (
    <Torus args={[1, 0.4, 16, 100]} ref={torusRef}>
      <meshPhongMaterial 
        color="#4338CA" 
        wireframe={true}
      />
    </Torus>
  )
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-gray-800/50 backdrop-filter backdrop-blur-sm px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
        
        <div className="bg-white/80 dark:bg-gray-700/80 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-8 transform hover:rotate-y-10 transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="h-64 mb-4 overflow-hidden">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <RotatingTorus />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-graduation-cap w-6"></i>
                  <span>MCA Student</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-map-marker-alt w-6"></i>
                  <span>India</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-laptop-code w-6"></i>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-gray-600 dark:text-gray-300 space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello! I'm Anand, a passionate web developer and MCA student. I specialize in creating responsive and user-friendly web applications using modern technologies like React.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                With a strong foundation in web development and a constant desire to learn, I strive to build efficient and scalable solutions that make a positive impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                My journey into web development started when I was fascinated by how websites work and how they can provide value to users. Since then, I've been continuously learning and improving my skills to create better digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my problem-solving skills.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
