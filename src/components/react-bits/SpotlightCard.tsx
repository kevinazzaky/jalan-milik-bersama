"use client";

// Adapted from React Bits SpotlightCard by David Haz.
// License notice: see THIRD_PARTY_NOTICES.md.
import type { MouseEventHandler, PropsWithChildren } from "react";
import { useRef, useState } from "react";

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  spotlightColor?: string;
}>;

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(142, 216, 255, 0.18)" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handlePointerMove: MouseEventHandler<HTMLElement> = (event) => {
    if (!cardRef.current || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none"
        style={{ opacity, background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)` }}
      />
      <div className="relative h-full">{children}</div>
    </article>
  );
}
