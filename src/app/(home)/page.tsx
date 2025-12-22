import { FC, PropsWithChildren } from "react";

import {
  AnyPlan,
  EatingWell,
  ExtraordinaryExperience,
  Hero,
  MostPopularDishes,
  OurSpecialMenu,
  QualityComes,
  Testimonials,
} from "@/components/home";
import data from "@/content/home-page-layout.json";

import { HomePageProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const {
    heroSection,
    eatingWellSection,
    qualityComesSection,
    mostPopularDishesSection,
    extraordinaryExperienceSection,
    ourSpecialMenuSection,
    anyPlanSection,
    testimonialsSection,
  }: HomePageProps = data;
  return (
    <>
      <Hero {...heroSection} />
      <EatingWell {...eatingWellSection} />
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
      <OurSpecialMenu {...ourSpecialMenuSection} />
      <AnyPlan {...anyPlanSection} />
      <Testimonials {...testimonialsSection} />
    </>
  );
};

export default Home;
