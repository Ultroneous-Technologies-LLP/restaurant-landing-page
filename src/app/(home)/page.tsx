import data from "@/content/home-page-layout.json";
import {
  EatingWell,
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
  }: homePageProps = data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
      <QualityComes {...qualityComesSection} />
      <MostPopularDishes {...mostPopularDishesSection} />
    </>
  );
};

export default Home;
