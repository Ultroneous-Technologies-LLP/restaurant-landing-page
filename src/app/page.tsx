import { Hero } from "@/components/home";
import data from "@/content/home-page-layout.json";
import { homeLayoutTypes } from "@/components/home/types";

const Home = () => {
  const { heroSection }: homeLayoutTypes = data;
  return <Hero {...heroSection} />;
};

export default Home;
