import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import { useStore } from '../../stores/useStore';
import { COLORS, BUILDING, SCROLL_CONFIG } from '../../utils/constants';

interface FloorProps {
  level: number;
}

function createFloorShape(level: number): THREE.Shape {
  const w = BUILDING.width;
  const d = BUILDING.depth;
  const shape = new THREE.Shape();

  if (level === 5) {
    // Dach: L-Form mit Terrasse
    shape.moveTo(-w/2, -d/2);
    shape.lineTo(w/2, -d/2);
    shape.lineTo(w/2, d/4);
    shape.lineTo(w/4, d/4);
    shape.lineTo(w/4, d/2);
    shape.lineTo(-w/2, d/2);
    shape.closePath();
  } else if (level === 0) {
    // EG: Offener Eingangsbereich
    shape.moveTo(-w/2, -d/2);
    shape.lineTo(w/2, -d/2);
    shape.lineTo(w/2, d/2);
    shape.lineTo(w/4, d/2);
    shape.lineTo(w/4, d/4);
    shape.lineTo(-w/4, d/4);
    shape.lineTo(-w/4, d/2);
    shape.lineTo(-w/2, d/2);
    shape.closePath();
  } else {
    // Standard-Etagen: Rechteck
    shape.moveTo(-w/2, -d/2);
    shape.lineTo(w/2, -d/2);
    shape.lineTo(w/2, d/2);
    shape.lineTo(-w/2, d/2);
    shape.closePath();
  }

  return shape;
}

function createInnerWalls(level: number): [number, number, number][][] {
  const walls: [number, number, number][][] = [];
  const w = BUILDING.width;
  const d = BUILDING.depth;
  const h = BUILDING.floorHeight;

  if (level >= 1 && level <= 4) {
    // Kern/Treppenhaus
    walls.push([[-1, 0, -d/2], [-1, 0, d/2]]);
    walls.push([[1, 0, -d/2], [1, 0, d/2]]);
    walls.push([[-1, 0, 0], [1, 0, 0]]);
    // Querwände
    walls.push([[-w/2, 0, 0], [-1, 0, 0]]);
    walls.push([[1, 0, 0], [w/2, 0, 0]]);
    // Vertikale Wände (Höhe)
    walls.push([[-1, 0, -d/2], [-1, h, -d/2], [-1, h, d/2], [-1, 0, d/2]]);
    walls.push([[1, 0, -d/2], [1, h, -d/2], [1, h, d/2], [1, 0, d/2]]);
  }

  if (level === 3) {
    // Projekt-Räume: mehr Unterteilungen
    walls.push([[-w/2, 0, -d/4], [-1, 0, -d/4]]);
    walls.push([[1, 0, -d/4], [w/2, 0, -d/4]]);
  }

  return walls;
}

export function Floor({ level }: FloorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const activeFloor = useStore((s) => s.activeFloor);
  const explodeAmount = useStore((s) => s.explodeAmount);
  const hoveredFloor = useStore((s) => s.hoveredFloor);
  const setHoveredFloor = useStore((s) => s.setHoveredFloor);

  const isActive = activeFloor === level;
  const isHovered = hoveredFloor === level;

  const { edgesGeometry, innerWalls } = useMemo(() => {
    const shape = createFloorShape(level);
    const extrudeSettings = { depth: BUILDING.floorHeight, bevelEnabled: false };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.rotateX(-Math.PI / 2);
    const edges = new THREE.EdgesGeometry(geometry);
    const walls = createInnerWalls(level);

    return { edgesGeometry: edges, innerWalls: walls };
  }, [level]);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    const targetY = level * BUILDING.floorHeight + explodeAmount * level * SCROLL_CONFIG.explodeDistance;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 4);
  });

  const lineColor = isActive ? COLORS.activeLine : isHovered ? COLORS.accentLine : COLORS.primaryLine;
  const lineOpacity = isActive ? 1 : isHovered ? 0.8 : 0.5;

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHoveredFloor(level)}
      onPointerLeave={() => setHoveredFloor(null)}
    >
      {/* Hauptgebäude-Kanten */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color={lineColor} transparent opacity={lineOpacity} linewidth={1} />
      </lineSegments>

      {/* Innenwände */}
      {innerWalls.map((points, i) => (
        <Line
          key={`wall-${level}-${i}`}
          points={points}
          color={COLORS.secondaryLine}
          transparent
          opacity={lineOpacity * 0.6}
          lineWidth={0.5}
        />
      ))}

      {/* Boden-Fläche (sehr dezent) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[BUILDING.width, BUILDING.depth]} />
        <meshBasicMaterial
          color={isActive ? COLORS.activeLine : COLORS.primaryLine}
          transparent
          opacity={isActive ? 0.06 : 0.02}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
