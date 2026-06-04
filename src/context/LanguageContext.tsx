import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'en';

interface TranslationSchema {
    nav: { about: string; projects: string; certifications: string; experience: string; contact: string };
    hero: { tag: string; welcome: string; role: string; description: string; ctaProjects: string; ctaContact: string; ctaCv: string };
    about: { title: string; subtitle: string; p1: string; p2: string; skillsTitle: string };
    projects: { title: string; subtitle: string; codeBtn: string; demoBtn: string; tourDesc: string; petsDesc: string };
    certifications: { title: string; subtitle: string; viewBtn: string; cert1: string; cert2: string; cert3: string };
    experience: { title: string; subtitle: string; date: string, job1Title: string; job1Company: string; job1Desc: string; date2: string, job2Title: string; job2Company: string; job2Desc: string };
    contact: { title: string; subtitle: string; infoTitle: string; infoSubtitle: string; location: string; labelName: string; labelEmail: string; labelMsg: string; namePlaceholder: string; emailPlaceholder: string; msgPlaceholder: string; btnSend: string; btnSending: string; success: string };
    footer: { rights: string };
}

const translations: Record<Language, TranslationSchema> = {
    es: {
        nav: { about: "Sobre mí", projects: "Proyectos", certifications: "Certificados", experience: "Experiencia", contact: "Contacto" },
        hero: {
            tag: "DISPONIBLE PARA NUEVAS OPORTUNIDADES",
            welcome: "¡Hola!",
            role: "Desarrolladora Multiplataforma & QA Automation",
            description: "Diseño y programo soluciones de software robustas para escritorio, móvil y web. Me apasiona unir la lógica del desarrollo multiplataforma con el rigor del testing para asegurar un código impecable.",
            ctaProjects: "Ver proyectos",
            ctaContact: "Hablemos",
            ctaCv: "Descargar CV"
        },
        about: {
            title: "Sobre mí",
            subtitle: "Quién soy y las herramientas que utilizo en mi día a día.",
            p1: "¡Hola! Soy Esperanza Cuenca. Tras graduarme en Criminología, decidí dar un giro de 180 grados a mi carrera para fusionar la analítica y la investigación con el Desarrollo de Aplicaciones Multiplataforma (DAM). Mi objetivo es claro: encontrar el punto exacto donde el software ayuda a crear un entorno digital más seguro, organizado y eficiente.",
            p2: "Me especializo en crear aplicaciones robustas e integrar el desarrollo con el mundo del QA y el testing automatizado. Me define una curiosidad insaciable, una fuerte ética de trabajo y una habilidad natural para resolver problemas complejos hasta encontrar la solución más lógica y segura, garantizando siempre la máxima calidad en el código.",
            skillsTitle: "Mi Caja de Herramientas"
        },
        projects: {
            title: "Mis Proyectos",
            subtitle: "Una muestra seleccionada de las soluciones de software reales que he construido.",
            codeBtn: "Código",
            demoBtn: "Demo En Vivo",
            tourDesc: "Plataforma interactiva para agencias de viajes (Mundo Tour) con filtros de reservas dinámicos, maquetación personalizada y arquitectura en Laravel.",
            petsDesc: "Sistema CRUD integral (Refugio Patitas Peludas) para la gestión de adopciones y control de animales, desarrollado con JavaFX y bases de datos relacionales."
        },
        certifications: { title: "Mis Certificaciones", subtitle: "Títulos académicos y cursos de especialización tecnológica que he completado.", viewBtn: "Ver Credencial", cert1: "Desarrollo de Aplicaciones Web (DAW)", cert2: "Especialización en React & TypeScript", cert3: "Arquitectura backend robusta con Spring Boot" },
        experience: {
            title: "Experiencia y Formación",
            subtitle: "Mi trayectoria profesional y académica en el mundo tecnológico",
            date: "Marzo - Junio 2026",
            job1Title: "Quality Engineering (Prácticas)",
            job1Company: "Viewnext",
            job1Desc: "Diseño y ejecución de planes de prueba automatizados utilizando Robot Framework y Selenium. Implementación del patrón Page Object Model (POM) y optimización de selectores XPath para la validación de portales web y flujos de datos complejos en entornos empresariales.",
            date2: "2025 - Actualidad",
            job2Title: "Desarrollo de Aplicaciones Multiplataforma",
            job2Company: "Formación y Proyectos Académicos",
            job2Desc: "Diseño de bases de datos relacionales, programación orientada a objetos en Java y creación de aplicaciones completas (Full-Stack)."
        },
        contact: { title: "Contacto", subtitle: "¿Tienes una propuesta o idea de proyecto? Hablemos y hagámosla realidad.", infoTitle: "Información de contacto", infoSubtitle: "Disponible para nuevos desafíos. ¡Envíame un mensaje!", location: "Málaga, España", labelName: "Nombre", labelEmail: "Correo electrónico", labelMsg: "Tu mensaje", namePlaceholder: "Tu nombre aquí...", emailPlaceholder: "nombre@correo.com", msgPlaceholder: "Escribe tu mensaje...", btnSend: "Enviar Mensaje", btnSending: "Enviando...", success: "¡Mensaje enviado con éxito! Nos comunicaremos pronto." },
        footer: { rights: "Todos los derechos reservados." }
    },
    en: {
        nav: { about: "About me", projects: "Projects", certifications: "Certifications", experience: "Experience", contact: "Contact" },
        hero: {
            tag: "AVAILABLE FOR WORK OPPORTUNITIES",
            welcome: "Hi There!",
            role: "Multiplatform & QA Automation Developer",
            description: "I design and program robust software solutions for desktop, mobile, and web. I am passionate about blending multiplatform development logic with rigorous testing to ensure flawless code.",
            ctaProjects: "View projects",
            ctaContact: "Let's Talk",
            ctaCv: "Download CV"
        },
        about: {
            title: "About me",
            subtitle: "Who I am and the tools I use in my daily workflow.",
            p1: "Hi! I'm Esperanza Cuenca. After graduating with a degree in Criminology, I decided to make a 180-degree career pivot to merge analytics and investigation with Multiplatform Application Development (DAM). My goal is clear: to find the exact intersection where software helps build a safer, more organized, and highly efficient digital environment.",
            p2: "I specialize in building robust applications and bridging development with QA and automated testing. Driven by relentless curiosity, a strong work ethic, and a natural ability to troubleshoot complex challenges, I always strive for the most logical and secure solutions while ensuring top-tier code quality.",
            skillsTitle: "My Toolbox"
        },
        projects: {
            title: "Featured Projects",
            subtitle: "A curated selection of real-world software solutions I have built.",
            codeBtn: "Code",
            demoBtn: "Live Demo",
            tourDesc: "Interactive travel agency platform (Mundo Tour) featuring dynamic booking filters, custom layouts, and built on Laravel architecture.",
            petsDesc: "Comprehensive CRUD system (Patitas Peludas Shelter) for managing animal adoptions and shelter data, developed with JavaFX and relational databases."
        },
        certifications: { title: "My Certifications", subtitle: "Academic degrees and specialized technological training I have successfully completed.", viewBtn: "View Credential", cert1: "Web Applications Development (DAW)", cert2: "React & TypeScript Specialization", cert3: "Robust Backend Architecture with Spring Boot" },
        experience: {
            title: "Experience & Education",
            subtitle: "My career trajectory and educational steps in the tech industry.",
            date: "March - June 2026",
            job1Title: "Quality Engineering (Internship)",
            job1Company: "Viewnext",
            job1Desc: "Design and execution of automated test suites utilizing Robot Framework and Selenium. Implementation of the Page Object Model (POM) pattern and optimization of XPath selectors for web portal validation and complex data flows in enterprise environments.",
            date2: "2025 - present",
            job2Title: "Multiplatform Applications Development",
            job2Company: "Training and Academic Projects",
            job2Desc: "Relational database design, object-oriented programming in Java, and end-to-end development of full-stack applications using clean architectures."
        },
        contact: { title: "Contact Me", subtitle: "Do you have a project idea or a proposal? Let's connect and make it happen.", infoTitle: "Contact Information", infoSubtitle: "Always open to new challenges. Send me a message!", location: "Malaga, Spain", labelName: "Name", labelEmail: "Email address", labelMsg: "Your message", namePlaceholder: "Your name here...", emailPlaceholder: "name@example.com", msgPlaceholder: "Type your message here...", btnSend: "Send Message", btnSending: "Sending...", success: "Message sent successfully! Talk to you soon." },
        footer: { rights: "All rights reserved." }
    }
};

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('es');

    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = translations[lang];
        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            } else {
                return path;
            }
        }
        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};