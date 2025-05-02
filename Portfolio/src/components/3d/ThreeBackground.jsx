import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere, Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'

const AnimatedSphere = ({ mouseX, mouseY, color, ...props }) => {
  const mesh = useRef()
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
      
      // React to mouse position
      mesh.current.position.x = mouseX.get() * 0.01
      mesh.current.position.y = mouseY.get() * -0.01
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={mesh} {...props}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const ThreeBackground = ({ darkMode }) => {
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to the center of the screen
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere 
          position={[0, 0, 0]} 
          scale={1.5} 
          mouseX={springX} 
          mouseY={springY} 
          color={darkMode ? "#3b82f6" : "#6366f1"} 
        />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
