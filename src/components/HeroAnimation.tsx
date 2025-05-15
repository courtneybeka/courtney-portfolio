"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Environment, MeshDistortMaterial } from '@react-three/drei';
import { Vector3, Mesh } from 'three';

// Animated sphere with distortion
const AnimatedSphere = ({ position, scale, color, speed, distort }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}) => {
  const sphereRef = useRef<Mesh>(null);
  const initialPosition = useRef(new Vector3(...position));
  
  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    
    const time = clock.getElapsedTime();
    
    // Create a floating movement
    sphereRef.current.position.x = initialPosition.current.x + Math.sin(time * speed) * 0.5;
    sphereRef.current.position.y = initialPosition.current.y + Math.cos(time * (speed * 0.8)) * 0.5;
    sphereRef.current.position.z = initialPosition.current.z + Math.sin(time * (speed * 0.5)) * 0.5;
    
    // Rotate the sphere
    sphereRef.current.rotation.x = time * (speed * 0.2);
    sphereRef.current.rotation.z = time * (speed * 0.1);
  });
  
  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial 
        color={color} 
        attach="material"
        distort={distort}
        speed={speed * 2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Main hero animation component
const HeroAnimation = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <color attach="background" args={['#f5f5f7']} />
        <fogExp2 attach="fog" args={['#f5f5f7', 0.05]} />
        
        <AnimatedSphere
          position={[-3, 1, 0]}
          scale={2}
          color="#7928ca"
          speed={0.5}
          distort={0.4}
        />
        
        <AnimatedSphere
          position={[2, -1.5, -2]}
          scale={3}
          color="#ff0080"
          speed={0.3}
          distort={0.3}
        />
        
        <AnimatedSphere
          position={[0, 2, -4]}
          scale={1.5}
          color="#00bfff"
          speed={0.7}
          distort={0.5}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroAnimation; 