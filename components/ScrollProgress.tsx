"use client";
import { motion, useReducedMotion, useScroll } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
