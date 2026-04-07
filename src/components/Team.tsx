import { useEffect, useRef } from 'react';

const TEAM_MEMBERS = [
  {
    name: 'Andreas Müller',
    role: 'Geschäftsführer & Generalplaner',
    initials: 'AM',
    color: '#C5A572',
  },
  {
    name: 'Sandra Berger',
    role: 'Leiterin Projektentwicklung',
    initials: 'SB',
    color: '#9CA3AF',
  },
  {
    name: 'Thomas Keller',
    role: 'Leiter Baumanagement',
    initials: 'TK',
    color: '#1A1A1A',
  },
  {
    name: 'Laura Zimmermann',
    role: 'Architektin dipl. ETH',
    initials: 'LZ',
    color: '#B8925F',
  },
  {
    name: 'Markus Weber',
    role: 'Bauherrenvertreter',
    initials: 'MW',
    color: '#6B6B6B',
  },
  {
    name: 'Julia Steinmann',
    role: 'Projektleiterin Hochbau',
    initials: 'JS',
    color: '#D4D4D4',
  },
];

export default function Team() {
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
      id="team"
      ref={sectionRef}
      aria-labelledby="team-heading"
      className="section-padding"
      style={{ background: '#F2F0ED' }}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p
            className="text-sm font-light tracking-[0.3em] uppercase mb-6"
            style={{ color: '#C5A572' }}
          >
            Das Team
          </p>
          <h2
            id="team-heading"
            className="font-extralight mb-6"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
            }}
          >
            Erfahrene Experten,
            <br />
            leidenschaftliche Macher.
          </h2>
          <p
            className="font-light"
            style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: '1.7' }}
          >
            Unser interdisziplinäres Team vereint Architekten, Ingenieure und Betriebswirtschaftler
            unter einem Dach — für ganzheitliche Lösungen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="team-card"
              style={{ opacity: 0, transform: 'translateY(30px)' }}
            >
              {/* Avatar */}
              <div className="mb-5 overflow-hidden" style={{ aspectRatio: '1/1', maxWidth: '180px' }}>
                <div
                  className="team-image w-full h-full flex items-center justify-center"
                  style={{ background: member.color }}
                  aria-hidden="true"
                >
                  <span
                    className="font-extralight"
                    style={{
                      fontSize: '32px',
                      letterSpacing: '0.05em',
                      color: member.color === '#D4D4D4' ? '#6B6B6B' : 'rgba(250,250,250,0.9)',
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3
                className="font-light mb-1"
                style={{ fontSize: '17px', color: '#1A1A1A', letterSpacing: '-0.01em' }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm font-light"
                style={{ color: '#6B6B6B', lineHeight: '1.5' }}
              >
                {member.role}
              </p>

              {/* Accent dot */}
              <div
                className="w-1 h-1 rounded-full mt-4"
                style={{ background: '#C5A572' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
