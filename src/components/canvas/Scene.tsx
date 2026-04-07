import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Preload, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Building } from './Building';
import { BlueprintGrid } from './BlueprintGrid';
import { CameraRig } from './CameraRig';
import { FloorAnimationController } from './FloorAnimationController';
import { COLORS, SCROLL_CONFIG } from '../../utils/constants';
import { HtmlOverlay } from '../html/HtmlOverlay';
import { useStore } from '../../stores/useStore';

function SceneContent() {
  return (
    <>
      <CameraRig />
      <FloorAnimationController />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 20, 10]} intensity={0.5} color={COLORS.primaryLine} />
      <BlueprintGrid />
      <Building />
    </>
  );
}

export function Scene() {
  const setIsLoaded = useStore((s) => s.setIsLoaded);
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [14, 10, 14], fov: 40, near: 0.1, far: 200 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor(COLORS.background);
        setIsLoaded(true);
      }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)}>
        <AdaptiveDpr pixelated />
      </PerformanceMonitor>
      <Suspense fallback={null}>
        <ScrollControls pages={SCROLL_CONFIG.pages} damping={SCROLL_CONFIG.damping}>
          <Scroll>
            <SceneContent />
          </Scroll>
          <Scroll html>
            <HtmlOverlay />
          </Scroll>
        </ScrollControls>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
