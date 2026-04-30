import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("button, a, .glass-card, .spotlight-card, input, textarea, [data-magnetic]");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-neon transition-transform duration-150"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: "6px",
          height: "6px",
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
          boxShadow: "0 0 10px var(--neon)",
        }}
      />
      
      {/* Trailing Ring - Snappier transition */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border border-neon/40 transition-[left,top,width,height,background,border-color] duration-150 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovering ? "80px" : "36px",
          height: isHovering ? "80px" : "36px",
          transform: "translate(-50%, -50%)",
          background: isHovering ? "oklch(0.88 0.22 142 / 0.1)" : "transparent",
          backdropFilter: isHovering ? "blur(4px)" : "none",
        }}
      />

      {/* Ambient Glow - Also snappier */}
      <div
        className="pointer-events-none fixed z-[9997] rounded-full opacity-30 transition-[left,top] duration-300 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.88 0.22 142 / 0.1) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
