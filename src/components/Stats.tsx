import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    value: 200,
    suffix: '+',
    label: 'Projekte',
    description: 'Erfolgreich realisiert',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Jahre',
    description: 'Erfahrung am Markt',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Retail',
    description: 'Handels- & Gewerbeprojekte',
  },
  {
    value: 2,
    suffix: ' Mrd.',
    label: 'CHF',
    description: 'Realisiertes Projektvolumen',
  },
];

function useCounter(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count;
}

function StatCounter({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCounter(stat.value, 2000, active);

  return (
    <div className="text-center px-4">
      <div
        className="stat-number"
        aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
      >
        {count}
        <span style={{ color: '#C5A572' }}>{stat.suffix}</span>
      </div>
      <p
        className="text-base font-light tracking-[0.15em] uppercase mt-3"
        style={{ color: 'rgba(250,250,250,0.9)' }}
      >
        {stat.label}
      </p>
      <p
        className="text-sm font-light mt-2"
        style={{ color: 'rgba(250,250,250,0.4)' }}
      >
        {stat.description}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="zahlen"
      ref={sectionRef}
      aria-labelledby="stats-heading"
      style={{ background: '#1A1A1A', padding: '100px 0' }}
    >
      <div className="container-wide">
        <h2 id="stats-heading" className="sr-only">
          WORKS AG in Zahlen
        </h2>

        {/* Divider line */}
        <div
          className="h-px mb-20 mx-auto"
          style={{
            background: 'linear-gradient(to right, transparent, #C5A572, transparent)',
            maxWidth: '400px',
          }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} stat={stat} active={isVisible} />
          ))}
        </div>

        {/* Divider line */}
        <div
          className="h-px mt-20 mx-auto"
          style={{
            background: 'linear-gradient(to right, transparent, #C5A572, transparent)',
            maxWidth: '400px',
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
