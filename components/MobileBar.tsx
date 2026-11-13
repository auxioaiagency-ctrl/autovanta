import { MessageCircle, Phone, Instagram } from "lucide-react";
import { content as c } from "@/lib/content";
import { groupUrl } from "@/lib/whatsapp";
export default function MobileBar() {
  const icons = [MessageCircle, Phone, Instagram];
  return (
    <nav className="mobile-bar" aria-label={c.footer.contact}>
      {[groupUrl(), c.links.call, c.business.instagramUrl].map((url, i) => {
        const Icon = icons[i];
        return (
          <a
            key={url}
            href={url}
            className={i === 0 ? "bg-red-dark text-white" : ""}
          >
            <Icon size={19} strokeWidth={1.5} />
            {c.footer.mobile[i]}
          </a>
        );
      })}
    </nav>
  );
}
