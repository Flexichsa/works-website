const TEAM_MEMBERS = [
  { name: 'Marc Schneider', role: 'Geschäftsführer / CEO', speciality: 'Generalplanung' },
  { name: 'Andrea Keller', role: 'Leiterin Baumanagement', speciality: 'Grossprojekte' },
  { name: 'Thomas Brunner', role: 'Projektleiter', speciality: 'Büro & Gewerbe' },
  { name: 'Sarah Meier', role: 'Projektleiterin', speciality: 'Retail & Mixed-Use' },
  { name: 'Daniel Frey', role: 'Bauherrenvertretung', speciality: 'Wohnungsbau' },
  { name: 'Lisa Wang', role: 'Architektin', speciality: 'Entwurf & Planung' },
];

export function TeamSection() {
  return (
    <div className="w-full" style={{ pointerEvents: 'none' }}>
      <div className="max-w-5xl px-8 w-full">
        <div className="mb-2">
          <span className="text-[#4a9eff]/40 text-xs font-mono tracking-[0.3em]">01 — OG</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#e0f0ff] mb-2 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Team
        </h2>
        <div className="w-16 h-px bg-[#4a9eff] mb-6" />
        <p className="text-[#6a8aaa] mb-8 max-w-xl">
          Bei WORKS finden Sie ein gut eingespieltes Team von Spezialisten,
          die motiviert sind, für hervorragende Ergebnisse die Extrameile zu gehen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="border border-[#1a3a5c]/30 p-5 hover:border-[#4a9eff]/40 transition-colors group"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="w-10 h-10 border border-[#4a9eff]/20 flex items-center justify-center mb-3 group-hover:border-[#00d4ff]/40 transition-colors">
                <span className="text-[#4a9eff]/40 text-xs font-mono">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-[#e0f0ff] font-light mb-1">{member.name}</h3>
              <p className="text-[#4a9eff]/60 text-xs font-mono mb-1">{member.role}</p>
              <p className="text-[#6a8aaa]/50 text-xs font-mono">{member.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
