import { ArrowUpRight } from "lucide-react";
import { content as c } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
export default function QuickActions() {
  return (
    <div className="container-shell quick-actions card">
      {c.quick.map((a) => (
        <a
          key={a.title}
          href={whatsappUrl(c.messages[a.message as "buy" | "sell" | "trade"])}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{a.title}</span>
          <ArrowUpRight size={22} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
