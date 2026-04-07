import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Gebäude-Blöcke die zusammen eine abstrakte Architektur-Gruppe bilden
const BUILDINGS = [
  // Hauptgebäude (Turm)
  { pos: [0, 2.5, 0] as const, size: [2, 5, 2] as const },
  // Nebengebäude links
  { pos: [-2.5, 1.5, 0.5] as const, size: [1.5, 3, 2.5] as const },
  // Flachbau rechts
  { pos: [2.5, 0.75, -0.5] as const, size: [2, 1.5, 3] as const },
  // Verbindungsbau
  { pos: [0, 0.5, -2] as const, size: [6, 1, 1.5] as const },
  // Kleiner Anbau
  { pos: [-1.5, 0.5, 2] as const, size: [1, 1, 1.5] as const },
  // Hochhaus hinten
  { pos: [1, 3, -2.5] as const, size: [1.5, 6, 1] as const },
];

function BuildingBlock({ position, size, color, opacity }: {
  position: readonly [number, number, number];
  size: readonly [number, number, number];
  color: string;
  opacity: number;
}) {
  const edgesGeometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(...size);
    return new THREE.EdgesGeometry(geo);
  }, [size]);

  return (
    <group position={[position[0], position[1], position[2]]}>
      {/* Wireframe-Kanten */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color={color} transparent opacity={opacity} />
      </lineSegments>
      {/* Leichter Fill */}
      <mesh>
        <boxGeometry args={[...size]} />
        <meshBasicMaterial color={color} transparent opacity={0.03} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Bodenraster
function FloorGrid() {
  const points = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    for (let i = -8; i <= 8; i += 1) {
      lines.push([new THREE.Vector3(i, 0, -8), new THREE.Vector3(i, 0, 8)]);
      lines.push([new THREE.Vector3(-8, 0, i), new THREE.Vector3(8, 0, i)]);
    }
    return lines;
  }, []);

  return (
    <group>
      {points.map((pair, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(pair);
        return (
          <lineSegments key={i} geometry={geo}>
            <lineBasicMaterial color="#C5A572" transparent opacity={0.06} />
          </lineSegments>
        );
      })}
    </group>
  );
}

export function Model3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <FloorGrid />
      {BUILDINGS.map((b, i) => (
        <BuildingBlock
          key={i}
          position={b.pos}
          size={b.size}
          color={i % 2 === 0 ? '#C5A572' : '#FFFFFF'}
          opacity={0.4 + (i * 0.05)}
        />
      ))}
    </group>
  );
}
