import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Jomolhari } from "next/font/google";

import data from "@/content/layout.json";
import { Footer, Header } from "@/components/layout";
import { layoutDataType, SocialIconName } from "@/components/layout/types";

import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/assets/fonts/proxima-nova-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/proxima-nova-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proximaNova",
  display: "swap",
});

const eugusto = localFont({
  src: [
    {
      path: "../../public/assets/fonts/eugusto-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-eugusto",
  display: "swap",
});

const jomolHari = Jomolhari({
  variable: "--font-JomolHari",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Restaurant Website Design | Modern Food & Dining UI Concept",
  description:
    "Elegant restaurant website landing page UI. Modern dining design for food businesses, online reservations, and fine dining digital experiences.",
  keywords: [
    "restaurant website design",
    "food and dining UI",
    "restaurant landing page",
    "modern food website template",
    "fine dining web design",
    "online food ordering UI",
    "restaurant reservation website",
    "culinary website concept",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { footer }: layoutDataType = {
    footer: {
      ...data.footer,
      socialLinks: data.footer.socialLinks.map((link) => ({
        ...link,
        // Assert type safely
        icon: link.icon as SocialIconName,
      })),
    },
  };

  return (
    <html lang="en">
      <body
        className={`${jomolHari.variable} ${inter.variable} ${proximaNova.variable} ${eugusto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
