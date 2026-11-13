"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { content as c } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <section className="section container-shell">
      <SectionHeading title={c.gallery.title} sub={c.gallery.sub} />
      <div className="gallery-grid mt-12">
        {c.gallery.items.map((im, i) => (
          <button
            className="gallery-item"
            key={im.src}
            onClick={() => setIndex(i)}
            aria-label={c.labels.image + ": " + im.alt}
          >
            <Image
              src={im.src}
              alt={im.alt}
              fill
              sizes="(max-width: 767px) 50vw, 50vw"
            />
            {i < 4 ? (
              <span>
                <Plus size={22} />
              </span>
            ) : (
              <span className="placeholder-label">
                {c.labels.photoPlaceholder}
              </span>
            )}
          </button>
        ))}
      </div>
      {index !== null && (
        <Lightbox
          index={index}
          onClose={() => setIndex(null)}
          onChange={setIndex}
        />
      )}
    </section>
  );
}
