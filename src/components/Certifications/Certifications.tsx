import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DomeGallery } from './DomeGallery';

// 📸 Tus 10 capturas reales guardadas en assets
import agile from '../../assets/certs/agile.jpg';
import robot_sel from '../../assets/certs/robot_selenium.jpg';
import alm_vida from '../../assets/certs/alm_vida.jpg';
import bootcamp_chatgpt from '../../assets/certs/bootcamp_gpt.jpg';
import ciclo_vida from '../../assets/certs/ciclo_vida.jpg';
import diseno_bd from '../../assets/certs/diseño_bd.jpg';
import diseno_pruebas from '../../assets/certs/diseño_pruebas.jpg';
import ejec_pruebas from '../../assets/certs/ejecucion_pruebas.jpg';
import ambiental from '../../assets/certs/gestion_ambiental.jpg';
import gest_procesos from '../../assets/certs/gestion_procesos.jpg';

export function Certifications(): React.JSX.Element {
  const { t } = useLanguage();

  const certificationsImages = [
    agile,
    robot_sel,
    alm_vida,
    bootcamp_chatgpt,
    ciclo_vida,
    diseno_bd,
    diseno_pruebas,
    ejec_pruebas,
    ambiental,
    gest_procesos
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 font-mono">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* Contenedor del Canvas CSS 3D */}
        <div className="w-full h-[500px] mt-4 relative">
          <DomeGallery images={certificationsImages} />
        </div>

      </div>
    </section>
  );
}