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

  const bandHeight = clicking ? 320 : 240;

  return (
    <>
      {/* Horizontal band mask — reveals the entire row at cursor's Y */}
      <div
        className="pointer-events-none fixed inset-0 z-[9990] transition-[background] duration-150"
        style={{
          background: `linear-gradient(to bottom,
            rgba(0,0,0,0.97) 0%,
            rgba(0,0,0,0.97) calc(${pos.y}px - ${bandHeight}px),
            rgba(0,0,0,0.4) calc(${pos.y}px - ${bandHeight / 2}px),
            transparent ${pos.y}px,
            rgba(0,0,0,0.4) calc(${pos.y}px + ${bandHeight / 2}px),
            rgba(0,0,0,0.97) calc(${pos.y}px + ${bandHeight}px),
            rgba(0,0,0,0.97) 100%)`,
        }}
      />
      {/* Warm neon glow centered on cursor */}
      <div
        className="pointer-events-none fixed z-[9991] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 600,
          height: bandHeight * 1.4,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, oklch(0.95 0.18 142 / 0.18) 0%, oklch(0.88 0.22 142 / 0.05) 50%, transparent 75%)",
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
