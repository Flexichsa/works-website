import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    number: '01',
    title: 'Generalplanung',
    description:
      'Wir koordinieren alle Fachplaner und Unternehmer als zentrale Ansprechstelle — von der Konzeption bis zur Ausführung. Termine, Kosten und Qualität stets im Griff.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" stroke="currentColor" strokeWidth="1" />
        <path d="M8 14h12M14 8v12" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Bauherrenvertretung',
    description:
      'Als Ihr verlängerter Arm übernehmen wir die vollständige Bauherrenverantwortung. Wir schützen Ihre Interessen gegenüber allen Projektbeteiligten.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Baumanagement',
    description:
      'Terminplanung, Vergabe und Bauleitung aus einer Hand. Wir steuern den Bauprozess mit bewährten Methoden und sorgen für reibungslose Abläufe auf der Baustelle.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M4 22L10 10l8 4 4-8"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Projektentwicklung',
    description:
      'Von der Standortanalyse über Machbarkeits-studien bis zum Businessplan. Wir begleiten Investitionsentscheidungen mit fundierter Markt- und Renditeanalyse.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M6 22V12l8-8 8 8v10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <rect x="11" y="16" width="6" height="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardsRef.current.forEach((card, i) => {
              if (!card) return;
              setTimeout(() => {
                card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="section-padding"
      style={{ background: '#F2F0ED' }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-20">
          <p
            className="text-sm font-light tracking-[0.3em] uppercase mb-6"
            style={{ color: '#C5A572' }}
          >
            Was wir leisten
          </p>
          <h2
            id="services-heading"
            className="font-extralight"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
            }}
          >
            Unsere Leistungen
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="service-card bg-white p-10 flex flex-col"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                borderTop: '1px solid rgba(26,26,26,0.06)',
              }}
            >
              {/* Number */}
              <span
                className="text-xs font-light tracking-widest mb-8 block"
                style={{ color: '#C5A572' }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className="mb-6" style={{ color: '#1A1A1A' }}>
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-light mb-4"
                style={{
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  color: '#1A1A1A',
                }}
              >
                {service.title}
              </h3>

              {/* Accent Line */}
              <div
                className="h-px mb-6 service-accent-line"
                style={{ background: '#C5A572', width: '32px' }}
                aria-hidden="true"
              />

              {/* Description */}
              <p
                className="font-light leading-relaxed flex-1"
                style={{ fontSize: '15px', color: '#6B6B6B' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
