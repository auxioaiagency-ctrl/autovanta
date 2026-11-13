"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { content as c } from "@/lib/content";
export default function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number;
  onClose: () => void;
  onChange: (n: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const items = c.gallery.items;
  useEffect(() => {
    ref.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={items[index].alt}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          onChange((index + items.length - 1) % items.length);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          onChange((index + 1) % items.length);
        }
      }}
    >
      <button
        autoFocus
        className="lightbox-close icon-button"
        aria-label={c.labels.close}
        onClick={onClose}
      >
        <X />
      </button>
      <div className="lightbox-image">
        <Image
          src={items[index].src}
          alt={items[index].alt}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        <button
          className="icon-button"
          onClick={() => onChange((index + items.length - 1) % items.length)}
          aria-label={c.labels.previous}
        >
          <ChevronLeft />
        </button>
        <span>
          {index + 1} / {items.length}
        </span>
        <button
          className="icon-button"
          onClick={() => onChange((index + 1) % items.length)}
          aria-label={c.labels.next}
        >
          <ChevronRight />
        </button>
      </div>
    </dialog>
  );
}
