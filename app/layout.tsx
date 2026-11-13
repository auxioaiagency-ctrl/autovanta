import type { Metadata } from "next";
import localFont from "next/font/local";
import { content, SITE_URL, SITE_URL_PLACEHOLDER } from "@/lib/content";
import Grain from "@/components/Grain";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";
const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});
const sora = localFont({
  src: "../public/fonts/SoraVariable.woff2",
  variable: "--font-sora",
  display: "swap",
  weight: "100 800",
});
const siteUrl = SITE_URL;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.seo.title,
  description: content.seo.description,
  robots: { index: siteUrl !== SITE_URL_PLACEHOLDER, follow: true },
  alternates: siteUrl !== SITE_URL_PLACEHOLDER ? { canonical: "/" } : undefined,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
    images: [
      {
        url: content.images.og,
        width: 1200,
        height: 630,
        alt: content.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [content.images.og],
  },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: content.business.name,
  description: content.seo.description,
  telephone: "+" + content.business.phone,
  foundingDate: String(content.business.established),
  founder: { "@type": "Person", name: content.business.owner },
  sameAs: [content.business.instagramUrl],
  ...(siteUrl !== SITE_URL_PLACEHOLDER ? { url: siteUrl } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          {content.actions.skip}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollProgress />
        {children}
        <Grain />
      </body>
    </html>
  );
}
