// Etagen-Definitionen
export const FLOORS = [
  { id: 'home', label: 'HOME', level: 5, yBase: 5, description: 'Willkommen bei WORKS AG' },
  { id: 'services', label: 'DIENSTLEISTUNGEN', level: 4, yBase: 4, description: 'Generalplanung & Baumanagement' },
  { id: 'projects', label: 'PROJEKTE', level: 3, yBase: 3, description: '200+ realisierte Bauprojekte' },
  { id: 'retail', label: 'WORKS RETAIL', level: 2, yBase: 2, description: 'Einzelhandel & Gewerbeflächen' },
  { id: 'team', label: 'TEAM', level: 1, yBase: 1, description: 'Unser Spezialistenteam' },
  { id: 'contact', label: 'KONTAKT', level: 0, yBase: 0, description: 'Kontaktieren Sie uns' },
];

// Blueprint Farben
export const COLORS = {
  background: '#0a1628',
  primaryLine: '#4a9eff',
  secondaryLine: '#1a3a5c',
  accentLine: '#00d4ff',
  textPrimary: '#e0f0ff',
  textSecondary: '#6a8aaa',
  gridLine: '#0d2040',
  activeLine: '#00ff88',
};

// Scroll & Animation
export const SCROLL_CONFIG = {
  pages: 12,
  damping: 0.25,
  explodeDistance: 2.5,
  cameraDistance: 16,
};

// Gebäude-Dimensionen
export const BUILDING = {
  width: 8,
  depth: 6,
  floorHeight: 1.2,
  wallThickness: 0.15,
};
