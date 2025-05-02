import { useState } from 'react'
import { motion } from 'framer-motion'

const FloatingCard = ({ children, depth = 0.1, ...props }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div
      className="relative transform transition-all duration-300 ease-out hover:translate-z-10"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <motion.div
        className="w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0px)'
        }}
        animate={{ 
          rotateX: hovered ? 0 : Math.sin(Date.now() * 0.001) * 5,
          rotateY: hovered ? 0 : Math.sin(Date.now() * 0.0005) * 5,
          z: hovered ? 20 : 0
        }}
        transition={{ 
          type: 'spring',
          damping: 15,
          stiffness: 100
        }}
        whileHover={{ 
          rotateX: 0, 
          rotateY: 0, 
          z: 20,
          transition: { duration: 0.3 }
        }}
      >
        {/* Front face */}
        <div className="w-full h-full shadow-xl" style={{ 
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}>
          {children}
        </div>
        
        {/* Card sides for 3D effect */}
        <div className="absolute inset-0 pointer-events-none" style={{ 
          transform: `translateZ(-${depth}px)`,
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/20 to-purple-600/20 rounded-xl backdrop-blur-sm" />
        </div>
      </motion.div>
    </div>
  )
}

export default FloatingCard
