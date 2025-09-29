import { Hero } from "@/components/home";
import data from "@/content/home-page-layout.json";

import { homePageProps } from "./types";

const Home = () => {
  const { heroSection }: homePageProps = data;
  return <Hero {...heroSection} />;
};

export default Home;
