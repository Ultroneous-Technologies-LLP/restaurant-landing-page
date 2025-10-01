import data from "@/content/home-page-layout.json";
import { homeLayoutTypes } from "@/components/home/types";
import {
  EatingWell,
  ExtraordinaryExperience,
  Hero,
  MostPopularDishes,
  QualityComes,
} from "@/components/home";

const Home = () => {
  const {
    heroSection,
    eatingWellSection,
    qualityComesSection,
    mostPopularDishesSection,
    extraordinaryExperienceSection,
  }: homeLayoutTypes = data;

  return (
    <>
      <Hero {...heroSection} />
      <EatingWell {...eatingWellSection} />
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
      <ExtraordinaryExperience {...extraordinaryExperienceSection} />
    </>
  );
};

export default Home;
