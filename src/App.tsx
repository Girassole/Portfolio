import React, { useEffect } from 'react';

// Importación de los Proveedores de Contexto Globales
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Importación de los Componentes Modulares de la Aplicación
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Certifications } from './components/Certifications/Certifications';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App(): React.JSX.Element {
  useEffect(() => {
    // Inyección dinámica de Fuentes de Google y Script CDN de Tailwind
    if (!document.getElementById('fonts-and-tailwind')) {
      const fontLink = document.createElement('link');
      fontLink.id = 'fonts-and-tailwind';
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

    // Inyección de Estilos Globales, Animación del Cursor y Variables de Color (Aceto)
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
        body {
          transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
                }

                /* Forzamos el fundido suave de fondos, textos y bordes en los componentes */
                section, div, h1, h2, h3, h4, p, span, input, textarea, button {
                  transition: background-color 500ms ease-in-out, color 500ms ease-in-out, border-color 500ms ease-in-out, box-shadow 500ms ease-in-out;
                }

        /* Typewriter Cursor Blinking with CSS Variable Accent */
        @keyframes blink {
          50% { border-color: transparent }
        }
        .typing-cursor {
          border-right: 3px solid var(--color-accent);
          animation: blink 0.75s step-end infinite;
        }

        /* Custom Scrollbar Styles */
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

      /* Animación personalizada para que la mano salude en bucle */
    @keyframes wave {
      0% { transform: rotate( 0.0deg) }
      10% { transform: rotate(14.0deg) }
      20% { transform: rotate(-8.0deg) }
      30% { transform: rotate(14.0deg) }
      40% { transform: rotate(-4.0deg) }
      50% { transform: rotate(10.0deg) }
      60% { transform: rotate( 0.0deg) }
      100% { transform: rotate( 0.0deg) }
    }

.animate-wave {
  animation: wave 2.5s infinite;
}
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        {/* Contenedor principal con soporte nativo de transiciones y selección de texto */}
        <div className="min-h-screen bg-[#faf5ff] dark:bg-[#0c021a] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300 selection:bg-indigo-500/20 dark:selection:bg-cyan-400/20">

          {/* Header fijo en la parte superior */}
          <Navbar />

          {/* Bloque principal de contenido de la SPA */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
          </main>

          {/* Pie de página con tus datos y redes centralizadas */}
          <Footer />

        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;