export function ContactSection() {
  return (
    <div className="w-full px-8" style={{ pointerEvents: 'none' }}>
      <div className="max-w-4xl px-8 w-full">
        <div className="mb-2">
          <span className="text-[#4a9eff]/40 text-xs font-mono tracking-[0.3em]">00 — EG</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#e0f0ff] mb-2 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Kontakt
        </h2>
        <div className="w-16 h-px bg-[#4a9eff] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-[#4a9eff]/60 text-xs font-mono tracking-wider uppercase mb-3">Adresse</h3>
              <p className="text-[#e0f0ff] font-light leading-relaxed">
                WORKS Architektur & Immobilien AG<br />
                Bellerivestrasse 18<br />
                CH-8008 Zürich
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-[#4a9eff]/60 text-xs font-mono tracking-wider uppercase mb-3">Kontakt</h3>
              <p className="text-[#e0f0ff] font-light">
                <a href="tel:+41432226242" className="hover:text-[#00d4ff] transition-colors" style={{ pointerEvents: 'auto' }}>
                  +41 43 222 62 42
                </a>
              </p>
              <p className="text-[#e0f0ff] font-light mt-1">
                <a href="mailto:info@works.ch" className="hover:text-[#00d4ff] transition-colors" style={{ pointerEvents: 'auto' }}>
                  info@works.ch
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[#4a9eff]/60 text-xs font-mono tracking-wider uppercase mb-3">Web</h3>
              <p className="text-[#e0f0ff] font-light">
                <span style={{ pointerEvents: 'auto' }} className="hover:text-[#00d4ff] transition-colors cursor-pointer">
                  www.works.ch
                </span>
              </p>
            </div>
          </div>
          <div className="border border-[#1a3a5c]/30 p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <div className="border border-[#4a9eff]/20 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-[#4a9eff]/40 font-light" style={{ fontFamily: 'system-ui, sans-serif' }}>W</span>
              </div>
              <p className="text-[#6a8aaa] text-sm leading-relaxed max-w-xs">
                Seit über 20 Jahren Ihr verlässlicher Partner für anspruchsvolle Bauprojekte in der Schweiz.
              </p>
              <div className="w-12 h-px bg-[#1a3a5c] mx-auto mt-6 mb-4" />
              <p className="text-[#4a9eff]/40 text-xs font-mono tracking-widest">EST. 2004</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
