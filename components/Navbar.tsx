"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, CarFront, Instagram, Phone } from "lucide-react";
import { content as c } from "@/lib/content";
import { groupUrl, whatsappUrl } from "@/lib/whatsapp";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const links = c.navigation.map((n) => (
    <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
      {n.label}
    </a>
  ));
  return (
    <>
      <div className="utility">
        <div className="container-shell flex items-center justify-between gap-4">
          <span>{c.business.promise}</span>
          <div className="hidden items-center gap-5 sm:flex">
            <a href={whatsappUrl(c.messages.join)}>
              <Phone size={13} />
              {c.business.displayPhone}
            </a>
            <a
              href={c.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={13} />
              {c.business.instagramHandle}
            </a>
          </div>
        </div>
      </div>
      <header className="nav">
        <div className="container-shell flex h-20 items-center justify-between gap-5">
          <a href="#home" className="wordmark" aria-label={c.business.name}>
            <CarFront size={30} strokeWidth={1.5} />
            <span>
              {c.business.wordmark[0]}
              <span className="text-red">{c.business.wordmark[1]}</span>
            </span>
          </a>
          <nav
            aria-label={c.footer.quick}
            className="hidden items-center gap-5 text-xs font-medium xl:flex"
          >
            {links}
          </nav>
          <a
            className="button button-primary hidden md:inline-flex"
            href={groupUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.actions.join}
          </a>
          <button
            className="icon-button xl:hidden"
            aria-label={c.labels.menu}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        onCancel={() => setOpen(false)}
        className="mobile-menu"
        aria-label={c.labels.menu}
      >
        <button
          autoFocus
          className="icon-button ml-auto"
          onClick={() => setOpen(false)}
          aria-label={c.labels.close}
        >
          <X />
        </button>
        <nav className="flex flex-1 flex-col justify-center gap-6 text-2xl font-semibold">
          {links}
        </nav>
        <a
          className="button button-primary"
          href={groupUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.actions.join}
        </a>
      </dialog>
    </>
  );
}
