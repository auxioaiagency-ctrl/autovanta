import Image from "next/image";
import {
  ArrowUpRight,
  CarFront,
  Settings2,
  Fuel,
  Gauge,
  MapPin,
} from "lucide-react";
import { content as c } from "@/lib/content";
import { groupUrl, whatsappUrl } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";
export default function RecentArrivals() {
  const approved = c.arrivals.filter((a) => a.approved);
  return (
    <section id="recent-arrivals" className="section container-shell">
      <SectionHeading title={c.recent.title} sub={c.recent.sub} />
      {approved.length ? (
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {approved.map((a) => (
            <article className="card overflow-hidden" key={a.id}>
              <Image src={a.image} alt={a.name} width={1000} height={750} />
              <div className="p-4">
                <h3>
                  {a.name} {a.year}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-grey">
                  {[a.transmission, a.fuel, a.km, a.city].map((value, i) => {
                    const Icon = [Settings2, Fuel, Gauge, MapPin][i];
                    return (
                      <div
                        key={c.labels.specs[i]}
                        className="flex items-center gap-2"
                      >
                        <Icon aria-hidden="true" size={16} strokeWidth={1.5} />
                        <dt className="sr-only">{c.labels.specs[i]}</dt>
                        <dd>{value}</dd>
                      </div>
                    );
                  })}
                </dl>
                <a
                  className="button button-primary mt-5"
                  href={whatsappUrl(
                    c.messages.buy + " " + a.name + " " + a.year,
                  )}
                >
                  {c.recent.price}
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="stock-empty mt-10">
          <CarFront size={40} strokeWidth={1.5} className="text-red" />
          <h3 className="mt-5">{c.recent.empty}</h3>
          <p className="mt-3">{c.recent.body}</p>
        </div>
      )}
      <div className="mt-8 text-center">
        <a
          className="button button-secondary"
          href={groupUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.recent.button}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
