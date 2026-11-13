import { Files, ShieldCheck, BadgeCheck, Handshake } from "lucide-react";
import { content as c } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
export default function WhyUs() {
  const icons = [Files, ShieldCheck, BadgeCheck, Handshake];
  return (
    <section className="section bg-red-tint">
      <div className="container-shell">
        <SectionHeading title={c.why.title} sub={c.why.sub} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.why.items.map((t, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={t.title} delay={i * 0.07}>
                <Icon className="text-red" size={28} strokeWidth={1.5} />
                <h3 className="mt-6">{t.title}</h3>
                <p className="mt-3 text-sm">{t.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
