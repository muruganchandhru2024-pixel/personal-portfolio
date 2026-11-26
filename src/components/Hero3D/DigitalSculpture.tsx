"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SculptureProps {
  mousePos: { x: number; y: number };
}

export const DigitalSculpture: React.FC<SculptureProps> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle field
  const particleCount = 200;
  const particlePositions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 12;
      pos[i + 1] = (Math.random() - 0.5) * 12;
      pos[i + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Mouse responsiveness with smooth lerp
    if (groupRef.current) {
      const targetRotationY = mousePos.x * 0.45;
      const targetRotationX = -mousePos.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      // Gentle floating bob
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
    }

    // Inner Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.35;
      coreRef.current.rotation.y += delta * 0.5;
    }

    // Outer wireframe counter-rotation
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x -= delta * 0.2;
      outerWireRef.current.rotation.z += delta * 0.3;
    }

    // Orbital rings rotation along independent axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + time * 0.4;
      ring1Ref.current.rotation.y = time * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 4 + time * 0.35;
      ring2Ref.current.rotation.z = time * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -Math.PI / 6 + time * 0.25;
      ring3Ref.current.rotation.z = -time * 0.4;
    }

    // Gentle particle drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Lighting */}
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#00D9FF" />
      <pointLight position={[-4, -4, 2]} intensity={2.0} color="#A855F7" />
      <pointLight position={[0, 5, -3]} intensity={1.5} color="#6366F1" />
      <ambientLight intensity={0.4} />

      {/* Central Geometric Solid - Icosahedron Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshPhysicalMaterial
          color="#0d0d26"
          emissive="#6366F1"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Outer Wireframe Hull */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.6}
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>

      {/* Inner Glowing Torus Knot */}
      <mesh scale={0.55}>
        <torusKnotGeometry args={[1, 0.25, 64, 16]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital Ring 1 - Cyan Neon */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.4, 0.022, 16, 100]} />
        <meshBasicMaterial color="#00D9FF" />
      </mesh>

      {/* Orbital Ring 2 - Violet Neon */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.75, 0.025, 16, 100]} />
        <meshBasicMaterial color="#A855F7" />
      </mesh>

      {/* Orbital Ring 3 - Indigo Accented */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.1, 0.018, 16, 100]} />
        <meshBasicMaterial color="#6366F1" />
      </mesh>

      {/* Surrounding Nebula Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#00D9FF"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
