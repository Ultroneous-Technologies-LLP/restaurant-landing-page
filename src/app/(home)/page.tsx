import { EatingWell, Hero } from "@/components/home";
import data from "@/content/home-page-layout.json";

import { homePageProps } from "./types";

const Home = () => {
  const { heroSection, eatingWellSection }: homePageProps = data;
  return (
    <>
      <Hero {...heroSection} />;
      <EatingWell {...eatingWellSection} />;
    </>
  );
};

export default Home;
