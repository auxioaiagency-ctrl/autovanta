import { FileCheck2, ShieldCheck, CarFront, ArrowUpRight } from "lucide-react";
import { content as c } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";
export default function TrustStrip() {
  const icons = [FileCheck2, ShieldCheck, CarFront];
  return (
    <section id="services" className="section bg-red-tint">
      <h2 className="sr-only">{c.labels.services}</h2>
      <div className="container-shell grid gap-4 md:grid-cols-3">
        {c.trust.map((t, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={t.title} delay={i * 0.07}>
              <article className="card interactive-card h-full p-7">
                <Icon size={28} strokeWidth={1.5} className="text-red" />
                <h3 className="mt-6">{t.title}</h3>
                <p className="mt-3">{t.body}</p>
                <a
                  className="text-link"
                  href={whatsappUrl(t.title + " — " + c.messages.buy)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.labels.ask}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
