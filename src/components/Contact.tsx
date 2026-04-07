import { useEffect, useRef } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.will-animate');
            els.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-in');
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kontakt" ref={sectionRef}>
      {/* Main Contact Area */}
      <div className="bg-[#1A1A1A] section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div className="will-animate">
              <p className="text-[#C5A572] text-sm tracking-[0.3em] uppercase mb-4">Kontakt</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-tight mb-12 leading-tight">
                Lassen Sie uns<br />gemeinsam bauen.
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[#C5A572] text-xs tracking-[0.2em] uppercase mb-2">Adresse</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    WORKS Architektur & Immobilien AG<br />
                    Bellerivestrasse 18<br />
                    CH-8008 Zürich<br />
                    Schweiz
                  </p>
                </div>

                <div>
                  <h3 className="text-[#C5A572] text-xs tracking-[0.2em] uppercase mb-2">Telefon</h3>
                  <a href="tel:+41432226242" className="text-white/80 font-light hover:text-[#C5A572] transition-colors">
                    +41 43 222 62 42
                  </a>
                </div>

                <div>
                  <h3 className="text-[#C5A572] text-xs tracking-[0.2em] uppercase mb-2">E-Mail</h3>
                  <a href="mailto:info@works.ch" className="text-white/80 font-light hover:text-[#C5A572] transition-colors">
                    info@works.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Right: CTA + Map Placeholder */}
            <div className="will-animate flex flex-col justify-between">
              <div className="border border-white/10 p-8 md:p-12 mb-8">
                <div className="w-12 h-12 border border-[#C5A572]/30 flex items-center justify-center mb-6">
                  <span className="text-[#C5A572] text-xl font-light">W</span>
                </div>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  Seit über 20 Jahren Ihr verlässlicher Partner für anspruchsvolle
                  Bauprojekte in der Schweiz. Von der ersten Idee bis zur
                  schlüsselfertigen Übergabe.
                </p>
                <a
                  href="mailto:info@works.ch"
                  className="inline-flex items-center px-8 py-3.5 bg-[#C5A572] text-white text-sm tracking-wider uppercase hover:bg-[#B8955F] transition-colors"
                >
                  Projekt anfragen
                </a>
              </div>

              {/* Map Placeholder with real location hint */}
              <div className="border border-white/10 p-6 flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A572" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  <p className="text-white/60 text-sm font-light">Bellerivestrasse 18, Zürich</p>
                  <p className="text-white/30 text-xs">Direkt am Zürichsee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#111111] py-6">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; {new Date().getFullYear()} WORKS Architektur & Immobilien AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-[#C5A572] transition-colors">Impressum</a>
            <a href="#" className="text-white/30 text-xs hover:text-[#C5A572] transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
