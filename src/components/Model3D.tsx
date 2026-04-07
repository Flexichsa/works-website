import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

function WireframeModel({ url }: ModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
    }
  });

  // Apply wireframe material to all meshes
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#C8C8C8'),
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
    }
  });

  return (
    <group ref={groupRef} scale={0.012} position={[0, -1.5, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#C5A572" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function Model3D() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WireframeModel url="/building.glb" />
    </Suspense>
  );
}

useGLTF.preload('/building.glb');
