export function RetailSection() {
  return (
    <div className="w-full" style={{ pointerEvents: 'none' }}>
      <div className="max-w-4xl px-8 w-full">
        <div className="mb-2">
          <span className="text-[#4a9eff]/40 text-xs font-mono tracking-[0.3em]">02 — OG</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#e0f0ff] mb-2 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
          WORKS Retail
        </h2>
        <div className="w-16 h-px bg-[#4a9eff] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-[#6a8aaa] leading-relaxed mb-6">
              Als versierter und gut vernetzter Immobiliendienstleister sind wir Ihr Ansprechpartner
              für die Vermarktung von Retail- und Gewerbeflächen.
            </p>
            <p className="text-[#6a8aaa] leading-relaxed mb-8">
              Im Bereich WORKS® Retail bieten wir exzellente Vernetzung und langjährige Erfahrung
              bei der Suche, Anmietung, Neugestaltung oder Revitalisierung von Einzelhandelsflächen
              und Gewerbestandorten.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Standortsuche', 'Flächenvermarktung', 'Shopping Center', 'Revitalisierung', 'Projektentwicklung'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1a3a5c]/50 px-3 py-1 text-xs font-mono text-[#4a9eff]/70 hover:border-[#4a9eff]/50 hover:text-[#00d4ff] transition-colors cursor-default"
                  style={{ pointerEvents: 'auto' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-[#1a3a5c]/30 p-6 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-4xl font-light text-[#4a9eff] mb-2 font-mono">50+</div>
              <div className="text-[#6a8aaa] text-xs tracking-wider uppercase">Retail Projekte</div>
            </div>
            <div className="w-8 h-px bg-[#1a3a5c] mx-auto my-4" />
            <div className="text-center">
              <div className="text-4xl font-light text-[#4a9eff] mb-2 font-mono">CH</div>
              <div className="text-[#6a8aaa] text-xs tracking-wider uppercase">Schweizweit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
