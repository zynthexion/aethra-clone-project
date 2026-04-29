import { useState } from "react";

export function BulbIntro({ onTurnOn }: { onTurnOn: () => void }) {
  const [pulling, setPulling] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={() => {
        setPulling(true);
        setTimeout(onTurnOn, 600);
      }}
    >
      {/* Pull cord */}
      <div
        className="absolute top-0 left-1/2 w-px bg-neutral-700 origin-top"
        style={{
          height: pulling ? "55%" : "50%",
          transform: `translateX(-50%) ${pulling ? "rotate(2deg)" : "rotate(0)"}`,
          transition: "all 0.3s ease",
        }}
      />

      {/* Bulb */}
      <div
        className="relative"
        style={{
          transform: pulling ? "translateY(20px)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bulb glass */}
          <path
            d="M80 20 C 40 20, 20 55, 20 90 C 20 120, 40 140, 55 155 L 55 170 L 105 170 L 105 155 C 120 140, 140 120, 140 90 C 140 55, 120 20, 80 20 Z"
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(180,180,180,0.35)"
            strokeWidth="1.5"
          />
          {/* Filament — visible glow even when off */}
          <path
            d="M62 130 L 65 110 Q 70 95, 75 110 Q 80 125, 85 110 Q 90 95, 95 110 L 98 130"
            stroke="rgb(255, 160, 60)"
            strokeWidth="1.2"
            fill="none"
            style={{ filter: "drop-shadow(0 0 4px rgba(255,140,40,0.7))" }}
          />
          {/* Filament posts */}
          <line x1="62" y1="130" x2="62" y2="155" stroke="rgba(120,120,120,0.6)" strokeWidth="1" />
          <line x1="98" y1="130" x2="98" y2="155" stroke="rgba(120,120,120,0.6)" strokeWidth="1" />
          {/* Base */}
          <rect x="55" y="170" width="50" height="8" fill="rgb(60,60,65)" />
          <rect x="58" y="178" width="44" height="6" fill="rgb(80,80,85)" />
          <rect x="60" y="184" width="40" height="6" fill="rgb(60,60,65)" />
          <path d="M 65 190 L 95 190 L 90 200 L 70 200 Z" fill="rgb(50,50,55)" />
        </svg>

        {/* Subtle filament halo */}
        <div
          className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full pointer-events-none"
          style={{
            transform: "translate(-50%, -55%)",
            background: "radial-gradient(circle, rgba(255,150,50,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Hint text */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-neutral-500 text-sm tracking-[0.3em] uppercase animate-pulse">
        Click the bulb
      </div>
    </div>
  );
}
