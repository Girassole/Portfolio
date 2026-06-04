import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'en';

interface TranslationSchema {
    nav: { about: string; projects: string; certifications: string; experience: string; contact: string };
    hero: { tag: string; welcome: string; role: string; description: string; ctaProjects: string; ctaContact: string; ctaCv: string };
    about: { title: string; subtitle: string; p1: string; p2: string; skillsTitle: string };
    projects: {
        title: string;
        subtitle: string;
        codeBtn: string;
        demoBtn: string;
        tourDesc: string;
        petsDesc: string;
        expandVideo: string;
        featuresTitle: string;
        stackTitle: string;
        hundredWays: {
            title: string;
            intro: string;
            feat1Title: string;
            feat1Desc: string;
            feat2Title: string;
            feat2Desc: string;
            feat3Title: string;
            feat3Desc: string;
            feat4Title: string;
            feat4Desc: string;
            feat5Title: string;
            feat5Desc: string;
        }
    };
    certifications: {
        title: string;
        subtitle: string;
        viewBtn: string;
        cert1: string;
        cert2: string;
        cert3: string;
        counterText: string;
        certTitles: {
            agile: string;
            bootcamp: string;
            python: string;
            jenkins: string;
            selenium: string;
            xpath: string;
        }
    };
    experience: {
        title: string;
        subtitle: string;
        date: string;
        job1Title: string;
        job1Company: string;
        job1Desc: string;
        date2: string;
        job2Title: string;
        job2Company: string;
        job2Desc: string;
        certificationsTitle: string;
        cambridgeB1Title: string;
        cambridgeB1Desc: string;
        cambridgeB2Progress: string;
        viewCertificateBtn: string;
    };
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
            p1: "¡Hola! Soy Esperanza Cuenca. Tras graduarme en Criminología, decidí dar un giro de 180 grados a mi carrera para fusionar la analítica y la investigación con el Desarrollo de Aplicaciones Multiplataforma (DAM). Mi objetivo es claro: encontrar el punto exacto donde el software ayuda a crear un entorno digital más seguro, organized y eficiente.",
            p2: "Me especializo en crear aplicaciones robustas e integrar el desarrollo con el mundo del QA y el testing automatizado. Me define una curiosidad insaciable, una fuerte ética de trabajo y una habilidad natural para resolver problemas complejos hasta encontrar la solución más lógica y segura, garantizando siempre la máxima calidad en el código.",
            skillsTitle: "Mi Caja de Herramientas"
        },
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Demostraciones técnicas de aplicaciones completas y control de calidad.",
            codeBtn: "Explorar Código en GitHub",
            demoBtn: "Demo En Vivo",
            expandVideo: "🔍 Expandir Vídeo Demo",
            featuresTitle: "🚀 Características Clave y Funcionalidades",
            stackTitle: "🛠️ Stack Tecnológico & Persistencia",
            tourDesc: "Plataforma interactiva para agencias de viajes (Mundo Tour) con filtros de reservas dinámicos, maquetación personalizada y arquitectura en Laravel.",
            petsDesc: "Sistema CRUD integral (Refugio Patitas Peludas) para la gestión de adopciones y control de animales, desarrollado con JavaFX y bases de datos relacionales.",
            hundredWays: {
                title: "100 Maneras de Morir Web App",
                intro: "¡Bienvenido/a al proyecto más oscuro y divertido de mi porfolio! Esta aplicación combina humor negro, interactividad y una sólida arquitectura de desarrollo para ofrecer una experiencia dinámica mientras se gestionan datos en tiempo real y se consumen servicios externos.",
                feat1Title: "🔐 Sistema de Autenticación",
                feat1Desc: "Gestión segura de usuarios (CRUD de dos capas) desde el login, permitiendo el registro e inicio de sesión seguro.",
                feat2Title: "🔌 Integración de API (Armas)",
                feat2Desc: "Conexión con una API externa del famoso videojuego Elden Ring.",
                feat3Title: "💀 El Test de la Muerte",
                feat3Desc: "Cuestionario interactivo con lógica personalizada que calcula, con un toque irreverente, cuál sería tu absurdo destino final.",
                feat4Title: "🗳️ Votación en Tiempo Real",
                feat4Desc: "Sección interactiva donde los usuarios exploran el catálogo de muertes y votan por sus favoritas.",
                feat5Title: "📊 Ranking Global",
                feat5Desc: "Panel de clasificación dinámico que muestra las muertes más votadas por la comunidad de forma visual y ordenada."
            }
        },
        certifications: {
            title: "Certificaciones Especializadas",
            subtitle: "Explora mis títulos y especializaciones de Udemy de forma interactiva.",
            viewBtn: "Ver Credencial",
            cert1: "Desarrollo de Aplicaciones Web (DAW)",
            cert2: "Especialización en React & TypeScript",
            cert3: "Arquitectura backend robusta con Spring Boot",
            counterText: "Certificado",
            certTitles: {
                agile: "Agile + Scrum: Curso intensivo para sumergirse y profundizar",
                bootcamp: "Bootcamp de ChatGPT y Prompt Engineering: de cero a experto",
                python: "Python for Absolute Beginners",
                jenkins: "Robot Framework - Jenkins CI & Git Version Control",
                selenium: "Robot Framework with Python - Selenium/API Automation Testing",
                xpath: "Master XPath and CSS Selectors for Selenium WebDriver"
            }
        },
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
            job2Desc: "Diseño de bases de datos relacionales, programación orientada a objetos en Java y creación de aplicaciones completas (Full-Stack).",
            certificationsTitle: "Idiomas y Certificaciones Oficiales",
            cambridgeB1Title: "B1 Preliminary (PET) — Cambridge English",
            cambridgeB1Desc: "Certificación oficial que acredita un nivel de competencia intermedio en inglés, capacitado para entornos profesionales y comprensión de documentación técnica.",
            cambridgeB2Progress: "En progreso: Preparación para la certificación B2 First (FCE)",
            viewCertificateBtn: "👁️ Ver Título Oficial"
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
            subtitle: "Technical demonstrations of complete applications and quality control.",
            codeBtn: "Explore Code on GitHub",
            demoBtn: "Live Demo",
            expandVideo: "🔍 Expand Demo Video",
            featuresTitle: "🚀 Key Features and Functionalities",
            stackTitle: "🛠️ Technology Stack & Persistence",
            tourDesc: "Interactive travel agency platform (Mundo Tour) featuring dynamic booking filters, custom layouts, and built on Laravel architecture.",
            petsDesc: "Comprehensive CRUD system (Patitas Peludas Shelter) for managing animal adoptions and shelter data, developed with JavaFX and relational databases.",
            hundredWays: {
                title: "100 Ways to Die Web App",
                intro: "Welcome to the darkest and funniest project in my portfolio! This application combines dark humor, interactivity, and a robust development architecture to deliver a dynamic user experience while managing real-time data and consuming external services.",
                feat1Title: "🔐 Authentication System",
                feat1Desc: "Secure user management (two-layer CRUD) from the login stage, allowing safe registration and sign-in processes.",
                feat2Title: "🔌 API Integration (Weapons)",
                feat2Desc: "Connection and integration with an external API from the famous video game Elden Ring.",
                feat3Title: "💀 The Humanistic Death Test",
                feat3Desc: "Interactive questionnaire built with custom logic that calculates, with an irreverent touch, what your absurd ultimate fate would be.",
                feat4Title: "🗳️ Real-Time Voting",
                feat4Desc: "An interactive section where users can browse the death catalog and vote for their favorite choices.",
                feat5Title: "📊 Global Ranking",
                feat5Desc: "A dynamic leaderboard that displays the most voted deaths by the community in an organized and visual manner."
            }
        },
        certifications: {
            title: "Specialized Certifications",
            subtitle: "Explore my titles and specializations from Udemy in an interactive way.",
            viewBtn: "View Credential",
            cert1: "Web Applications Development (DAW)",
            cert2: "React & TypeScript Specialization",
            cert3: "Robust Backend Architecture with Spring Boot",
            counterText: "Certificate",
            certTitles: {
                agile: "Agile + Scrum: Intensive course to immerse and go deeper",
                bootcamp: "ChatGPT Bootcamp and Prompt Engineering: from zero to expert",
                python: "Python for Absolute Beginners",
                jenkins: "Robot Framework - Jenkins CI & Git Version Control",
                selenium: "Robot Framework with Python - Selenium/API Automation Testing",
                xpath: "Master XPath and CSS Selectors for Selenium WebDriver"
            }
        },
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
            job2Desc: "Relational database design, object-oriented programming in Java, and end-to-end development of full-stack applications using clean architectures.",
            certificationsTitle: "Languages & Official Certifications",
            cambridgeB1Title: "B1 Preliminary (PET) — Cambridge English",
            cambridgeB1Desc: "Official certification accrediting an intermediate level of English proficiency, qualified for professional environments and technical documentation comprehension.",
            cambridgeB2Progress: "In progress: Preparing for the B2 First (FCE) certification",
            viewCertificateBtn: "👁️ View Official Certificate"
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