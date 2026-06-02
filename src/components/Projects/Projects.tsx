import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// ==========================================================
// 1. INTERFAZ Y SUBCOMPONENTE: ImageCarousel
// ==========================================================
interface ImageCarouselProps {
  images: string[];
  alt: string;
}

function ImageCarousel({ images, alt }: ImageCarouselProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-56 bg-slate-100 dark:bg-slate-950 overflow-hidden shrink-0 group">
      <img
        src={images[currentIndex]}
        alt={`${alt} view ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-4' : 'bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ==========================================================
// 2. COMPONENTE PRINCIPAL: Projects (Exportado)
// ==========================================================
export function Projects(): React.JSX.Element {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Mundo Tour",
      desc: t('projects.tourDesc'),
      tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot"],
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
      ],
      gh: "https://github.com",
      demo: "https://google.com"
    },
    {
      title: "Refugio Patitas Peludas",
      desc: t('projects.petsDesc'),
      tags: ["React", "CSS Modules", "Laravel", "MySQL"],
      images: [
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=600&q=80"
      ],
      gh: "https://github.com",
      demo: "https://google.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#130526] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 font-mono">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('projects.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0c021a] rounded-2xl border border-slate-200/60 dark:border-[#381161]/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300 flex flex-col h-full group">
              <ImageCarousel images={project.images} alt={project.title} />

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-indigo-50 dark:bg-[#1f093a]/50 text-accent text-xs font-semibold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">{project.desc}</p>
                </div>

                <div className="flex items-center space-x-6 pt-4 border-t border-slate-100 dark:border-[#1c0836]">
                  <a href={project.gh} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-accent transition-colors">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-accent transition-colors">
                    <span>{t('projects.demoBtn')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}