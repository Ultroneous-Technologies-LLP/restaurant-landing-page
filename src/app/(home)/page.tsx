import data from "@/content/home-page-layout.json";
import { EatingWell, Hero, QualityComes } from "@/components/home";

import { homePageProps } from "./types";

const Home = () => {
  const { heroSection, eatingWellSection, qualityComesSection }: homePageProps =
    data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
      <QualityComes {...qualityComesSection} />
    </>
  );
};

export default Home;
