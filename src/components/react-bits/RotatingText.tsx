"use client";

// Adapted from React Bits RotatingText by David Haz.
// License notice: see THIRD_PARTY_NOTICES.md.
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type RotatingTextProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export default function RotatingText({ texts, interval = 2600, className = "" }: RotatingTextProps) {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || texts.length < 2) return;
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % texts.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, reduceMotion, texts.length]);

  if (reduceMotion) return <span className={className}>{texts[0]}</span>;

  return (
    <span className={`relative inline-grid overflow-hidden align-bottom ${className}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">bergerak setara.</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={texts[current]}
          aria-hidden="true"
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ y: "100%", rotateX: -70, opacity: 0 }}
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          exit={{ y: "-110%", rotateX: 70, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
        >
          {texts[current]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{texts[current]}</span>
    </span>
  );
}
