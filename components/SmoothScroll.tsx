"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frame = 0;
    function start() {
      if (media.matches) return;
      lenis = new Lenis({ lerp: 0.08, anchors: true });
      function raf(time: number) {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      }
      frame = requestAnimationFrame(raf);
    }
    function change() {
      lenis?.destroy();
      cancelAnimationFrame(frame);
      start();
    }
    start();
    media.addEventListener("change", change);
    return () => {
      lenis?.destroy();
      cancelAnimationFrame(frame);
      media.removeEventListener("change", change);
    };
  }, []);
  return null;
}
