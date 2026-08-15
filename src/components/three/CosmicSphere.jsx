import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Generate particle positions ONCE at module load — outside component to satisfy React purity rules.
const PARTICLE_COUNT = 800;
const _positions = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const radius = 1.8 + (Math.random() - 0.5) * 0.6;
  _positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
  _positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  _positions[i * 3 + 2] = radius * Math.cos(phi);
}
const PARTICLE_DATA = { positions: _positions, count: PARTICLE_COUNT };

/**
 * Interactive cosmic sphere with wireframe, particle cloud, and orbital rings.
 * Reads mouse position from a ref for zero-rerender interactivity.
 */
export default function CosmicSphere({ mouseRef }) {
  const groupRef = useRef();
  const wireframeRef = useRef();
  const particlesRef = useRef();
  const innerGlowRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  // Use the module-level pre-computed particle data
  const particleData = PARTICLE_DATA;

  // Animate per frame
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouse = mouseRef?.current || { x: 0, y: 0 };

    if (groupRef.current) {
      // Slow base rotation
      groupRef.current.rotation.y = t * 0.08;
      // Mouse-reactive tilt (reads from ref — no re-renders)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.15,
        0.02
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        mouse.x * 0.08,
        0.02
      );
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.05;
      wireframeRef.current.rotation.x = t * 0.03;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -t * 0.04;
      particlesRef.current.rotation.x = t * 0.02;
    }

    if (innerGlowRef.current) {
      innerGlowRef.current.material.opacity = 0.12 + Math.sin(t * 0.8) * 0.04;
    }

    // Orbital rings
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.15;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.12;
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.1;
  });

  return (
    <group ref={groupRef} scale={0.92}>
      {/* Inner glow sphere */}
      <mesh ref={innerGlowRef}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial
          color="#4F46E5"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Core sphere - subtle gradient */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#0B1120"
          metalness={0.9}
          roughness={0.3}
          emissive="#4F46E5"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Wireframe icosahedron */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#4F46E5"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Second wireframe layer */}
      <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color="#7C3AED"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Particle cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particleData.positions}
            count={particleData.count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#06B6D4"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Orbital ring 1 */}
      <group ref={ring1Ref} rotation={[Math.PI / 2.5, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.2, 0.005, 16, 100]} />
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.25} />
        </mesh>
        {/* Orbiting dot */}
        <mesh position={[2.2, 0, 0]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#6366F1" />
        </mesh>
      </group>

      {/* Orbital ring 2 */}
      <group ref={ring2Ref} rotation={[Math.PI / 1.8, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.5, 0.003, 16, 100]} />
          <meshBasicMaterial color="#7C3AED" transparent opacity={0.15} />
        </mesh>
        <mesh position={[2.5, 0, 0]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      </group>

      {/* Orbital ring 3 */}
      <group ref={ring3Ref} rotation={[Math.PI / 3, -Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.002, 16, 100]} />
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.1} />
        </mesh>
        <mesh position={[2.8, 0, 0]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>
      </group>
    </group>
  );
}
