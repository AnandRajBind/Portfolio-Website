import { motion } from 'framer-motion'
import FloatingCard from './3d/FloatingCard'

const Skills = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 85 }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 65 }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 75 }
      ] 
    },
  ]

  return (
    <section id="skills" className="section-padding bg-white/50 dark:bg-gray-900/50 backdrop-filter backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <FloatingCard key={skillGroup.category} depth={0.2}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="card p-6 h-full bg-white/80 dark:bg-gray-800/80 backdrop-filter backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2 p-2 rounded-lg transition-all"
                      whileHover={{ 
                        scale: 1.03, 
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        z: 20,
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          {skillGroup.category === 'Frontend' && (
                            <motion.span 
                              className="mr-2 text-blue-500 dark:text-blue-400"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {skill.name === 'HTML' && <i className="fab fa-html5 text-orange-500"></i>}
                              {skill.name === 'CSS' && <i className="fab fa-css3-alt text-blue-500"></i>}
                              {skill.name === 'JavaScript' && <i className="fab fa-js text-yellow-500"></i>}
                              {skill.name === 'React' && <i className="fab fa-react text-blue-400"></i>}
                              {skill.name === 'Tailwind CSS' && <i className="fab fa-css3 text-cyan-500"></i>}
                            </motion.span>
                          )}
                          <span>{skill.name}</span>
                        </div>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            ease: "easeOut",
                            delay: skillIndex * 0.1
                          }}
                          viewport={{ once: true }}
                        >
                          {skillGroup.category === 'Frontend' && skill.level >= 85 && (
                            <motion.div 
                              className="absolute right-0 top-0 h-full w-2 bg-white dark:bg-blue-300 rounded-full"
                              animate={{ 
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ 
                                repeat: Infinity,
                                duration: 1.5
                              }}
                            />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
