import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    name: 'Geschäftshaus Bellerivestrasse',
    type: 'Büro / Gewerbe',
    size: '12\'000 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
  },
  {
    name: 'Shopping Center Renovation',
    type: 'Retail / Mixed-Use',
    size: '8\'500 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
  },
  {
    name: 'Wohnüberbauung Seefeld',
    type: 'Wohnen',
    size: '6\'200 m²',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  },
  {
    name: 'Bürokomplex Europaallee',
    type: 'Büro',
    size: '15\'000 m²',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=800&h=600&fit=crop',
  },
  {
    name: 'Retailpark Winterthur',
    type: 'Retail',
    size: '10\'800 m²',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1481253127861-534498168948?w=800&h=600&fit=crop',
  },
  {
    name: 'Gesamtsanierung Limmatquai',
    type: 'Mixed-Use',
    size: '4\'500 m²',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).classList.add('animate-in');
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projekte" ref={sectionRef} className="section-padding" style={{ background: '#FAFAFA' }}>
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-[#C5A572] text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#1A1A1A] tracking-tight">
            Ausgewählte Projekte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className={`project-card will-animate group cursor-pointer ${
                i === 0 || i === 3 ? 'md:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: i % 3 === 0 ? '4/3' : '16/10' }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="project-overlay absolute inset-0 bg-[#1A1A1A]/60 flex items-end p-6 md:p-8">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase text-white/70 border border-white/20 mb-3">
                      {project.type}
                    </span>
                    <p className="text-white text-sm font-light">{project.size} · {project.year}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-lg md:text-xl font-light text-[#1A1A1A] group-hover:text-[#C5A572] transition-colors">
                  {project.name}
                </h3>
                <span className="text-[#6B6B6B] text-sm font-light">{project.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
