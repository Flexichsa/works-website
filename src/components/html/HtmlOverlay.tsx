import { HomeSection } from './sections/HomeSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { RetailSection } from './sections/RetailSection';
import { TeamSection } from './sections/TeamSection';
import { ContactSection } from './sections/ContactSection';

// ScrollControls pages=8, total height = 800vh
// Sections are spaced across 8 pages
// ScrollControls pages=12, total scroll height = 1200vh
// Each section gets ~2 pages of spacing
const sections = [
  { Component: HomeSection, page: 0.2 },
  { Component: ServicesSection, page: 2.2 },
  { Component: ProjectsSection, page: 4.2 },
  { Component: RetailSection, page: 6.2 },
  { Component: TeamSection, page: 8.2 },
  { Component: ContactSection, page: 10.0 },
];

export function HtmlOverlay() {
  return (
    <div style={{ pointerEvents: 'none', position: 'relative', width: '100vw' }}>
      {sections.map(({ Component, page }, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${page * 100}vh`,
            left: 0,
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
}
