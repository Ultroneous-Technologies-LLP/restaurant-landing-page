import { ImageTypes } from '@/types';

interface Src {
  src: string;
}

interface BackgroundImage {
  desktopImage: Src;
  tabImage: Src;
  mobileImage: Src;
  alt: string;
}

interface Button {
  label: string;
  link: string;
}

export interface HeroSectionProps {
  backgroundImage: BackgroundImage;
  heading: string;
  description: string;
  chefs: ImageTypes[];
  extraChefCount?: number;
  storyImage: ImageTypes;
  bottomImage: ImageTypes;
  menuImage: ImageTypes;
  button: Button;
}
