import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    name: 'Zentrum Glattpark',
    type: 'Generalplanung',
    area: '18.400 m²',
    location: 'Opfikon, Zürich',
    gradient: 'linear-gradient(135deg, #E8DCC8 0%, #C5A572 100%)',
  },
  {
    name: 'Campus West',
    type: 'Baumanagement',
    area: '32.000 m²',
    location: 'Winterthur',
    gradient: 'linear-gradient(135deg, #D4D4D4 0%, #9CA3AF 100%)',
  },
  {
    name: 'Residenz am See',
    type: 'Projektentwicklung',
    area: '8.200 m²',
    location: 'Küsnacht, Zürich',
    gradient: 'linear-gradient(135deg, #1A1A1A 0%, #4B5563 100%)',
  },
  {
    name: 'Logistikpark Nord',
    type: 'Bauherrenvertretung',
    area: '45.000 m²',
    location: 'Kloten',
    gradient: 'linear-gradient(135deg, #C5A572 0%, #E8DCC8 100%)',
  },
  {
    name: 'Gewerbehaus Mitte',
    type: 'Generalplanung',
    area: '12.600 m²',
    location: 'Zürich Altstetten',
    gradient: 'linear-gradient(135deg, #9CA3AF 0%, #D4D4D4 100%)',
  },
  {
    name: 'Wohnquartier Riedbach',
    type: 'Projektentwicklung',
    area: '22.800 m²',
    location: 'Schlieren',
    gradient: 'linear-gradient(135deg, #4B5563 0%, #1A1A1A 100%)',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardsRef.current.forEach((card, i) => {
              if (!card) return;
              setTimeout(() => {
                card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projekte"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="section-padding"
      style={{ background: '#FAFAFA' }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 gap-6">
          <div>
            <p
              className="text-sm font-light tracking-[0.3em] uppercase mb-6"
              style={{ color: '#C5A572' }}
            >
              Ausgewählte Arbeiten
            </p>
            <h2
              id="projects-heading"
              className="font-extralight"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-0.02em',
                color: '#1A1A1A',
              }}
            >
              Unsere Projekte
            </h2>
          </div>
          <p
            className="font-light"
            style={{ color: '#6B6B6B', fontSize: '15px', maxWidth: '280px' }}
          >
            200+ realisierte Projekte in der gesamten Deutschschweiz.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              ref={(el: HTMLElement | null) => { cardsRef.current[i] = el; }}
              className="project-card overflow-hidden cursor-pointer group"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
              }}
              aria-label={`Projekt: ${project.name}`}
            >
              {/* Image / Gradient Placeholder */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: i === 2 || i === 3 ? '16/10' : '4/3' }}
              >
                <div
                  className="project-image absolute inset-0"
                  style={{ background: project.gradient }}
                  aria-hidden="true"
                />

                {/* Hover Overlay */}
                <div
                  className="project-overlay absolute inset-0 flex items-center justify-center"
                  style={{ background: 'rgba(26,26,26,0.6)' }}
                >
                  <span
                    className="text-sm font-light tracking-[0.2em] uppercase px-6 py-3"
                    style={{ border: '1px solid rgba(197,165,114,0.8)', color: '#C5A572' }}
                  >
                    Projekt ansehen
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div
                className="p-6 flex items-start justify-between"
                style={{ borderBottom: '1px solid rgba(26,26,26,0.06)' }}
              >
                <div>
                  <h3
                    className="font-light mb-1"
                    style={{ fontSize: '18px', color: '#1A1A1A', letterSpacing: '-0.01em' }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm font-light" style={{ color: '#6B6B6B' }}>
                    {project.location}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p
                    className="text-xs font-light tracking-widest uppercase mb-1"
                    style={{ color: '#C5A572' }}
                  >
                    {project.type}
                  </p>
                  <p className="text-sm font-light" style={{ color: '#6B6B6B' }}>
                    {project.area}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            className="px-10 py-4 text-sm font-light tracking-widest uppercase transition-all duration-300 focus:outline-none"
            style={{
              border: '1px solid rgba(26,26,26,0.2)',
              color: '#1A1A1A',
              letterSpacing: '0.15em',
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = '#C5A572';
              btn.style.color = '#C5A572';
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = 'rgba(26,26,26,0.2)';
              btn.style.color = '#1A1A1A';
            }}
          >
            Alle Projekte
          </button>
        </div>
      </div>
    </section>
  );
}
