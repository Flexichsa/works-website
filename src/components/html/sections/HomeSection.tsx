export function HomeSection() {
  return (
    <div className="w-full" style={{ pointerEvents: 'none' }}>
      <div className="text-center max-w-3xl px-8">
        <div className="mb-6">
          <div className="inline-block border border-[#4a9eff]/30 px-4 py-1 mb-4">
            <span className="text-[#6a8aaa] text-xs tracking-[0.3em] uppercase font-mono">Architektur & Immobilien</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-light tracking-wider text-[#e0f0ff] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
          WORKS
        </h1>
        <div className="w-24 h-px bg-[#4a9eff] mx-auto mb-6" />
        <p className="text-[#6a8aaa] text-lg md:text-xl font-light tracking-wide mb-8 font-mono">
          Generalplanung · Baumanagement · Projektentwicklung
        </p>
        <div className="flex items-center justify-center gap-8 text-[#4a9eff]/60 text-sm font-mono">
          <span>20+ Jahre Erfahrung</span>
          <span className="text-[#1a3a5c]">|</span>
          <span>200+ Projekte</span>
          <span className="text-[#1a3a5c]">|</span>
          <span>Zürich</span>
        </div>
        <div className="mt-16 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-40">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#4a9eff" strokeWidth="1.5" />
          </svg>
          <p className="text-[#6a8aaa]/40 text-xs mt-2 font-mono tracking-widest">SCROLL</p>
        </div>
      </div>
    </div>
  );
}
