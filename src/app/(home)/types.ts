import { EatingWellProps, HeroSectionProps } from "@/components/home";
import { FooterProps } from "@/components/layout";

export interface LayoutProps {
  footer: FooterProps;
}

export interface homePageProps {
  heroSection: HeroSectionProps;
  eatingWellSection: EatingWellProps;
}