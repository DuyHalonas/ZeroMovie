"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface ThreeModelProps {
  modelPath: string;
}

const ThreeModel: React.FC<ThreeModelProps> = ({ modelPath }) => {
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    console.log("Loading model from:", modelPath);
    const loader = new THREE.ObjectLoader();

    loader.load(
      modelPath,
      (obj) => {
        console.log("Model loaded:", obj);
        setModel(obj);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );
  }, [modelPath]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      {model ? <primitive object={model} /> : <></>}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeModel;
