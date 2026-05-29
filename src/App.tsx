import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

interface TranslationSchema {
  nav: { about: string; projects: string; certifications: string; experience: string; contact: string };
  hero: { tag: string; welcome: string; role: string; description: string; ctaProjects: string; ctaContact: string; ctaCv: string };
  about: { title: string; subtitle: string; p1: string; p2: string; skillsTitle: string };
  projects: { title: string; subtitle: string; codeBtn: string; demoBtn: string; tourDesc: string; petsDesc: string };
  certifications: { title: string; subtitle: string; viewBtn: string; cert1: string; cert2: string; cert3: string };
  experience: { title: string; subtitle: string; job1Title: string; job1Company: string; job1Desc: string; job2Title: string; job2Company: string; job2Desc: string };
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
      title: "Experiencia & Formación",
      subtitle: "Mi trayectoria profesional y académica en el mundo tecnológico.",
      job1Title: "QA Automation (Prácticas)",
      job1Company: "Viewnext",
      job1Desc: "Formación e implementación de planes de prueba y automatización de software utilizando Robot Framework y Selenium para garantizar la calidad en entornos empresariales.",
      job2Title: "Desarrollo de Aplicaciones Multiplataforma",
      job2Company: "Formación y Proyectos Académicos",
      job2Desc: "Diseño de bases de datos relacionales, programación orientada a objetos en Java y creación de sistemas de escritorio y web robustos utilizando arquitecturas limpias."
    },
    contact: { title: "Contacto", subtitle: "¿Tienes una propuesta o idea de proyecto? Hablemos y hagámosla realidad.", infoTitle: "Información de contacto", infoSubtitle: "Siempre atenta a nuevos desafíos. ¡Envíame un mensaje!", location: "Málaga, España", labelName: "Nombre", labelEmail: "Correo electrónico", labelMsg: "Tu mensaje", namePlaceholder: "Tu nombre aquí...", emailPlaceholder: "nombre@correo.com", msgPlaceholder: "Escribe tu mensaje...", btnSend: "Enviar Mensaje", btnSending: "Enviando...", success: "¡Mensaje enviado con éxito! Nos comunicaremos pronto." },
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
      job1Title: "QA Automation (Internship)",
      job1Company: "Viewnext",
      job1Desc: "Training and deployment of test cases and software automation scripts utilizing Robot Framework and Selenium to ensure corporate software quality.",
      job2Title: "Multiplatform Applications Development",
      job2Company: "Training and Academic Projects",
      job2Desc: "Relational database design, Java object-oriented programming, and construction of robust desktop and web systems using clean architectures."
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

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

class Particle {
  x!: number;
  y!: number;
  size!: number;
  speedX!: number;
  speedY!: number;
  alpha!: number;
  alphaSpeed!: number;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.reset();
  }

  reset(): void {
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.6 + 0.2;
    this.alphaSpeed = Math.random() * 0.008 + 0.002;
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha += this.alphaSpeed;

    if (this.alpha > 0.85 || this.alpha < 0.15) {
      this.alphaSpeed = -this.alphaSpeed;
    }

    if (this.x < 0 || this.x > this.width || this.y < 0 || this.y > this.height) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean): void {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = isDark ? '#e000ff' : '#4f46e5';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  updateDimensions(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }
}

function StarryBackground({ isDark }: { isDark: boolean }): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starsCount = isDark ? 100 : 50;
    const particles: Particle[] = [];

    for (let i = 0; i < starsCount; i++) {
      particles.push(new Particle(width, height));
    }

    const animate = (): void => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx, isDark);
      });
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = (): void => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.forEach(p => p.updateDimensions(width, height));
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none transition-opacity duration-500"
    />
  );
}

