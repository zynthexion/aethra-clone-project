import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setPos({ x: -1000, y: -1000 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  const radius = clicking ? 320 : 240;

  return (
    <>
      {/* Spotlight mask — darkens everything except a soft circle around the cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-[9990] transition-[background] duration-150"
        style={{
          background: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px,
            transparent 0%,
            rgba(0,0,0,0.35) 35%,
            rgba(0,0,0,0.85) 65%,
            rgba(0,0,0,0.97) 100%)`,
        }}
      />
      {/* Warm bulb glow */}
      <div
        className="pointer-events-none fixed z-[9991] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.95 0.18 142 / 0.18) 0%, oklch(0.88 0.22 142 / 0.06) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Bulb core */}
      <div
        className="pointer-events-none fixed z-[9992] rounded-full bg-neon"
        style={{
          left: pos.x,
          top: pos.y,
          width: 10,
          height: 10,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px var(--neon), 0 0 60px var(--neon), 0 0 120px var(--neon)",
        }}
      />
    </>
  );
}
