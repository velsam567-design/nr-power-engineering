"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TurbineModel() {
  const rotorRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (rotorRef.current) {
      rotorRef.current.rotation.z += delta * 0.75;
    }
  });

  return (
    <group rotation={[0, -0.12, 0]}>
      {/* =================================================
          MAIN TURBINE HOUSING
      ================================================= */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.08, 1.2, 1.65, 64]} />

        <meshStandardMaterial
          color="#8195a8"
          metalness={0.92}
          roughness={0.22}
        />
      </mesh>

      {/* =================================================
          FRONT ROTOR
      ================================================= */}
      <group
        ref={rotorRef}
        position={[0, 0, 0.9]}
      >
        {/* Central hub */}
        <mesh>
          <sphereGeometry args={[0.34, 32, 32]} />

          <meshStandardMaterial
            color="#e2ebf3"
            metalness={1}
            roughness={0.14}
          />
        </mesh>

        {/* Rotor blades */}
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const angle = (index / 6) * Math.PI * 2;

          return (
            <mesh
              key={index}
              position={[
                Math.cos(angle) * 0.92,
                Math.sin(angle) * 0.92,
                0,
              ]}
              rotation={[
                0,
                0,
                angle + Math.PI / 2,
              ]}
              scale={[0.3, 0.95, 0.1]}
            >
              <boxGeometry args={[0.5, 1.3, 0.2]} />

              <meshStandardMaterial
                color="#168bff"
                metalness={0.85}
                roughness={0.18}
                emissive="#0879e8"
                emissiveIntensity={0.2}
              />
            </mesh>
          );
        })}

        {/* Outer energy ring */}
        <mesh>
          <torusGeometry
            args={[1.42, 0.018, 16, 96]}
          />

          <meshBasicMaterial
            color="#168bff"
            transparent
            opacity={0.72}
          />
        </mesh>

        {/* Inner energy ring */}
        <mesh>
          <torusGeometry
            args={[1.15, 0.012, 16, 96]}
          />

          <meshBasicMaterial
            color="#6cc1ff"
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>

      {/* =================================================
          REAR SHAFT
      ================================================= */}
      <mesh
        position={[0, 0, -1.25]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry
          args={[0.25, 0.25, 1.25, 32]}
        />

        <meshStandardMaterial
          color="#536678"
          metalness={0.96}
          roughness={0.2}
        />
      </mesh>

      {/* =================================================
          SMALL TECHNICAL COLLARS
      ================================================= */}
      <mesh
        position={[0, 0, -0.88]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry
          args={[0.48, 0.055, 16, 48]}
        />

        <meshStandardMaterial
          color="#687d90"
          metalness={0.9}
          roughness={0.24}
        />
      </mesh>

      <mesh
        position={[0, 0, 0.76]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry
          args={[0.72, 0.035, 16, 48]}
        />

        <meshStandardMaterial
          color="#a9bac9"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

function TurbineScene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 6.7]}
        fov={38}
      />

      {/* Ambient engineering light */}
      <ambientLight intensity={0.48} />

      {/* Main light */}
      <directionalLight
        position={[4, 5, 6]}
        intensity={2.7}
      />

      {/* Blue energy light */}
      <pointLight
        position={[2, 0, 3]}
        intensity={3.2}
        distance={8}
        color="#168bff"
      />

      {/* Secondary cool light */}
      <pointLight
        position={[-3, 1, 1]}
        intensity={1.7}
        distance={7}
        color="#7dbfff"
      />

      <Float
        speed={0.9}
        rotationIntensity={0.035}
        floatIntensity={0.07}
      >
        <TurbineModel />
      </Float>

      <Environment preset="city" />
    </>
  );
}

export default function Turbine3D() {
  return (
    <div className="h-[350px] w-[350px]">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <TurbineScene />
      </Canvas>
    </div>
  );
}