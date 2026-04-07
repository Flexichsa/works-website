import { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model3D from './Model3D';

function CanvasLoadingFallback() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: '#1A1A1A' }}
    >
      <div className="text-center">
        <div
          className="w-12 h-12 border border-[#C5A572] border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: '#C5A572 transparent transparent transparent' }}
        />
        <p className="text-[#6B6B6B] text-sm font-light tracking-widest uppercase">
          Laden
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in animation for hero text on mount
    const el = textRef.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';

    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="WORKS AG Hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px', background: '#1A1A1A' }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={<CanvasLoadingFallback />}>
          <Canvas
            className="three-canvas"
            camera={{ position: [0, 2, 8], fov: 45 }}
            gl={{ antialias: true, alpha: false }}
            style={{ background: '#1A1A1A' }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.3} />
            <Model3D />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate={false}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Dark overlay gradient for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.1) 40%, rgba(26,26,26,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-start justify-end h-full container-wide pb-24"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-light tracking-[0.3em] uppercase mb-6"
            style={{ color: '#C5A572' }}
          >
            Architektur & Immobilien AG
          </p>

          {/* Main Headline */}
          <h1
            className="font-extralight"
            style={{
              fontSize: 'clamp(56px, 9vw, 128px)',
              letterSpacing: '-0.03em',
              lineHeight: '0.95',
              color: '#FAFAFA',
            }}
          >
            WIR BAUEN
            <br />
            <span style={{ color: '#C5A572' }}>ZUKUNFT.</span>
          </h1>

          {/* Subline */}
          <p
            className="mt-8 font-light max-w-xl"
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.7',
              color: 'rgba(250,250,250,0.65)',
            }}
          >
            Generalplanung, Baumanagement und Projektentwicklung.
            <br />
            Seit 20 Jahren Ihr Partner in der Schweiz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => {
                const el = document.querySelector('#projekte');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-sm font-light tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2"
              style={{
                background: '#C5A572',
                color: '#FAFAFA',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#B8925F';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#C5A572';
              }}
            >
              Projekte ansehen
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#kontakt');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 text-sm font-light tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2"
              style={{
                border: '1px solid rgba(250,250,250,0.4)',
                color: 'rgba(250,250,250,0.8)',
                letterSpacing: '0.15em',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.borderColor = '#C5A572';
                btn.style.color = '#C5A572';
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.borderColor = 'rgba(250,250,250,0.4)';
                btn.style.color = 'rgba(250,250,250,0.8)';
              }}
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
          aria-hidden="true"
        >
          <span
            className="text-xs font-light tracking-[0.2em] uppercase"
            style={{ color: 'rgba(250,250,250,0.4)' }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, rgba(197,165,114,0.8), transparent)' }}
          />
        </div>
      </div>

      {/* Bottom gradient fade into content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #1A1A1A)' }}
        aria-hidden="true"
      />
    </section>
  );
}
