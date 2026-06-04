import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function Experience(): React.JSX.Element {
    const { t } = useLanguage();

    const timeline = [
        {
            date: t('experience.date'),
            title: t('experience.job1Title'),
            company: t('experience.job1Company'),
            desc: t('experience.job1Desc')
        },
        {
            date: t('experience.date2'),
            title: t('experience.job2Title'),
            company: t('experience.job2Company'),
            desc: t('experience.job2Desc')
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-[#130526] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 font-mono">

                {/* Cabecera */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('experience.title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('experience.subtitle')}</p>
                </div>

                {/* Línea de tiempo vertical */}
                <div className="relative border-l-2 border-slate-200 dark:border-[#381161] pl-8 space-y-12">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0c021a] border-4 border-accent" />
                            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.date}</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{item.company}</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-sans">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 🌐 Bloque de Idiomas y Certificaciones de Cambridge (Versión PDF) */}
                <div className="mt-16 pt-10 border-t border-slate-200/60 dark:border-[#381161]/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4">
                        {t('experience.certificationsTitle')}
                    </h4>

                    <div className="bg-white dark:bg-[#0c021a] p-6 rounded-2xl border border-slate-200/60 dark:border-[#381161]/50 shadow-sm transition-all duration-300 max-w-2xl">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                            <h5 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                                {t('experience.cambridgeB1Title')}
                            </h5>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-200/30">
                                Certified
                            </span>
                        </div>

                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 font-sans">
                            {t('experience.cambridgeB1Desc')}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                            {/* Indicador de progreso dinámico B2 */}
                            <div className="flex items-center space-x-2 text-xs text-purple-600 dark:text-purple-400 font-bold animate-pulse">
                                <span className="text-sm">⚡</span>
                                <span>{t('experience.cambridgeB2Progress')}</span>
                            </div>

                            {/* Enlace directo para abrir el PDF en una pestaña nueva */}
                            <a
                                href="/certificado-cambridge-b1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg text-xs font-bold bg-slate-50 dark:bg-[#1f0a3a]/40 border border-slate-200 dark:border-[#381161]/60 text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white hover:border-purple-600 dark:hover:border-purple-600 transition-all duration-300 shadow-sm text-center"
                            >
                                <span>{t('experience.viewCertificateBtn')}</span>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}