import {
  AnyPlanProps,
  EatingWellProps,
  ExtraordinaryExperienceProps,
  HeroSectionProps,
  MostPopularDishesProps,
  OurSpecialMenuProps,
  QualityComesProps,
} from "@/components/home";
import { FooterProps } from "@/components/layout";

export interface LayoutProps {
  footer: FooterProps;
}

export interface homePageProps {
  heroSection: HeroSectionProps;
  eatingWellSection: EatingWellProps;
  qualityComesSection: QualityComesProps;
  mostPopularDishesSection: MostPopularDishesProps;
  extraordinaryExperienceSection: ExtraordinaryExperienceProps;
  ourSpecialMenuSection: OurSpecialMenuProps;
  anyPlanSection: AnyPlanProps;
}
