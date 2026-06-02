import React, { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULTS = {
    maxVerticalRotationDeg: 12,
    dragSensitivity: 25,
    enlargeTransitionMs: 300, // Transición un pelín más rápida y directa
    segments: 24
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg: number) => {
    const a = (((deg + 180) % 360) + 360) % 360;
    return a - 180;
};

function buildItems(pool: string[], seg: number) {
    const xCols = Array.from({ length: seg }, (_, i) => -seg + i * 2);
    const evenYs = [-2, 0, 2];
    const oddYs = [-1, 1];

    const coords = xCols.flatMap((x, c) => {
        const ys = c % 2 === 0 ? evenYs : oddYs;
        return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
    });

    if (pool.length === 0) return [];

    return coords.map((c, i) => ({
        ...c,
        src: pool[i % pool.length],
        alt: 'Certificado'
    }));
}

interface DomeGalleryProps {
    images: string[];
    overlayBlurColor?: string;
    imageBorderRadius?: string;
}

export function DomeGallery({
    images,
    overlayBlurColor = '#0c021a',
    imageBorderRadius = '20px'
}: DomeGalleryProps): React.JSX.Element {
    const rootRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);

    const [activeImg, setActiveImg] = useState<string | null>(null);

    const rotationRef = useRef({ x: 0, y: 0 });
    const startRotRef = useRef({ x: 0, y: 0 });
    const startPosRef = useRef<{ x: number; y: number } | null>(null);
    const draggingRef = useRef(false);
    const movedRef = useRef(false);
    const inertiaRAF = useRef<number | null>(null);

    const segments = DEFAULTS.segments;
    const items = useMemo(() => buildItems(images, segments), [images, segments]);

    const applyTransform = (xDeg: number, yDeg: number) => {
        const el = sphereRef.current;
        if (el) {
            el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        }
    };

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const ro = new ResizeObserver(() => {
            const radius = window.innerWidth < 768 ? 420 : 580;
            root.style.setProperty('--radius', `${radius}px`);
            root.style.setProperty('--overlay-blur-color', overlayBlurColor);
            root.style.setProperty('--tile-radius', imageBorderRadius);
            root.style.setProperty('--enlarge-radius', '20px');
            root.style.setProperty('--image-filter', 'none');
            applyTransform(rotationRef.current.x, rotationRef.current.y);
        });

        ro.observe(root);
        return () => ro.disconnect();
    }, [overlayBlurColor, imageBorderRadius]);

    const stopInertia = useCallback(() => {
        if (inertiaRAF.current) {
            cancelAnimationFrame(inertiaRAF.current);
            inertiaRAF.current = null;
        }
    }, []);

    const startInertia = useCallback(
        (vx: number, vy: number) => {
            let vX = clamp(vx, -1.4, 1.4) * 80;
            let vY = clamp(vy, -1.4, 1.4) * 80;

            const step = () => {
                vX *= 0.96;
                vY *= 0.96;
                if (Math.abs(vX) < 0.01 && Math.abs(vY) < 0.01) {
                    inertiaRAF.current = null;
                    return;
                }
                const nextX = clamp(rotationRef.current.x - vY / 200, -DEFAULTS.maxVerticalRotationDeg, DEFAULTS.maxVerticalRotationDeg);
                const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
                rotationRef.current = { x: nextX, y: nextY };
                applyTransform(nextX, nextY);
                inertiaRAF.current = requestAnimationFrame(step);
            };
            stopInertia();
            inertiaRAF.current = requestAnimationFrame(step);
        },
        [stopInertia]
    );

    useGesture(
        {
            onDragStart: ({ event }) => {
                if (activeImg) return;
                stopInertia();
                const evt = event as MouseEvent;
                draggingRef.current = true;
                movedRef.current = false;
                startRotRef.current = { ...rotationRef.current };
                startPosRef.current = { x: evt.clientX, y: evt.clientY };
            },
            onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0] }) => {
                if (activeImg || !draggingRef.current || !startPosRef.current) return;
                const evt = event as MouseEvent;
                const dxTotal = evt.clientX - startPosRef.current.x;
                const dyTotal = evt.clientY - startPosRef.current.y;

                if (Math.abs(dxTotal) > 5 || Math.abs(dyTotal) > 5) {
                    movedRef.current = true;
                }

                const nextX = clamp(
                    startRotRef.current.x - dyTotal / DEFAULTS.dragSensitivity,
                    -DEFAULTS.maxVerticalRotationDeg,
                    DEFAULTS.maxVerticalRotationDeg
                );
                const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / DEFAULTS.dragSensitivity);

                rotationRef.current = { x: nextX, y: nextY };
                applyTransform(nextX, nextY);

                if (last) {
                    draggingRef.current = false;
                    let [vMagX, vMagY] = velocity;
                    const [dirX, dirY] = direction;
                    let vx = vMagX * dirX;
                    let vy = vMagY * dirY;
                    if (movedRef.current && (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005)) {
                        startInertia(vx, vy);
                    }
                }
            }
        },
        { target: mainRef, eventOptions: { passive: true } }
    );

    const handleTileClick = (src: string) => {
        if (movedRef.current) return;
        setActiveImg(src);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveImg(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            ref={rootRef}
            className="sphere-root"
            data-enlarging={activeImg ? "true" : "false"}
            style={{
                ['--segments-x' as any]: segments,
                ['--segments-y' as any]: segments,
                ['--image-filter' as any]: 'none'
            }}
        >
            <main ref={mainRef} className="sphere-main">
                <div className="stage">
                    <div ref={sphereRef} className="sphere">
                        {items.map((it, i) => (
                            <div
                                key={`${it.x},${it.y},${i}`}
                                className="item"
                                data-src={it.src}
                                style={{
                                    ['--offset-x' as any]: it.x,
                                    ['--offset-y' as any]: it.y,
                                    ['--item-size-x' as any]: it.sizeX,
                                    ['--item-size-y' as any]: it.sizeY
                                }}
                            >
                                <div
                                    className="item__image"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleTileClick(it.src)}
                                >
                                    <img src={it.src} draggable={false} alt={it.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overlay" />
                <div className="overlay overlay--blur" />
                <div className="edge-fade edge-fade--top" />
                <div className="edge-fade edge-fade--bottom" />

                {/* 🪟 MODAL FLOTANTE NÍTIDO E INTERACTIVO */}
                <div className="viewer" style={{ opacity: activeImg ? 1 : 0, transition: 'opacity 0.25s ease', pointerEvents: activeImg ? 'all' : 'none' }}>

                    {/* 🔓 Fondo oscuro (scrim): Al pinchar aquí se cierra */}
                    <div className="scrim" onClick={() => setActiveImg(null)} style={{ pointerEvents: activeImg ? 'all' : 'none' }} />

                    {/* 🎯 Imagen grande: Ahora responde también al onClick para cerrarse si pinchan encima */}
                    {activeImg && (
                        <div
                            className="enlarge"
                            onClick={() => setActiveImg(null)} // 🌟 Permite cerrar al hacer clic en cualquier parte de la imagen
                            style={{
                                position: 'relative',
                                zIndex: 40,
                                transform: 'scale(1)',
                                transition: `all ${DEFAULTS.enlargeTransitionMs}ms cubic-bezier(0.25, 1, 0.5, 1)`,
                                maxWidth: '85vw',
                                maxHeight: '75vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'zoom-out' // Icono de lupa de alejamiento para indicar que se puede cerrar
                            }}
                        >
                            <img
                                src={activeImg}
                                alt="Certificado Ampliado"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '20px'
                                }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}