import { MessageCircle, CarFront, SearchCheck, FileCheck2 } from "lucide-react";
import { content as c } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
export default function HowItWorks() {
  const icons = [MessageCircle, CarFront, SearchCheck, FileCheck2];
  return (
    <section id="how-it-works" className="section container-shell">
      <SectionHeading title={c.process.title} sub={c.process.sub} />
      <div className="process-grid mt-14">
        {c.process.items.map((t, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={t.title} delay={i * 0.07} className="process-step">
              <Icon
                size={28}
                strokeWidth={1.5}
                className="text-red mx-auto mb-6"
              />
              <span className="step-number">{i + 1}</span>
              <h3 className="mt-6">{t.title}</h3>
              <p className="mt-3 text-sm">{t.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
