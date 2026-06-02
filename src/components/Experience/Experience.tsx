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
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('experience.title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('experience.subtitle')}</p>
                </div>

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
            </div>
        </section>
    );
}