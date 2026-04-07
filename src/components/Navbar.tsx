import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Projekte', href: '#projekte' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Team', href: '#team' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-solid' : 'navbar-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-light tracking-[0.25em] focus:outline-none"
          style={{
            color: scrolled ? '#1A1A1A' : '#FAFAFA',
            transition: 'color 0.5s ease',
            letterSpacing: '0.3em',
          }}
          aria-label="WORKS AG - Nach oben scrollen"
        >
          WORKS
        </button>

        {/* Desktop Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-light tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:underline"
              style={{
                color: scrolled ? '#6B6B6B' : 'rgba(250,250,250,0.8)',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = '#C5A572';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = scrolled
                  ? '#6B6B6B'
                  : 'rgba(250,250,250,0.8)';
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: scrolled ? '#1A1A1A' : '#FAFAFA',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: scrolled ? '#1A1A1A' : '#FAFAFA',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: scrolled ? '#1A1A1A' : '#FAFAFA',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(250, 250, 250, 0.97)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <nav aria-label="Mobile Navigation" className="container-wide py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-light tracking-widest uppercase focus:outline-none"
              style={{ color: '#6B6B6B', letterSpacing: '0.1em' }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
