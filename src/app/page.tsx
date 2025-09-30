import data from "@/content/home-page-layout.json";
import { EatingWell, Hero } from "@/components/home";
import { homeLayoutTypes } from "@/components/home/types";

const Home = () => {
  const { heroSection, eatingWellSection }: homeLayoutTypes = data;

  return (
    <>
      <Hero {...heroSection} />
      <EatingWell {...eatingWellSection} />
    </>
  );
};

export default Home;
