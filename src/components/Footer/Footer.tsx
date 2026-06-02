
import React from "react";
import { useLanguage } from '../../context/LanguageContext';


export function Footer(): React.JSX.Element {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#faf5ff] dark:bg-[#130526] border-t border-slate-200 dark:border-[#1c0836] py-12 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6 font-mono text-center md:text-left">

                {/* Columna Izquierda: Logo */}
                <div className="flex justify-center md:justify-start">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">

                    </span>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                        &copy; {year} Esperanza Cuenca Zambrana
                    </p>
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {t('footer.rights')}
                    </p>
                </div>

                <div className="flex items-center justify-center md:justify-end space-x-6">
                    <a href="https://github.com/Girassole" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                        <img src="/src/assets/github.png" alt="GitHub" className="w-6 h-6 object-contain filter dark:invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/esperanza-cuenca-zambrana-28568a189" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
                        <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                    </a>
                    <a href="mailto:especuenca103@gmail.com" className="hover:scale-110 transition-transform duration-200">
                        <img src="/src/assets/correo.png" alt="Email" className="w-6 h-6 object-contain filter dark:invert" />
                    </a>
                </div>

            </div>
        </footer>
    );
}
