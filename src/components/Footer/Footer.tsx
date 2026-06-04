import React from "react";
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext'; // 💡 1. Importamos tu gestor de tema

import imgGithub from "../../assets/github.png";
import imgLinkedin from "../../assets/linkedin.png";
import imgCorreo from "../../assets/correo.png";

export function Footer(): React.JSX.Element {
    const { t } = useLanguage();
    const { isDark } = useTheme(); // 💡 2. Extraemos si está el modo oscuro activo
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#fcfaff] dark:bg-[#0c021a] border-t border-slate-200 dark:border-[#1c0836] py-12 transition-colors duration-500 ease-in-out">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6 font-mono text-center md:text-left">

                {/* Columna Izquierda: Logo o Espacio Reservado */}
                <div className="flex justify-center md:justify-start">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                    </span>
                </div>

                {/* Columna Central: Copyright */}
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                        &copy; {year} Esperanza Cuenca Zambrana
                    </p>
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {t('footer.rights')}
                    </p>
                </div>

                {/* Columna Derecha: Iconos de redes sociales */}
                <div className="flex items-center justify-center md:justify-end space-x-6">
                    {/* GitHub */}
                    <a href="https://github.com/EspeCuenca" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                        <img src={imgGithub} alt="GitHub" className="w-6 h-6 object-contain filter dark:invert" />
                    </a>

                    {/* LinkedIn 💡 3. CORREGIDO: Si es modo oscuro se queda original (blanco/azul), si es modo claro se invierte a negro para que no desaparezca */}
                    <a href="https://www.linkedin.com/in/esperanza-cuenca-zambrana-28568a189" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                        <img
                            src={imgLinkedin}
                            alt="LinkedIn"
                            className={`w-6 h-6 object-contain transition-all duration-300 ${!isDark ? 'filter invert' : ''}`}
                        />
                    </a>

                    {/* Correo Electrónico */}
                    <a href="mailto:especuenca103@gmail.com" className="hover:scale-110 transition-transform duration-200">
                        <img src={imgCorreo} alt="Email" className="w-6 h-6 object-contain filter dark:invert" />
                    </a>
                </div>

            </div>
        </footer>
    );
}