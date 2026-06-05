import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import agile from '../../assets/certs/agile.jpg';
import bootcamp from '../../assets/certs/bootcamp_gpt.jpg';
import phyton from '../../assets/certs/phyton_beginers.jpg';
import jenkins from '../../assets/certs/robot_jenkins.jpg';
import selenium from '../../assets/certs/robot_selenium.jpg';
import xpath from '../../assets/certs/xpath.jpg';
import git from '../../assets/certs/git.jpg';

interface Certificate {
  id: number;
  titleKey: string; // Cambiado a clave de traducción
  image: string;
}

export function Certifications(): React.JSX.Element {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const certificatesList: Certificate[] = [
    { id: 1, titleKey: "certifications.certTitles.agile", image: agile },
    { id: 2, titleKey: "certifications.certTitles.bootcamp", image: bootcamp },
    { id: 3, titleKey: "certifications.certTitles.python", image: phyton },
    { id: 4, titleKey: "certifications.certTitles.jenkins", image: jenkins },
    { id: 5, titleKey: "certifications.certTitles.selenium", image: selenium },
    { id: 6, titleKey: "certifications.certTitles.xpath", image: xpath },
    { id: 7, titleKey: "certifications.certTitles.git", image: git }
  ];

  const totalCertificates = certificatesList.length;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCertificates);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCertificates) % totalCertificates);
  };

  const openLightbox = (imgUrl: string) => {
    setModalImage(imgUrl);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const getCardStyles = (index: number) => {
    let offset = index - currentIndex;

    if (offset < -1 && offset < -totalCertificates / 2) offset += totalCertificates;
    if (offset > 1 && offset > totalCertificates / 2) offset -= totalCertificates;

    const isActive = offset === 0;
    const isPrev = offset === -1;
    const isNext = offset === 1;

    if (isActive) {
      return {
        transform: 'rotateY(0deg) translateZ(100px) scale(1.1)',
        zIndex: 30,
        opacity: 1,
        filter: 'blur(0px) brightness(1)',
        pointerEvents: 'auto' as const
      };
    } else if (isPrev) {
      return {
        transform: 'rotateY(35deg) translateX(-180px) translateZ(-50px) scale(0.85)',
        zIndex: 20,
        opacity: 0.4,
        filter: 'blur(1.5px) brightness(0.7)',
        pointerEvents: 'none' as const
      };
    } else if (isNext) {
      return {
        transform: 'rotateY(-35deg) translateX(180px) translateZ(-50px) scale(0.85)',
        zIndex: 20,
        opacity: 0.4,
        filter: 'blur(1.5px) brightness(0.7)',
        pointerEvents: 'none' as const
      };
    } else {
      return {
        transform: 'rotateY(0deg) translateZ(-200px) scale(0.5)',
        zIndex: 10,
        opacity: 0,
        filter: 'blur(4px)',
        pointerEvents: 'none' as const
      };
    }
  };

  return (
    <section id="certificates" className="py-24 bg-[#fcfaff] dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-500 ease-in-out font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* 🛒 ESCENARIO CARRUSEL INTERACTIVO */}
        <div className="relative max-w-3xl mx-auto min-h-[320px] flex items-center justify-center">
          <div className="w-full flex items-center justify-center relative">

            {/* Botón Flecha Izquierda */}
            <button
              onClick={prevCard}
              className="absolute left-2 md:-left-12 z-40 p-3 rounded-xl bg-white dark:bg-[#130526] border border-slate-200 dark:border-[#381161]/60 text-slate-700 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-500 shadow-md transition-all duration-300 hover:-translate-x-0.5 select-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Contenedor 3D de las cartas */}
            <div
              className="relative w-full max-w-[420px] h-[260px] flex items-center justify-center"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              {certificatesList.map((cert, index) => (
                <div
                  key={cert.id}
                  style={getCardStyles(index)}
                  onClick={() => openLightbox(cert.image)}
                  className="absolute w-full h-full bg-slate-100 dark:bg-[#130526] rounded-2xl border border-slate-200/80 dark:border-[#381161]/60 overflow-hidden transition-all duration-500 ease-out shadow-lg cursor-zoom-in group"
                >
                  <img
                    src={cert.image}
                    alt={t(cert.titleKey)}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Leyenda inferior con degradado */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 pt-8 transition-opacity duration-300 flex items-end">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                      <p className="text-[11px] font-bold text-white font-sans line-clamp-1">
                        {t(cert.titleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Flecha Derecha */}
            <button
              onClick={nextCard}
              className="absolute right-2 md:-right-12 z-40 p-3 rounded-xl bg-white dark:bg-[#130526] border border-slate-200 dark:border-[#381161]/60 text-slate-700 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-500 shadow-md transition-all duration-300 hover:translate-x-0.5 select-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicador de puntitos (Paginación inferior) */}
        <div className="flex justify-center space-x-2 mt-12">
          {certificatesList.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 bg-purple-500' : 'w-1.5 bg-slate-300 dark:bg-[#381161]/40'}`}
            />
          ))}
        </div>

        {/* 🔢 CONTADOR DE PROGRESO DINÁMICO */}
        <div className="flex justify-center mt-6">
          <div className="text-xs font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-50 dark:bg-[#1f0a3a]/40 px-4 py-1.5 rounded-full border border-purple-200/40 dark:border-[#381161]/40 shadow-sm">
            {t('certifications.counterText')} {currentIndex + 1} / {totalCertificates}
          </div>
        </div>

      </div>

      {/* 🔮 LIGHTBOX MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-4xl font-sans transition-colors z-50"
          >
            &times;
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Certificado Ampliado"
              className="w-full h-full object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}