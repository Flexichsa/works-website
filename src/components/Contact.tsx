import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const content = contentRef.current;
            if (content) {
              content.style.transition = 'opacity 1s ease, transform 1s ease';
              content.style.opacity = '1';
              content.style.transform = 'translateY(0)';
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="kontakt"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      style={{ background: '#1A1A1A', color: '#FAFAFA' }}
    >
      {/* Main Contact Block */}
      <div className="container-wide" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div
          ref={contentRef}
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p
              className="text-sm font-light tracking-[0.3em] uppercase mb-6"
              style={{ color: '#C5A572' }}
            >
              Kontakt
            </p>
            <h2
              id="contact-heading"
              className="font-extralight"
              style={{
                fontSize: 'clamp(36px, 5vw, 68px)',
                letterSpacing: '-0.03em',
                lineHeight: '1.05',
                color: '#FAFAFA',
              }}
            >
              Lassen Sie uns
              <br />
              gemeinsam bauen.
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div>
              <div className="space-y-10">
                {/* Address */}
                <div>
                  <p
                    className="text-xs font-light tracking-[0.25em] uppercase mb-3"
                    style={{ color: '#C5A572' }}
                  >
                    Adresse
                  </p>
                  <address
                    className="font-light not-italic"
                    style={{ color: 'rgba(250,250,250,0.7)', lineHeight: '1.9', fontSize: '16px' }}
                  >
                    WORKS Architektur & Immobilien AG
                    <br />
                    Musterstrasse 42
                    <br />
                    8001 Zürich
                    <br />
                    Schweiz
                  </address>
                </div>

                {/* Phone */}
                <div>
                  <p
                    className="text-xs font-light tracking-[0.25em] uppercase mb-3"
                    style={{ color: '#C5A572' }}
                  >
                    Telefon
                  </p>
                  <a
                    href="tel:+41441234567"
                    className="font-light transition-colors duration-300 focus:outline-none focus-visible:underline"
                    style={{ color: 'rgba(250,250,250,0.7)', fontSize: '16px' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#C5A572';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,250,250,0.7)';
                    }}
                  >
                    +41 44 123 45 67
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p
                    className="text-xs font-light tracking-[0.25em] uppercase mb-3"
                    style={{ color: '#C5A572' }}
                  >
                    E-Mail
                  </p>
                  <a
                    href="mailto:info@works-ag.ch"
                    className="font-light transition-colors duration-300 focus:outline-none focus-visible:underline"
                    style={{ color: 'rgba(250,250,250,0.7)', fontSize: '16px' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#C5A572';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,250,250,0.7)';
                    }}
                  >
                    info@works-ag.ch
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mt-12">
                {['LinkedIn', 'Xing', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-light tracking-widest uppercase transition-colors duration-300 focus:outline-none focus-visible:underline"
                    style={{ color: 'rgba(250,250,250,0.35)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#C5A572';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,250,250,0.35)';
                    }}
                    aria-label={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Map Placeholder + CTA */}
            <div className="flex flex-col">
              {/* Map Placeholder */}
              <div
                className="flex-1 min-h-64 mb-8 flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                aria-label="Standortkarte Zürich"
                role="img"
              >
                <div className="text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="mx-auto mb-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 3C11.582 3 8 6.686 8 11.2c0 6.4 8 17.8 8 17.8s8-11.4 8-17.8C24 6.686 20.418 3 16 3z"
                      stroke="#C5A572"
                      strokeWidth="1"
                    />
                    <circle cx="16" cy="11" r="3" stroke="#C5A572" strokeWidth="1" />
                  </svg>
                  <p
                    className="text-xs font-light tracking-widest uppercase"
                    style={{ color: 'rgba(250,250,250,0.25)' }}
                  >
                    Zürich, Schweiz
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:info@works-ag.ch"
                className="block text-center py-5 px-8 text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2"
                style={{ background: '#C5A572', color: '#FAFAFA' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#B8925F';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#C5A572';
                }}
              >
                Projekt anfragen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ paddingTop: '28px', paddingBottom: '28px' }}
        >
          <p
            className="text-xs font-light"
            style={{ color: 'rgba(250,250,250,0.25)' }}
          >
            &copy; {new Date().getFullYear()} WORKS Architektur & Immobilien AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {['Impressum', 'Datenschutz'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-light tracking-wide transition-colors duration-300 focus:outline-none focus-visible:underline"
                style={{ color: 'rgba(250,250,250,0.25)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#C5A572';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,250,250,0.25)';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
