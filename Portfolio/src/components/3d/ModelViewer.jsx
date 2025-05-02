import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei'

const Model = ({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  // For demonstration, we'll use a fallback cube if the model isn't available
  const mesh = useRef()
  let model

  try {
    model = useGLTF(modelPath)
  } catch (error) {
    console.error("Error loading model:", error)
  }

  return model ? (
    <primitive 
      object={model.scene} 
      scale={scale} 
      position={position} 
      rotation={rotation} 
    />
  ) : (
    <mesh position={position} rotation={rotation} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

const ModelViewer = ({ modelPath, scale = 1, autoRotate = true, ...props }) => {
  return (
    <div className="w-full h-full" {...props}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={null}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model modelPath={modelPath} scale={scale} />
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate={autoRotate} enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default ModelViewer
