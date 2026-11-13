"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { content as c } from "@/lib/content";
import { groupUrl } from "@/lib/whatsapp";
import QuickActions from "./QuickActions";
import Reveal from "./Reveal";
export default function Hero() {
  const reduced = useReducedMotion();
  const [point, setPoint] = useState({ x: 0, y: 0 });
  return (
    <section
      id="home"
      className="hero"
      onMouseMove={(e) => {
        if (!reduced && window.innerWidth >= 1024) {
          const b = e.currentTarget.getBoundingClientRect();
          setPoint({
            x: ((e.clientX - b.left) / b.width - 0.5) * 28,
            y: ((e.clientY - b.top) / b.height - 0.5) * 28,
          });
        }
      }}
      onMouseLeave={() => setPoint({ x: 0, y: 0 })}
    >
      <div className="container-shell hero-copy">
        <Reveal>
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="mt-5">
            {c.hero.lines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-5">{c.hero.description}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              className="button button-primary"
              href={groupUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.actions.join}
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href="#sell-your-car">
              {c.actions.sell}
            </a>
          </div>
        </Reveal>
      </div>
      <motion.div
        className="hero-photo"
        animate={reduced ? {} : { x: point.x, y: point.y }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={c.hero.image}
          alt={c.hero.alt}
          fill
          priority
          sizes="100vw"
          className={reduced ? "" : "hero-drift"}
        />
        <span className="photo-label">
          {c.business.name} / {c.ui.established}
        </span>
      </motion.div>
      <QuickActions />
    </section>
  );
}
