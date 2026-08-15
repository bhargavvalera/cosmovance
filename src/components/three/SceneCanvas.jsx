import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import CosmicSphere from './CosmicSphere';

/**
 * Three.js canvas wrapper with proper setup, lighting, and suspense fallback.
 * Accepts mouseRef (a React ref) for zero-rerender mouse tracking.
 */
export default function SceneCanvas({ mouseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        {/* Ambient fill light */}
        <ambientLight intensity={0.3} color="#94A3B8" />

        {/* Main key light - primary color */}
        <pointLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#4F46E5"
          distance={20}
        />

        {/* Accent light */}
        <pointLight
          position={[-5, 3, -5]}
          intensity={0.5}
          color="#7C3AED"
          distance={20}
        />

        {/* Secondary accent from below */}
        <pointLight
          position={[0, -5, 3]}
          intensity={0.3}
          color="#06B6D4"
          distance={15}
        />

        {/* Rim light */}
        <pointLight
          position={[-3, 0, 5]}
          intensity={0.2}
          color="#FFFFFF"
          distance={10}
        />

        <CosmicSphere mouseRef={mouseRef} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