function Navbar(): React.JSX.Element {
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0c021a]/85 backdrop-blur-md border-b border-slate-200 dark:border-[#22074d] transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-mono">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">
          🚀 Espe<span className="text-accent">.dev</span>
        </a>

        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">{t('nav.projects')}</a></li>
          <li><a href="#certifications" className="hover:text-accent transition-colors">{t('nav.certifications')}</a></li>
          <li><a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#381161] text-xs font-semibold hover:border-accent transition-all text-slate-800 dark:text-slate-200"
          >
            <span className="text-sm">🌐</span> <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-[#381161] hover:border-accent text-slate-700 dark:text-slate-300 transition-all"
            title={isDark ? "Modo Claro" : "Modo Oscuro"}
          >
            {isDark ? (
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero(): React.JSX.Element {
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
        "Especialidta en QA y Testing",
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
    <section className="relative min-h-screen flex items-center justify-center bg-[#faf5ff] dark:bg-[#0c021a] px-6 overflow-hidden transition-colors duration-300">
      <StarryBackground isDark={isDark} />

      <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 font-mono">
        <span className="inline-flex items-center space-x-2 bg-indigo-50/80 dark:bg-[#1f093a]/50 text-accent border border-indigo-100 dark:border-[#381161]/50 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>{t('hero.tag')}</span>
        </span>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
          {t('hero.welcome')}
        </h1>

        <h2 className="text-3xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          {lang === 'es' ? "SOY" : "I'M"}{" "}
          <span className="text-accent bg-clip-text drop-shadow-[0_2px_15px_rgba(79,70,229,0.3)] dark:drop-shadow-[0_2px_15px_rgba(224,0,255,0.3)] font-extrabold tracking-wide uppercase">
            ESPERANZA CUENCA
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
            href="#cv-download-simulation"
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

function About(): React.JSX.Element {
  const { t } = useLanguage();
  const skills = [
    "HTML5 / CSS3", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript",
    "React.js", "Java", "Spring Boot", "Laravel", "MySQL", "Git & GitHub"
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
            <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-tr from-accent to-[#6366f1] p-[3px] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[1.5] scale-90">
                <circle cx="50" cy="40" r="18" />
                <path d="M22,82 C22,65 30,58 50,58 C70,58 78,65 78,82" strokeLinecap="round" />
                <circle cx="50" cy="50" r="46" style={{ strokeDasharray: '4,4', opacity: '0.4' }} />
              </svg>
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

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

function ImageCarousel({ images, alt }: ImageCarouselProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-56 bg-slate-100 dark:bg-slate-950 overflow-hidden shrink-0 group">
      <img
        src={images[currentIndex]}
        alt={`${alt} view ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-4' : 'bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects(): React.JSX.Element {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Mundo Tour",
      desc: t('projects.tourDesc'),
      tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot"],
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
      ],
      gh: "https://github.com",
      demo: "https://google.com"
    },
    {
      title: "Refugio Patitas Peludas",
      desc: t('projects.petsDesc'),
      tags: ["React", "CSS Modules", "Laravel", "MySQL"],
      images: [
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80", // Romeo's relative image!
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=600&q=80"
      ],
      gh: "https://github.com",
      demo: "https://google.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#130526] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 font-mono">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('projects.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0c021a] rounded-2xl border border-slate-200/60 dark:border-[#381161]/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300 flex flex-col h-full group">
              <ImageCarousel images={project.images} alt={project.title} />

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-indigo-50 dark:bg-[#1f093a]/50 text-accent text-xs font-semibold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">{project.desc}</p>
                </div>

                <div className="flex items-center space-x-6 pt-4 border-t border-slate-100 dark:border-[#1c0836]">
                  <a href={project.gh} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-accent transition-colors">
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-accent transition-colors">
                    <span>{t('projects.demoBtn')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications(): React.JSX.Element {
  const { t } = useLanguage();

  const certs = [
    {
      title: t('certifications.cert1'),
      issuer: "I.E.S. Belén",
      date: "2024 - 2026",
      badge: "DAW"
    },
    {
      title: t('certifications.cert2'),
      issuer: "Udemy Academy",
      date: "2025",
      badge: "React & TS"
    },
    {
      title: t('certifications.cert3'),
      issuer: "Coursera",
      date: "2024",
      badge: "Spring Boot"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 font-mono">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('certifications.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('certifications.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-slate-50 dark:bg-[#130526] p-6 rounded-2xl border border-slate-200/50 dark:border-[#381161]/60 hover:border-accent transition-all hover:scale-[1.02] flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 bg-indigo-50 dark:bg-[#1f093a]/50 text-accent text-xs font-semibold rounded mb-4">
                  {cert.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-1">{cert.issuer}</p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/40 dark:border-[#22074d]/50">
                <span className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</span>
                <button className="text-xs font-bold text-accent hover:underline">
                  {t('certifications.viewBtn')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience(): React.JSX.Element {
  const { t } = useLanguage();

  const timeline = [
    {
      date: "2024 - Present",
      title: t('experience.job1Title'),
      company: t('experience.job1Company'),
      desc: t('experience.job1Desc')
    },
    {
      date: "2023 - 2024",
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

function Contact(): React.JSX.Element {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0c021a] border-t border-slate-100 dark:border-[#1c0836] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 font-mono">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t('contact.title')}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('contact.infoTitle')}</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm font-sans">{t('contact.infoSubtitle')}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#1f093a]/50 border border-indigo-100 dark:border-[#381161]/60 text-accent flex items-center justify-center font-bold text-lg">📍</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{t('contact.location')}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">Andalucía, ES</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#1f093a]/50 border border-indigo-100 dark:border-[#381161]/60 text-accent flex items-center justify-center font-bold text-lg">✉️</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">espe.dev@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#130526] p-8 rounded-2xl border border-slate-200/60 dark:border-[#381161]/60 shadow-sm">
            {status === 'success' ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-center font-medium">
                ✨ {t('contact.success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelName')}</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelEmail')}</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t('contact.labelMsg')}</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={t('contact.msgPlaceholder')}
                    className="w-full px-4 py-3 bg-white dark:bg-[#0c021a] border border-slate-200 dark:border-[#381161] rounded-xl focus:outline-none focus:border-accent text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50 transition-colors"
                >
                  {status === 'sending' ? t('contact.btnSending') : t('contact.btnSend')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(): React.JSX.Element {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#faf5ff] dark:bg-[#130526] border-t border-slate-200 dark:border-[#1c0836] py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6 font-mono text-center md:text-left">

        {/* Columna Izquierda: Logo */}
        <div className="flex justify-center md:justify-start">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            🚀 EspeLOGO<span className="text-accent">.dev</span>
          </span>
        </div>

        {/* Columna Central: Derechos de autor en párrafos distintos y centrados */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
            &copy; {year} Esperanza Cuenca Zambrana.
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

function App(): React.JSX.Element {
  useEffect(() => {
    if (!document.getElementById('fonts-and-tailwind')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap';
      document.head.appendChild(fontLink);

      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      script.onload = () => {
        (window as any).tailwind.config = {
          darkMode: 'class'
        };
      };
      document.head.appendChild(script);
    }

    if (!document.getElementById('portfolio-custom-styles')) {
      const style = document.createElement('style');
      style.id = 'portfolio-custom-styles';
      style.innerHTML = `
        /* Dynamic Theme Palette with CSS Variables */
        :root {
          --color-accent: #4f46e5;
          --color-accent-hover: #4338ca;
        }
        .dark {
          --color-accent: #e000ff;
          --color-accent-hover: #b000c7;
        }

        /* Accent classes */
        .text-accent { color: var(--color-accent) !important; }
        .bg-accent { background-color: var(--color-accent) !important; }
        .border-accent { border-color: var(--color-accent) !important; }
        .hover\\:bg-accent-hover:hover { background-color: var(--color-accent-hover) !important; }
        .hover\\:border-accent-hover:hover { border-color: var(--color-accent-hover) !important; }

        html {
          scroll-behavior: smooth;
          -webkit-tap-highlight-color: transparent;
        }
        body {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          transition: background-color 300ms ease, color 300ms ease;
        }

        /* Typewriter Cursor Blinking with CSS Variable Accent */
        @keyframes blink {
          50% { border-color: transparent }
        }
        .typing-cursor {
          border-right: 3px solid var(--color-accent);
          animation: blink 0.75s step-end infinite;
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .dark ::-webkit-scrollbar-thumb {
          background: #1e293b;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-accent);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-[#faf5ff] dark:bg-[#0c021a] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300 selection:bg-indigo-500/20 dark:selection:bg-cyan-400/20">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;