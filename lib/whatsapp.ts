import { content, WHATSAPP_GROUP_LINK } from "./content";
export function whatsappUrl(message: string): string {
  return `https://wa.me/${content.business.phone}?text=${encodeURIComponent(message)}`;
}
// The owner adds customers manually until a real group invite is supplied.
export function groupUrl(): string {
  return WHATSAPP_GROUP_LINK === "REPLACE_ME"
    ? whatsappUrl(content.messages.join)
    : WHATSAPP_GROUP_LINK;
}
