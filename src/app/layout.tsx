import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://innovation-compass.rukn.cloud'),
  title: {
    default: "بوصلة الابتكار | Innovation Compass",
    template: "%s | بوصلة الابتكار"
  },
  description: "مبادرة بوصلة الابتكار: برنامج نوعي لتمكين الجهات المتخصصة في مجال الطفولة والشباب من ابتكار حلول مستدامة وصناعة الأثر الاجتماعي.",
  keywords: [
    "بوصلة الابتكار",
    "Innovation Compass",
    "مبادرة بوصلة الابتكار",
    "برنامج بوصلة الابتكار",
    "الابتكار الاجتماعي",
    "تمكين الجهات",
    "صناعة الأثر",
    "الشباب والطفولة",
    "برامج تطوير المبادرات",
    "مبادرات غير ربحية"
  ],
  authors: [{ name: "Innovation Compass Team" }],
  creator: "Innovation Compass",
  publisher: "Innovation Compass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "بوصلة الابتكار | نحو مستقبل مبتكر للطفولة والشباب",
    description: "انضم إلى مبادرة بوصلة الابتكار لتمكين الجهات من صناعة الأثر المستدام وبناء حلول مبتكرة في مجالات الطفولة والشباب.",
    url: 'https://innovation-compass.rukn.cloud',
    siteName: 'بوصلة الابتكار',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "بوصلة الابتكار | Innovation Compass",
    description: "مبادرة لتمكين الجهات المتخصصة في مجال الطفولة والشباب من ابتكار حلول مستدامة.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://innovation-compass.rukn.cloud',
  },
};

import { JsonLd } from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cairo.variable} antialiased font-sans bg-background text-primary`}
        suppressHydrationWarning
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
