import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../stores/useStore';
import { FLOORS } from '../utils/constants';

export function useFloorAnimation() {
  const scroll = useScroll();
  const setActiveFloor = useStore((s) => s.setActiveFloor);
  const setExplodeAmount = useStore((s) => s.setExplodeAmount);

  const smoothExplode = useRef(0);
  const smoothActive = useRef(5);

  useFrame((_state, delta) => {
    const offset = scroll.offset;

    // Explode-Berechnung: 0 = zusammen, 1 = voll auseinander
    const targetExplode = THREE.MathUtils.clamp(offset * 1.5, 0, 1);
    smoothExplode.current = THREE.MathUtils.lerp(smoothExplode.current, targetExplode, delta * 3);
    setExplodeAmount(smoothExplode.current);

    // Aktive Etage basierend auf Scroll-Position
    const floorIndex = Math.round(offset * (FLOORS.length - 1));
    const clampedIndex = THREE.MathUtils.clamp(FLOORS.length - 1 - floorIndex, 0, FLOORS.length - 1);

    smoothActive.current = THREE.MathUtils.lerp(smoothActive.current, clampedIndex, delta * 4);
    setActiveFloor(Math.round(smoothActive.current));
  });

  return { scroll };
}
