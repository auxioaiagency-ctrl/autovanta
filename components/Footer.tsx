import { Instagram, MessageCircle } from "lucide-react";
import {
  content as c,
  ADDRESS_PLACEHOLDER,
  TIMINGS_PLACEHOLDER,
} from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
export default function Footer() {
  return (
    <footer id="contact">
      <div className="container-shell footer-grid">
        <div>
          <a className="font-heading text-2xl font-bold" href="#home">
            {c.business.name}
          </a>
          <p className="mt-5 text-sm text-white">{c.footer.description}</p>
          <div className="mt-6 flex gap-4">
            <a
              className="icon-button"
              aria-label={c.business.instagramHandle}
              href={c.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="icon-button"
              aria-label={c.business.displayPhone}
              href={whatsappUrl(c.messages.join)}
            >
              <MessageCircle />
            </a>
          </div>
        </div>
        <div>
          <h3>{c.footer.quick}</h3>
          <ul>
            {c.navigation.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{c.footer.services}</h3>
          <ul>
            {c.footer.serviceItems.map((t, i) => (
              <li key={t}>
                <a
                  href={whatsappUrl(
                    [c.messages.buy, c.messages.sell, c.messages.trade][i],
                  )}
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{c.footer.contact}</h3>
          <ul>
            <li>
              <a href={whatsappUrl(c.messages.join)}>
                {c.business.displayPhone}
              </a>
            </li>
            <li>
              <a href={c.business.instagramUrl}>{c.business.instagramHandle}</a>
            </li>
            <li>{ADDRESS_PLACEHOLDER}</li>
            <li>{TIMINGS_PLACEHOLDER}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-shell flex flex-wrap justify-between gap-3 text-xs">
          <span>{c.footer.copyright}</span>
          <span>{c.footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
