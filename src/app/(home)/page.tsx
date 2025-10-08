import data from "@/content/home-page-layout.json";
import {
  EatingWell,
  ExtraordinaryExperience,
  Hero,
  MostPopularDishes,
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
  }: homePageProps = data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
    </>
  );
};

export default Home;
