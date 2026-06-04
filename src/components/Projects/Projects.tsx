import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  id: string;
  titleKey: string;
  introKey: string;
  features: { title: string; desc: string }[];
  tags: string[];
  githubUrl: string;
  videoSrc: string;
}

export function Projects(): React.JSX.Element {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // 📂 Definición detallada de tu proyecto "Mil Maneras de Morir"
  const projectsList: Project[] = [
    {
      id: "hundred-ways-to-die",
      titleKey: "100 Maneras de Morir Web App",
      introKey: "¡Bienvenido/a al proyecto más oscuro y divertido de mi porfolio! Esta aplicación combina humor negro, interactividad y una sólida arquitectura de desarrollo para ofrecer una experiencia dinámica mientras se gestionan datos en tiempo real y se consumen servicios externos.",
      tags: ["JavaScript", "PHP", "MySQL", "REST API", "CRUD"],
      githubUrl: "https://github.com/Girassole/proyectoCienManeras",
      videoSrc: "/demo_proyecto.mp4", // Tu vídeo en la carpeta public/
      features: [
        { title: "🔐 Sistema de Autenticación", desc: "Gestión segura de usuarios (CRUD de dos capas) desde el login, permitiendo el registro e inicio de sesión seguro." },
        { title: "🔌 Integración de API (Armas)", desc: "Conexión con una API externa del famoso videojuego Elden Ring" },
        { title: "💀 El Test de la Muerte", desc: "Cuestionario interactivo con lógica personalizada que calcula, con un toque irreverente, cuál sería tu absurdo destino final." },
        { title: "🗳️ Votación en Tiempo Real", desc: "Sección interactiva donde los usuarios exploran el catálogo de muertes y votan por sus favoritas." },
        { title: "📊 Ranking Global", desc: "Panel de clasificación dinámico que muestra las muertes más votadas por la comunidad de forma visual y ordenada." }
      ]
    }
  ];

  const openModal = (videoUrl: string) => {
    setActiveVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveVideo('');
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0c021a] transition-colors duration-500 ease-in-out font-mono">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🎯 CABECERA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t('projects.title') || 'Proyectos Destacados'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans">
            {t('projects.subtitle') || 'Demostraciones técnicas de aplicaciones completas y control de calidad.'}
          </p>
        </div>

        {/* 🗂️ CONTENEDOR DE PROYECTOS (Layout Horizontal Optimizado) */}
        <div className="space-y-12">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-[#130526] rounded-3xl border border-slate-200/60 dark:border-[#381161]/50 overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-[0_20px_40px_rgba(147,51,234,0.08)] transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >

              {/* 📺 COLUMNA IZQUIERDA: El Video Showcase (Ocupa 5/12 columnas) */}
              <div className="lg:col-span-5 relative bg-black flex items-center justify-center min-h-[240px] lg:min-h-full cursor-zoom-in group overflow-hidden z-0">
                <video
                  src={project.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 absolute inset-0"
                />
                {/* Filtro de sombra y botón flotante de zoom */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => openModal(project.videoSrc)}
                />
                <button
                  onClick={() => openModal(project.videoSrc)}
                  className="absolute bottom-4 left-4 px-4 py-2 bg-black/70 text-white rounded-xl text-xs backdrop-blur-md border border-white/10 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  🔍 Expandir Vídeo Demo
                </button>
              </div>

              {/* 📝 COLUMNA DERECHA: Documentación Técnica Completa (Ocupa 7/12 columnas) */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200/50 dark:border-[#381161]/30">
                <div>
                  {/* Título del Proyecto */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                    {project.titleKey}
                  </h3>

                  {/* Introducción descriptiva */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-6">
                    {project.introKey}
                  </p>

                  {/* 🚀 Bloque de Características Clave */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
                      🚀 Características Clave y Funcionalidades
                    </h4>
                    <div className="space-y-3 font-sans">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs">
                          <span className="text-slate-400 dark:text-purple-500/70 mt-0.5">▪</span>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            <strong className="text-slate-800 dark:text-slate-200 font-semibold font-mono">{feat.title}:</strong> {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 🛠️ Stack Tecnológico */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      🛠️ Stack Tecnológico & Persistencia
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] md:text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-[#1f0a3a]/60 text-slate-700 dark:text-slate-300 border border-slate-300/30 dark:border-[#381161]/50 cursor-default select-none transition-colors hover:border-purple-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 🔗 Enlace al Repositorio de GitHub */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-[#381161]/30">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 border border-slate-300 dark:border-[#381161] rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#130526] hover:bg-slate-100 dark:hover:bg-[#1f0a3a]/40 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>Explorar Código en GitHub</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔮 MODAL LIGHTBOX (A pantalla completa al pinchar) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl font-sans transition-colors z-50 select-none"
          >
            &times;
          </button>

          <div
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}