import React from 'react';
// Importamos los hooks desde la carpeta de contextos globales
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from './Logo';

// Añadimos 'export' para que App.tsx pueda reconocer el componente
export function Navbar(): React.JSX.Element {
    const { lang, setLang, t } = useLanguage();
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0c021a]/85 backdrop-blur-md border-b border-slate-200 dark:border-[#22074d] transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center font-mono">

                <a href="#hero" className="flex items-center transform scale-110 origin-left transition-transform duration-300">
                    <Logo />
                </a>

                <ul className="hidden md:flex space-x-10 text-base font-semibold text-slate-600 dark:text-slate-300">
                    <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
                    <li><a href="#projects" className="hover:text-accent transition-colors">{t('nav.projects')}</a></li>
                    <li><a href="#certifications" className="hover:text-accent transition-colors">{t('nav.certifications')}</a></li>
                    <li><a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a></li>
                    <li><a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
                </ul>

                {/* 🛠️ Contenedor de herramientas de la derecha: aumentamos el espacio entre botones (space-x-5) */}
                <div className="flex items-center space-x-5">
                    <button
                        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#381161] text-sm font-bold hover:border-accent transition-all text-slate-800 dark:text-slate-200"
                    >
                        <span className="text-base">🌐</span> <span>{lang.toUpperCase()}</span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-[#381161] hover:border-accent text-slate-700 dark:text-slate-300 transition-all transform hover:scale-105"
                        title={isDark ? "Modo Claro" : "Modo Oscuro"}
                    >
                        {isDark ? (
                            <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}