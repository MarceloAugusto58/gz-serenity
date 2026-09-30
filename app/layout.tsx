import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://gz-serenity.vercel.app";
const SITE_NAME = "GZ Serenity";
const TITLE = "Massoterapeuta em Dourados MS | GZ Serenity - Grizi Capasso";
const DESCRIPTION =
  "Massagem terapêutica e relaxante em Dourados MS com a massoterapeuta Grizi Capasso. Alívio de dores, tensões e estresse. Agende pelo WhatsApp na GZ Serenity | Clínica Bella Face.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "massoterapeuta Dourados",
    "massagem Dourados MS",
    "massagem terapêutica Dourados",
    "massagem relaxante Dourados",
    "clínica de massagem Dourados MS",
    "GZ Serenity",
    "Grizi Capasso",
    "terapias corporais Dourados",
    "Clínica Bella Face Dourados",
  ],
  authors: [{ name: "Grizi Capasso" }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    images: [{ url: "/grizi-hero.jpg", alt: "Grizi Capasso, massoterapeuta em Dourados MS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/grizi-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#3D1F5C",
};

// WebSite define o nome exibido no Google (em vez de "Vercel");
// HealthAndBeautyBusiness alimenta o resultado local.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: ["GZ Serenity | Clínica Bella Face", "Grizi Capasso Massoterapeuta"],
      url: SITE_URL,
      inLanguage: "pt-BR",
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "GZ Serenity | Clínica Bella Face",
      description: DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/grizi-hero.jpg`,
      logo: `${SITE_URL}/icon.svg`,
      telephone: "+55-67-99642-8381",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dourados",
        addressRegion: "MS",
        addressCountry: "BR",
      },
      areaServed: { "@type": "City", name: "Dourados" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      sameAs: ["https://www.instagram.com/grizi_capasso"],
      founder: { "@type": "Person", name: "Grizi Capasso", jobTitle: "Massoterapeuta" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="google-site-verification" content="qzcA_n5WQKvP04Ol5G00lUG6R12Gs8r6jY4xxxfFJtg" />
        <meta name="msvalidate.01" content="DA1DA524F76534E5E08B1D8FF7072BA9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-purple font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
