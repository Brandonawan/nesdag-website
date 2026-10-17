import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nesdag.co";
const siteTitle = "Nesdag Tech Ltd — Technology that moves business forward";
const siteDescription =
  "Nesdag Tech Ltd designs, develops and operates practical digital products, business systems and technology solutions for ambitious organisations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Nesdag",
  },
  description: siteDescription,
  applicationName: "Nesdag",
  keywords: [
    "Nesdag Tech Ltd",
    "technology company Nigeria",
    "software development Nigeria",
    "digital products",
    "business systems",
    "technology advisory",
    "QuickerPay",
  ],
  authors: [{ name: "Nesdag Tech Ltd", url: siteUrl }],
  creator: "Nesdag Tech Ltd",
  publisher: "Nesdag Tech Ltd",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Nesdag",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nesdag Tech Ltd — Technology that moves business forward",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Nesdag Tech Ltd",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteDescription,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  brand: {
    "@type": "Brand",
    name: "Nesdag",
  },
  owns: {
    "@type": "Product",
    name: "QuickerPay",
    url: "https://quickerpay.co",
    description: "A SaaS platform for simpler, faster business payments.",
    brand: {
      "@type": "Brand",
      name: "QuickerPay",
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Nesdag",
  description: siteDescription,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-NG",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
