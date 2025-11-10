import { ImageTypes } from "@/types";

interface Src {
  src: string;
}

interface BackgroundImage {
  alt: string;
  desktopImage: Src;
  mobileImage: Src;
  tabImage: Src;
}

interface Button {
  label: string;
  link: string;
}

export interface HeroSectionProps {
  backgroundImage: BackgroundImage;
  bottomImage: ImageTypes;
  button: Button;
  chefs: ImageTypes[];
  description: string;
  heading: string;
  menuImage: ImageTypes;
  storyImage: ImageTypes;
  extraChefCount?: number;
}
