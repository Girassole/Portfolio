import React, { useEffect, useRef } from 'react';

// ==========================================================
// CLASE PARTICLE: Gestiona el comportamiento de cada estrella
// ==========================================================
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
        // En modo oscuro las estrellas brillan en morado/magenta neón, en modo claro en azul/indigo
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

// ==========================================================
// COMPONENTE PRINCIPAL STARRYBACKGROUND (Exportado)
// ==========================================================
interface StarryBackgroundProps {
    isDark: boolean;
}

export function StarryBackground({ isDark }: StarryBackgroundProps): React.JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Renderizamos más estrellas en modo oscuro para dar un look del espacio profundo
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