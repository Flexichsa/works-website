const SERVICES = [
  {
    title: 'Generalplanung',
    description: 'Von der ersten Idee bis zur schlüsselfertigen Übergabe — wir übernehmen die Gesamtverantwortung.',
    icon: '⬡',
  },
  {
    title: 'Bauherrenvertretung',
    description: 'Professionelle Vertretung Ihrer Interessen während des gesamten Bauprozesses.',
    icon: '◇',
  },
  {
    title: 'Baumanagement',
    description: 'Effiziente Steuerung komplexer Bauprojekte mit Fokus auf Qualität, Kosten und Termine.',
    icon: '△',
  },
  {
    title: 'Projektentwicklung',
    description: 'Innovative Konzepte für Neubauten und Bestandsoptimierung mit nachhaltigem Mehrwert.',
    icon: '○',
  },
];

export function ServicesSection() {
  return (
    <div className="w-full" style={{ pointerEvents: 'none' }}>
      <div className="max-w-5xl px-8 w-full">
        <div className="mb-2">
          <span className="text-[#4a9eff]/40 text-xs font-mono tracking-[0.3em]">04 — OG</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#e0f0ff] mb-2 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>
          Dienstleistungen
        </h2>
        <div className="w-16 h-px bg-[#4a9eff] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-[#1a3a5c]/50 p-6 backdrop-blur-sm bg-[#0a1628]/40 group hover:border-[#4a9eff]/50 transition-colors duration-500"
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-2xl text-[#4a9eff]/60 group-hover:text-[#00d4ff] transition-colors">{service.icon}</span>
              <h3 className="text-lg text-[#e0f0ff] mt-3 mb-2 font-mono tracking-wide">{service.title}</h3>
              <p className="text-[#6a8aaa] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
