import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import { COLORS } from '../../utils/constants';

interface GridLineData {
  points: [number, number, number][];
  color: string;
  opacity: number;
}

export function BlueprintGrid() {
  const groupRef = useRef<THREE.Group>(null);

  const gridLines = useMemo(() => {
    const lines: GridLineData[] = [];
    const size = 50;
    const step = 2;
    const smallStep = 0.5;

    // Hauptlinien
    for (let i = -size; i <= size; i += step) {
      lines.push({
        points: [[i, -0.01, -size], [i, -0.01, size]],
        color: COLORS.secondaryLine,
        opacity: 0.3,
      });
      lines.push({
        points: [[-size, -0.01, i], [size, -0.01, i]],
        color: COLORS.secondaryLine,
        opacity: 0.3,
      });
    }

    // Feine Nebenlinien
    for (let i = -size; i <= size; i += smallStep) {
      if (i % step === 0) continue;
      lines.push({
        points: [[i, -0.01, -size], [i, -0.01, size]],
        color: COLORS.gridLine,
        opacity: 0.15,
      });
      lines.push({
        points: [[-size, -0.01, i], [size, -0.01, i]],
        color: COLORS.gridLine,
        opacity: 0.15,
      });
    }

    return lines;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const pulse = Math.sin(clock.elapsedTime * 0.5) * 0.05 + 0.95;
      groupRef.current.children.forEach((child) => {
        const mesh = child as unknown as { material?: THREE.LineBasicMaterial };
        if (mesh.material && 'opacity' in mesh.material) {
          mesh.material.opacity = (mesh.material.userData?.baseOpacity ?? mesh.material.opacity) * pulse;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {gridLines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          transparent
          opacity={line.opacity}
          lineWidth={0.5}
        />
      ))}
    </group>
  );
}
