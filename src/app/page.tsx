import data from "@/content/home-page-layout.json";
import { homeLayoutTypes } from "@/components/home/types";
import {
  AnyPlan,
  EatingWell,
  ExtraordinaryExperience,
  Hero,
  MostPopularDishes,
  OurSpecialMenu,
  QualityComes,
} from "@/components/home";

const Home = () => {
  const {
    heroSection,
    eatingWellSection,
    qualityComesSection,
    mostPopularDishesSection,
    extraordinaryExperienceSection,
    ourSpecialMenuSection,
    anyPlanSection,
  }: homeLayoutTypes = data;

  return (
    <>
      <Hero {...heroSection} />
      <EatingWell {...eatingWellSection} />
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
      <OurSpecialMenu {...ourSpecialMenuSection} />
      <AnyPlan {...anyPlanSection} />
    </>
  );
};

export default Home;
