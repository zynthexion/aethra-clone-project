import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({
  words,
  className = "",
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {words[index % words.length].substring(0, subIndex)}
      <span className="inline-block w-[3px] h-[0.9em] align-middle bg-neon ml-1 animate-pulse" />
    </span>
  );
}
