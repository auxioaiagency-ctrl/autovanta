import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { content as c } from "@/lib/content";
import { groupUrl, whatsappUrl } from "@/lib/whatsapp";
export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div className="relative z-10 py-16 lg:py-24">
          <h2 className="text-left text-white">{c.cta.title}</h2>
          <p className="mt-5 text-white">{c.cta.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="button bg-white text-red-dark"
              href={groupUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.cta.join}
              <ArrowUpRight size={18} />
            </a>
            <a
              className="button border border-white text-white"
              href={whatsappUrl(c.cta.prefill)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.cta.message}
            </a>
          </div>
        </div>
        <div className="cta-image">
          <Image
            src={c.cta.image}
            alt={c.cta.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
