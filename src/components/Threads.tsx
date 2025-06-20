// src/components/Threads.tsx
import React, { useEffect, useRef } from 'react';

type Strand = {
  leftPercent: number;   // 0–1 across the canvas
  baseAmplitude: number; // max coil radius
  frequency: number;     // coil density
  phase: number;         // horizontal phase shift
  width: number;         // stroke width
  color: string;         // pastel color
};

const PASTEL_COLORS = [
  '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA',
  '#E6E6FA', '#FFC0CB', '#B0E0E6', '#F5DEB3',
];

export default function Threads() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strandsRef = useRef<Strand[]>([]);

  useEffect(() => {
    // 1. Define fixed positions
    const leftPairs = [0.2, 0.3];
    const rightPairs = [0.7, 0.8];
    const centerPos = 0.5;
    const arr: Strand[] = [];

    // Helper to pick random pastel
    const pickColor = () => PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];

    // 2. Generate two DNA coils on each side
    [...leftPairs, ...rightPairs].forEach((pos, idx) => {
      const baseAmp = 80 + Math.random() * 40;     // coil radius
      const freq = 0.005 + Math.random() * 0.005;  // coil density
      const phase = Math.random() * Math.PI * 2;   // random shift
      const width = 24 + Math.random() * 8;        // thick strands (24–32px)
      const c1 = pickColor();
      const c2 = pickColor();
      // strand A
      arr.push({ leftPercent: pos, baseAmplitude: baseAmp, frequency: freq, phase, width, color: c1 });
      // strand B, 180° out of phase
      arr.push({ leftPercent: pos, baseAmplitude: baseAmp, frequency: freq, phase: phase + Math.PI, width, color: c2 });
    });

    // 3. Generate one extra thick strand in center
    arr.push({
      leftPercent: centerPos,
      baseAmplitude: 100,        // larger coil radius
      frequency: 0.004,          // slightly looser
      phase: Math.random() * Math.PI * 2,
      width: 40,                 // thickest (40px)
      color: pickColor(),
    });

    strandsRef.current = arr;

    // 4. Canvas setup & draw logic
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      draw(window.scrollY);
    };

    const draw = (scrollY: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxScroll = canvas.height - window.innerHeight;
      // tFactor: 0 at top (straight), 1 at bottom (full coil)
      const tFactor = Math.min(1, scrollY / maxScroll);

      strandsRef.current.forEach(s => {
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        // current amplitude
        const amp = s.baseAmplitude * tFactor;

        // draw sine coil
        for (let y = 0; y <= canvas.height; y += 5) {
          const x = s.leftPercent * canvas.width + Math.sin(y * s.frequency + s.phase) * amp;
          y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    };

    // 5. Attach listeners
    const onScroll = () => draw(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);

    // 6. Initial draw
    resize();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-[200vh] pointer-events-none z-0"
    />
  );
}
