import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
// 📸 Importamos tu foto de perfil real y el nuevo componente manual
import profileImg from '../../assets/profile_3.png';
import ElectricBorder from '../About/ElectricBorder'; // Ajusta la ruta si lo guardaste en otra carpeta

export function About(): React.JSX.Element {
    const { t } = useLanguage();

    const skills = [
        { name: "HTML5 / CSS", color: "#E34F26" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "PHP", color: "#777BB4" },
        { name: "React", color: "#61DAFB" },
        { name: "Java", color: "#ED8B00" },
        { name: "SQL", color: "#00758F" },
        { name: "Git & GitHub", color: "#F05032" },
        { name: "RobotFramework", color: "#00C853" },
        { name: "Selenium", color: "#43B02A" },
        { name: "ALM", color: "#0073E6" }
    ];



    return (
        <section id="about" className="py-24 bg-[#fcfaff] dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-500 ease-in-out">
            <div className="max-w-6xl mx-auto px-6 font-mono">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('about.title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('about.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* 📸 COLUMNA IZQUIERDA: Foto de perfil REDONDA adaptativa con rayos eléctricos */}
                    <div className="flex justify-center">
                        <div className="w-72 h-72 relative group">
                            <ElectricBorder
                                color="#e000ff"       // Tu color morado/magenta eléctrico
                                speed={0.7}           // Velocidad del rayo
                                chaos={0.07}          // Distorsión baja
                                borderRadius={144}    // Círculo perfecto para el Canvas
                            >
                                {/* 🌟 CAMBIO AQUÍ: El fondo de la caja ahora pasa de lavanda claro (bg-[#f5f0ff]) a morado oscuro (dark:bg-[#130526]) */}
                                <div className="w-full h-full overflow-hidden rounded-full bg-[#f5f0ff] dark:bg-[#130526] relative transition-colors duration-500">

                                    {/* 🌟 CAMBIO AQUÍ: La capa de contraste ahora es más sutil en modo claro (bg-slate-900/5) y normal en modo oscuro (dark:bg-slate-900/20) */}
                                    <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />

                                    <img
                                        src={profileImg}
                                        alt="Esperanza Cuenca"
                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105 relative z-0"
                                    />
                                </div>
                            </ElectricBorder>
                        </div>
                    </div>

                    {/* 📝 COLUMNA DERECHA: Textos y habilidades interactivas */}
                    <div className="space-y-6">
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{t('about.p1')}</p>
                        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{t('about.p2')}</p>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t('about.skillsTitle')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        style={{ '--hover-color': skill.color } as React.CSSProperties}
                                        className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#130526] text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-lg border border-slate-200/50 dark:border-[#381161]/60 transition-all duration-300 cursor-default select-none
                                                   hover:-translate-y-0.5 hover:text-[var(--hover-color)] hover:border-[var(--hover-color)] 
                                                   hover:shadow-[0_0_15px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_0_20px_var(--hover-color)] dark:hover:bg-[#1f0a3a]/30"
                                    >
                                        {skill.name}
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