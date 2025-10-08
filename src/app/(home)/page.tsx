import data from "@/content/home-page-layout.json";
import {
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
  }: homePageProps = data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
      <OurSpecialMenu {...ourSpecialMenuSection} />
    </>
  );
};

export default Home;
