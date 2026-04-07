import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const content = contentRef.current;
          const line = lineRef.current;

          if (line) {
            line.style.transition = 'width 1.2s ease';
            line.style.width = '80px';
          }

          if (content) {
            content.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          }

          observer.disconnect();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ueber-uns"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="section-padding"
      style={{ background: '#FAFAFA' }}
    >
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex justify-center mb-12">
            <div
              ref={lineRef}
              className="h-px"
              style={{ width: '0', background: '#C5A572' }}
              aria-hidden="true"
            />
          </div>

          <div
            ref={contentRef}
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            {/* Eyebrow */}
            <p
              className="text-sm font-light tracking-[0.3em] uppercase mb-10"
              style={{ color: '#C5A572' }}
            >
              Wer wir sind
            </p>

            {/* Main Statement */}
            <h2
              id="about-heading"
              className="font-extralight mb-10"
              style={{
                fontSize: 'clamp(28px, 4.5vw, 58px)',
                letterSpacing: '-0.02em',
                lineHeight: '1.15',
                color: '#1A1A1A',
              }}
            >
              Seit über 20 Jahren gestalten
              <br />
              wir die gebaute Umwelt der Schweiz.
            </h2>

            {/* Description */}
            <p
              className="font-light mx-auto max-w-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.8',
                color: '#6B6B6B',
              }}
            >
              WORKS Architektur & Immobilien AG ist ein Zürcher Generalplaner, der komplexe
              Bauprojekte von der ersten Idee bis zur Übergabe begleitet. Wir verbinden
              architektonische Vision mit wirtschaftlicher Präzision — für Auftraggeber,
              denen Qualität und Termintreue wichtig sind.
            </p>

            {/* Key Facts Row */}
            <div
              className="grid grid-cols-3 gap-8 mt-20 pt-16"
              style={{ borderTop: '1px solid rgba(26,26,26,0.08)' }}
            >
              {[
                { value: 'Zürich', label: 'Hauptsitz' },
                { value: '1999', label: 'Gegründet' },
                { value: 'ISO 9001', label: 'Zertifiziert' },
              ].map((fact) => (
                <div key={fact.label} className="text-center">
                  <p
                    className="font-extralight"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      letterSpacing: '-0.02em',
                      color: '#1A1A1A',
                    }}
                  >
                    {fact.value}
                  </p>
                  <p
                    className="text-sm font-light tracking-widest uppercase mt-2"
                    style={{ color: '#6B6B6B' }}
                  >
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
