import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Lights from './Lights.js'
import { Model } from './Model.js'

export default function App() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <color attach="background" args={['#f0f0f0']} />
      <fog attach={'fog'} args={['#ffffff', 5, 10]} />
      <Suspense fallback={null}>
        <Lights />

        <Model />

        <OrbitControls
          target={[0, 1, 0]}
          minDistance={1.5}
          maxDistance={3}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          dampingFactor={0.15}
        />
        <PerspectiveCamera makeDefault position={[1, 2, 4]} fov={45} near={0.1} far={50} />
      </Suspense>
    </Canvas>
  )
}
