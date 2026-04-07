import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model3D } from './Model3D';

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [10, 6, 10], fov: 35 }}
          gl={{ antialias: true, alpha: false }}
          style={{ background: '#1A1A1A' }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={0.3} color="#C5A572" />
          <Model3D />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 container-wide"
        style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <p className="text-[#C5A572] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light">
          Architektur & Immobilien AG
        </p>
        <h1 className="text-white leading-none mb-6">
          <span className="block text-[clamp(2.5rem,8vw,7rem)] font-extralight tracking-tight">
            WIR BAUEN
          </span>
          <span className="block text-[clamp(2.5rem,8vw,7rem)] font-extralight tracking-tight text-[#C5A572]">
            ZUKUNFT.
          </span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-lg mb-10 font-light leading-relaxed">
          Generalplanung, Baumanagement und Projektentwicklung.<br />
          Seit 20 Jahren Ihr Partner in der Schweiz.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projekte"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projekte')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center px-8 py-3.5 bg-[#C5A572] text-white text-sm tracking-wider uppercase hover:bg-[#B8955F] transition-colors"
          >
            Projekte ansehen
          </a>
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-[#C5A572] hover:text-[#C5A572] transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
      </div>
    </section>
  );
}
