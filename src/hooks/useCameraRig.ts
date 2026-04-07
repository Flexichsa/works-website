import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '../stores/useStore';
import { FLOORS, SCROLL_CONFIG, BUILDING } from '../utils/constants';

export function useCameraRig() {
  const { camera } = useThree();
  const activeFloor = useStore((s) => s.activeFloor);
  const explodeAmount = useStore((s) => s.explodeAmount);
  const time = useRef(0);

  useFrame((_state, delta) => {
    time.current += delta * 0.3;

    const floor = FLOORS[FLOORS.length - 1 - activeFloor] || FLOORS[0];
    const targetY = floor.yBase * BUILDING.floorHeight + explodeAmount * floor.level * SCROLL_CONFIG.explodeDistance;

    // Sanfte Orbit-Rotation
    const orbitRadius = SCROLL_CONFIG.cameraDistance - explodeAmount * 4;
    const targetX = Math.sin(time.current) * orbitRadius;
    const targetZ = Math.cos(time.current) * orbitRadius;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 1.5);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY + 3, delta * 2);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, delta * 1.5);

    // Kamera schaut immer auf aktive Etage
    const lookTarget = new THREE.Vector3(0, targetY, 0);
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    camera.lookAt(lookTarget);
  });
}
