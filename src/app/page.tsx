import data from "@/content/home-page-layout.json";
import { homeLayoutTypes } from "@/components/home/types";
import { EatingWell, Hero, QualityComes } from "@/components/home";

const Home = () => {
  const {
    heroSection,
    eatingWellSection,
    qualityComesSection,
  }: homeLayoutTypes = data;

  return (
    <>
      <Hero {...heroSection} />
      <EatingWell {...eatingWellSection} />
      <QualityComes {...qualityComesSection} />
    </>
  );
};

export default Home;
