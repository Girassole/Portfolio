import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import profileImg from '../../assets/profile_3.png';

export function About(): React.JSX.Element {
    const { t } = useLanguage();
    const skills = [
        "HTML5 / CSS", "JavaScript", "Tailwind CSS", "PHP",
        "React", "Java", "SQL", "Git & GitHub", "RobotFramework", "Selenium", "ALM"
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 font-mono">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('about.title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('about.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 rounded-2xl shadow-2xl overflow-hidden group">

                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />

                            <img
                                src={profileImg}
                                alt="Esperanza Cuenca"
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{t('about.p1')}</p>
                        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{t('about.p2')}</p>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('about.skillsTitle')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#130526] text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-lg border border-slate-200/50 dark:border-[#381161]/60 hover:border-accent transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}