import data from "@/content/home-page-layout.json";
import {
  AnyPlan,
  EatingWell,
  ExtraordinaryExperience,
  Hero,
  MostPopularDishes,
  OurSpecialMenu,
  QualityComes,
} from "@/components/home";

import { homePageProps } from "./types";

const Home = () => {
  const {
    heroSection,
    eatingWellSection,
    qualityComesSection,
    mostPopularDishesSection,
    extraordinaryExperienceSection,
    ourSpecialMenuSection,
    anyPlanSection,
  }: homePageProps = data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
      <OurSpecialMenu {...ourSpecialMenuSection} />
      <AnyPlan {...anyPlanSection} />
    </>
  );
};

export default Home;
