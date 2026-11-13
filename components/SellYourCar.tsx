"use client";
import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { content as c } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";
export default function SellYourCar() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of c.sell.fields) {
      const v = String(data.get(f.name) || "").trim();
      if (!v) next[f.name] = c.sell.required;
      else if (f.name === "phone" && !/^\+?[\d\s()-]{7,20}$/.test(v))
        next[f.name] = c.sell.phoneError;
      else if (
        f.name === "year" &&
        (!/^\d{4}$/.test(v) ||
          Number(v) < 1886 ||
          Number(v) > new Date().getFullYear() + 1)
      )
        next[f.name] = c.sell.yearError;
      else if (
        ["km", "price"].includes(f.name) &&
        (!Number.isFinite(Number(v)) || Number(v) < 0)
      )
        next[f.name] = c.sell.numberError;
    }
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    const message =
      c.sell.message +
      "\n\n" +
      c.sell.fields
        .map((f) => f.label + ": " + String(data.get(f.name)).trim())
        .join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return (
    <section id="sell-your-car" className="section bg-red-tint">
      <div className="container-shell grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-5">{c.business.tagline}</p>
          <h2 className="max-w-lg text-left">{c.sell.title}</h2>
          <p className="mt-5">{c.sell.sub}</p>
          <ul className="mt-9 space-y-5">
            {c.sell.bullets.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check size={20} className="text-red" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <form
          className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8"
          onSubmit={submit}
          noValidate
        >
          {c.sell.fields.map((f) => (
            <div
              key={f.name}
              className={f.name === "model" ? "sm:col-span-2" : ""}
            >
              <label
                htmlFor={f.name}
                className="mb-2 block text-sm font-medium"
              >
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                min={f.type === "number" ? 0 : undefined}
                autoComplete={
                  f.name === "name"
                    ? "name"
                    : f.name === "phone"
                      ? "tel"
                      : f.name === "city"
                        ? "address-level2"
                        : "off"
                }
                aria-invalid={!!errors[f.name]}
                aria-describedby={
                  errors[f.name] ? f.name + "-error" : undefined
                }
              />
              {errors[f.name] && (
                <p
                  id={f.name + "-error"}
                  className="mt-2 text-sm text-red-dark"
                >
                  {errors[f.name]}
                </p>
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <button className="button button-primary w-full" type="submit">
              {c.sell.submit}
              <ArrowUpRight size={18} />
            </button>
            <p className="mt-3 text-xs">{c.sell.note}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
