"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

export default function CinemaRoom() {
  return (
    <Canvas className="w-full h-screen">
      <Suspense fallback={null}>
        <CinemaScene />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

function CinemaScene() {
  return (
    <>
      {/* Ánh sáng trong rạp */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 4, -3]} intensity={0.6} color="white" />
      <spotLight position={[0, 5, -4]} angle={0.5} intensity={1} />

      {/* Sàn */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[12, 0.2, 10]} />
        <meshStandardMaterial color="darkgray" />
      </mesh>

      {/* Tường rạp */}
      {/* Bức tường phía sau ghế */}
      <mesh position={[0, 2, -5]}>
        <boxGeometry args={[12, 5, 0.2]} />
        <meshStandardMaterial color="black" roughness={0.8} />
      </mesh>

      {/* Bức tường phía trước ghế */}
      <mesh position={[0, 2, 5]}>
        <boxGeometry args={[12, 5, 0.2]} />
        <meshStandardMaterial color="black" roughness={0.8} />
      </mesh>

      {/* Tường bên phải hàng ghế */}
      <mesh position={[-5.9, 2, 0]}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="black" roughness={0.8} />
      </mesh>
      {/* Tường bên trái hàng ghế */}

      <mesh position={[5.9, 2, 0]}>
        <boxGeometry args={[0.2, 5, 10]} />
        <meshStandardMaterial color="black" roughness={0.8} />
      </mesh>

      {/* Màn chiếu */}
      <mesh position={[0, 2.5, 4.9]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[9, 3]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Ghế ngồi (bậc thang, chân thực hơn) */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <CinemaSeat
            key={`${row}-${col}`}
            position={[-3.5 + col, row * 0.4, 1.2 - row * 1.4]}
          />
        ))
      )}

      {Array.from({ length: 5 }).map((_, row) => (
        <Stair key={`${row}`} position={[0, row * 0.4, -0.2 - row * 1.4]} />
      ))}
    </>
  );
}
function Stair({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[-4.99 /*x */, -0.3 /*y */, 1.4 /*z */]}>
        <boxGeometry args={[2 /*x */, 0.4 /*y */, 1.2 + 0.21 /*z */]} />
        <meshStandardMaterial color="#708090" />
      </mesh>

      <lineSegments position={[-4.99, -0.3, 1.4]}>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(2, 0.4, 1.2 + 0.21)]}
        />
        <lineBasicMaterial attach="material" color="#F5F5DC" />
      </lineSegments>
    </group>
  );
}
/* 🎭 Ghế ngồi mô phỏng ngoài rạp (gồm chỗ ngồi, tựa lưng, tay vịn) */
function CinemaSeat({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Chỗ ngồi (nệm) */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.2, 0.8]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Lưng ghế */}
      <mesh position={[0, 0.6, -0.3]}>
        <boxGeometry args={[0.8, 0.8, 0.2]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Tay vịn (trái) */}
      <mesh position={[-0.45, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.6]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Tay vịn (phải) */}
      <mesh position={[0.45, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.6]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* 🏠 Sàn ghế */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[1, 0.2, 1]} /> {/* Nền dưới ghế */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 🪜 Bậc thang đi lên */}
      <mesh position={[0, -0.25, 0.5]}>
        <boxGeometry args={[0.8, 0.2, 0.4]} /> {/* Bậc thang nhỏ phía trước */}
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}
