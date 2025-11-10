import {
  FooterProps,
  AnyPlanProps,
  EatingWellProps,
  ExtraordinaryExperienceProps,
  HeroSectionProps,
  MostPopularDishesProps,
  OurSpecialMenuProps,
  QualityComesProps,
  TestimonialProps,
} from "@/components";

export interface LayoutProps {
  footer: FooterProps;
}

export interface HomePageProps {
  anyPlanSection: AnyPlanProps;
  eatingWellSection: EatingWellProps;
  extraordinaryExperienceSection: ExtraordinaryExperienceProps;
  heroSection: HeroSectionProps;
  mostPopularDishesSection: MostPopularDishesProps;
  ourSpecialMenuSection: OurSpecialMenuProps;
  qualityComesSection: QualityComesProps;
  testimonialsSection: TestimonialProps;
}
