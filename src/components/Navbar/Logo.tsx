import React from 'react';

export function Logo(): React.JSX.Element {
    return (
        <div className="flex items-center gap-2 group cursor-pointer select-none font-mono">
            {/* Icono del Logo en SVG con tus colores acento */}
            <svg
                className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ecz-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#e000ff" />
                    </linearGradient>
                </defs>

                <rect
                    x="6"
                    y="6"
                    width="88"
                    height="88"
                    rx="20"
                    className="stroke-slate-200 dark:stroke-[#381161]/60"
                    strokeWidth="6"
                    fill="none"
                />

                <path
                    d="M38 35H24V65H38M38 50H28"
                    stroke="url(#ecz-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M60 35H46V65H60"
                    stroke="url(#ecz-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M68 35H78L68 65H78"
                    stroke="url(#ecz-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wider text-slate-900 dark:text-white transition-colors duration-300">
                    Esperanza<span className="text-accent">Cuenca</span>
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 tracking-tight font-sans">
                    Software & QA
                </span>
            </div>
        </div>
    );
}