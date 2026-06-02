import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { StarryBackground } from './StarryBackground';


export function Hero(): React.JSX.Element {
    const { t, lang } = useLanguage();
    const { isDark } = useTheme();

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);

    useEffect(() => {
        const phrases = lang === 'es'
            ? [
                "Desarrolladora Multiplataforma",
                "Especialista en QA y Testing",
                "Código Robusto y Automatizado",
                "Apasionada por la calidad"
            ]
            : [
                "Multiplatform Developer",
                "QA & Testing Specialist",
                "Robust & Automated Code",
                "Quality Software Enthusiast"
            ];

        const handleType = () => {
            let i = loopNum % phrases.length;
            let fullText = phrases[i];
            let updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(60);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(prev => prev + 1);
                setDelta(150);
            }
        };

        const timer = setTimeout(() => {
            handleType();
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, delta, loopNum, lang]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#faf5ff] dark:bg-[#0c021a] px-6 overflow-hidden transition-colors duration-500 ease-in-out">
            <StarryBackground isDark={isDark} />

            <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 font-mono">
                <span className="inline-flex items-center space-x-2 bg-indigo-50/80 dark:bg-[#1f093a]/50 text-accent border border-indigo-100 dark:border-[#381161]/50 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>{t('hero.tag')}</span>
                </span>

                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
                    {t('hero.welcome')} <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                </h1>

                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-4">
                    <span >
                        {lang === 'es' ? 'Soy ' : "I'm "}
                    </span>

                    <span className="text-accent bg-clip-text drop-shadow-[0_2px_15px_rgba(79,70,229,0.3)] dark:drop-shadow-[0_2px_15px_rgba(224,0,255,0.3)] tracking-wide uppercase">
                        ESPERANZA
                    </span>
                </h2>

                <div className="h-16 flex items-center justify-center mb-8">
                    <span className="text-xl md:text-4xl font-bold text-accent typing-cursor pb-1 min-h-[40px] drop-shadow-[0_0_10px_rgba(79,70,229,0.4)] dark:drop-shadow-[0_0_10px_rgba(224,0,255,0.4)]">
                        {text}
                    </span>
                </div>

                <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-center">
                        {t('hero.ctaProjects')}
                    </a>
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#130526] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#381161] font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-[#1d0a36] transition-all transform hover:-translate-y-0.5 text-center">
                        {t('hero.ctaContact')}
                    </a>
                </div>

                <div className="mt-8 flex justify-center">
                    <a
                        href="/CV_Esperanza_Cuenca_Zambrana.pdf"
                        download="CV_Esperanza_Cuenca_Zambrana.pdf"
                        className="inline-flex items-center space-x-2 px-6 py-3 border border-slate-300 dark:border-[#381161] rounded-xl hover:border-accent text-slate-700 dark:text-slate-300 hover:text-accent font-medium transition-all transform hover:-translate-y-0.5 text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t('hero.ctaCv')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}