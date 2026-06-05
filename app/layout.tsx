import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://gz-serenity.vercel.app"),
  title: "Massoterapeuta em Dourados MS | GZ Serenity - Grizi Capasso",
  description:
    "Massagem terapêutica integrativa em Dourados MS. Terapias que acolhem, aliviam e transformam. Agende com a Grizi Capasso - GZ Serenity | Clínica Bella Face.",
  keywords: [
    "massoterapeuta Dourados",
    "massagem Dourados MS",
    "massagem terapêutica Dourados",
    "clínica de massagem Dourados MS",
    "GZ Serenity",
    "Grizi Capasso",
    "terapias corporais Dourados",
    "Clínica Bella Face Dourados",
  ],
  authors: [{ name: "Grizi Capasso" }],
  creator: "GZ Serenity",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gz-serenity.vercel.app",
    title: "Massoterapeuta em Dourados MS | GZ Serenity - Grizi Capasso",
    description: "Massagem terapêutica integrativa em Dourados MS. Terapias que acolhem, aliviam e transformam.",
    siteName: "GZ Serenity | Clínica Bella Face",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GZ Serenity | Clínica Bella Face",
  description: "Massagem terapêutica integrativa em Dourados, MS.",
  url: "https://gz-serenity.vercel.app",
  telephone: "+55-67-99642-8381",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dourados",
    addressRegion: "MS",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/grizi_capasso"],
  founder: { "@type": "Person", name: "Grizi Capasso", jobTitle: "Massoterapeuta" },
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
