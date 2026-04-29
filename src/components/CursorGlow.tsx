import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let rafId: number;
    let mouseX = -100, mouseY = -100;
    let trailX = -100, trailY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });

      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [role='button'], input, textarea, label"));
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      setTrailPos({ x: trailX, y: trailY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border border-neon transition-[width,height,opacity] duration-300 ease-out mix-blend-difference"
        style={{
          left: trailPos.x,
          top: trailPos.y,
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
        }}
      />
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-neon transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 4 : 8,
          height: hovering ? 4 : 8,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px var(--neon), 0 0 40px var(--neon)",
        }}
      />
      {/* Soft glow halo */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          left: trailPos.x,
          top: trailPos.y,
          width: 200,
          height: 200,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.88 0.22 142 / 0.12) 0%, transparent 70%)",
          opacity: hovering ? 1 : 0.5,
          transition: "opacity 300ms",
        }}
      />
    </>
  );
}
