import localFont from "next/font/local";
import { Inter, Jomolhari } from "next/font/google";

export const proximaNova = localFont({
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

export const eugusto = localFont({
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

export const jomolHari = Jomolhari({
  variable: "--font-JomolHari",
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
