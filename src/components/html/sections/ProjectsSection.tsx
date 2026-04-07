const PROJECTS = [
  { name: 'Geschäftshaus Bellerivestrasse', type: 'Büro / Gewerbe', year: '2024', size: '12\'000 m²' },
  { name: 'Shopping Center Renovation', type: 'Retail / Mixed-Use', year: '2023', size: '8\'500 m²' },
  { name: 'Wohnüberbauung Seefeld', type: 'Wohnen', year: '2023', size: '6\'200 m²' },
  { name: 'Bürokomplex Europaallee', type: 'Büro', year: '2022', size: '15\'000 m²' },
  { name: 'Retailpark Winterthur', type: 'Retail', year: '2022', size: '10\'800 m²' },
  { name: 'Gesamtsanierung Limmatquai', type: 'Mixed-Use', year: '2021', size: '4\'500 m²' },
];

export function ProjectsSection() {
  return (
    <div className="w-full" style={{ pointerEvents: 'none' }}>
      <div className="max-w-5xl px-8 w-full">
        <div className="mb-2">
          <span className="text-[#4a9eff]/40 text-xs font-mono tracking-[0.3em]">03 — OG</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#e0f0ff] mb-2 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Projekte
        </h2>
        <div className="w-16 h-px bg-[#4a9eff] mb-8" />
        <p className="text-[#6a8aaa] mb-8 font-mono text-sm">Über 200 erfolgreich realisierte Bauprojekte</p>
        <div className="space-y-3">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="flex items-center justify-between border-b border-[#1a3a5c]/30 pb-3 group hover:border-[#4a9eff]/40 transition-colors"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-[#4a9eff]/30 text-xs font-mono w-6">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[#e0f0ff] font-light group-hover:text-[#00d4ff] transition-colors">{project.name}</h3>
                  <span className="text-[#6a8aaa] text-xs font-mono">{project.type}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[#4a9eff]/60 text-sm font-mono">{project.size}</span>
                <span className="text-[#6a8aaa]/40 text-xs font-mono ml-4">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
