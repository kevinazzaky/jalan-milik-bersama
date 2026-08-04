"use client";

// Adapted from React Bits BlurText by David Haz.
// License notice: see THIRD_PARTY_NOTICES.md.
import { motion, useReducedMotion } from "motion/react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function BlurText({ text, className = "", delay = 65 }: BlurTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 aria-label={text} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          key={`${word}-${index}`}
          initial={reduceMotion ? false : { filter: "blur(10px)", opacity: 0, y: 24 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: (index * delay) / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block will-change-[transform,filter,opacity]"
        >
          {word}{index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </h1>
  );
}
