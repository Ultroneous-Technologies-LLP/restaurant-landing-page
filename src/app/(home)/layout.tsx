import type { Metadata } from "next";

import data from "@/content/layout.json";
import { eugusto, inter, jomolHari, proximaNova } from "@/constants";
import { Footer, Header, SocialIconNameType } from "@/components/layout";

import "../../styles/globals.css";
import { LayoutProps } from "./types";

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
  const { footer }: LayoutProps = {
    footer: {
      ...data.footer,
      socialLinks: data.footer.socialLinks.map((link) => ({
        ...link,
        // Assert type safely
        icon: link.icon as SocialIconNameType,
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
